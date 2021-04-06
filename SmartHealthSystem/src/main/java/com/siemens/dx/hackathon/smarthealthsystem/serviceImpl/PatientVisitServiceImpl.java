package com.siemens.dx.hackathon.smarthealthsystem.serviceImpl;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Patient;
import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientMedicine;
import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientVisit;
import com.siemens.dx.hackathon.smarthealthsystem.service.IPatientVisitService;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.DoctorRepository;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.HealthCareProviderRepository;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.MedicineRepository;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientMedicinesRepository;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientRepository;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientVisitRepository;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.EntityToViewModelConverter;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientMedicineModel;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientVisitModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public
class PatientVisitServiceImpl implements IPatientVisitService {

  @Autowired
  PatientVisitRepository patientVisitRepository;

  @Autowired
  PatientMedicinesRepository patientMedicinesRepository;

  @Autowired
  DoctorRepository doctorRepository;

  @Autowired
  HealthCareProviderRepository healthCareProviderRepository;

  @Autowired
  PatientRepository patientRepository;

  @Autowired
  MedicineRepository medicineRepository;

  @Override
  public
  List<PatientVisitModel> getAllVisitDetailsForPatient(Long patientId) {
    List<PatientVisit> patientVisits = patientVisitRepository.findAllByPatient_PatientId(patientId);
    List<PatientVisitModel> patientVisitModels = new ArrayList<>();

    for (PatientVisit patientVisit : patientVisits) {
      List<PatientMedicineModel> patientMedicineModels = new ArrayList<>();
      // get all medicines for visits
      for (PatientMedicine patientMedicine :
          patientMedicinesRepository.findAllByPatientVisit_PatientVisitId(
          patientVisit.getPatientVisitId())) {
        patientMedicineModels.add(
            EntityToViewModelConverter.convertPatientMedicine(patientMedicine));
      }
      patientVisitModels.add(
          EntityToViewModelConverter.convertPatientVisit(patientVisit, patientMedicineModels));
    }
    return patientVisitModels;
  }

  @Override
  public
  List<PatientVisit> getAllVisits() {
    return patientVisitRepository.findAll();
  }

  @Override
  public
  PatientVisitModel addPatientVisit(PatientVisitModel patientVisitModel) {
    PatientVisit patientVisit = new PatientVisit();
    patientVisit.setAdditionalTests(patientVisitModel.getAdditionalTests());
    patientVisit.setDiagnoseNotes(patientVisitModel.getAdditionalTests());
    patientVisit.setNextVisitDateTime(patientVisitModel.getNextVisitDateTime());
    patientVisit.setVisitDateTime(patientVisitModel.getVisitDateTime());
    patientVisit.setSurgeryNotes(patientVisitModel.getSurgeryNotes());
    patientVisit.setDoctor(
        doctorRepository.findById(patientVisitModel.getDoctor().getDoctorId()).get());
    patientVisit.setHealthCareProvider(healthCareProviderRepository
        .findById(patientVisitModel.getHealthCareProvider().getHcpId())
        .get());
    Patient patient =
        patientRepository.findById(patientVisitModel.getPatient().getPatientId()).get();
    patientVisit.setPatient(patient);
    PatientVisit patientVisitSaved = patientVisitRepository.save(patientVisit);
    List<PatientMedicineModel> savedPatientMedicineModels = new ArrayList<>();
    for (PatientMedicineModel patientMedicineModel : patientVisitModel.getMedicines()) {
      PatientMedicine patientMedicine = new PatientMedicine();
      patientMedicine.setFromDate(patientMedicineModel.getFromDate());
      patientMedicine.setToDate(patientMedicineModel.getToDate());
      patientMedicine.setFrequency(patientMedicineModel.getFrequency());
      patientMedicine.setMedicine(
          medicineRepository.findById(patientMedicineModel.getMedicineId()).get());
      patientMedicine.setPatient(patient);
      patientMedicine.setPatientVisit(patientVisitSaved);
      PatientMedicine patientMedicineSaved = patientMedicinesRepository.save(patientMedicine);
      savedPatientMedicineModels.add(
          EntityToViewModelConverter.convertPatientMedicine(patientMedicineSaved));
    }
    return EntityToViewModelConverter.convertPatientVisit(patientVisitSaved,
        savedPatientMedicineModels);
  }
}
