package com.siemens.dx.hackathon.smarthealthsystem.serviceImpl;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientMedicine;
import com.siemens.dx.hackathon.smarthealthsystem.service.IPatientMedicineService;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.MedicineRepository;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientMedicinesRepository;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientRepository;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientVisitRepository;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.EntityToViewModelConverter;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientMedicineModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public
class PatientMedicineServiceImpl implements IPatientMedicineService {
  @Autowired
  PatientMedicinesRepository patientMedicinesRepository;

  @Autowired
  PatientRepository patientRepository;

  @Autowired
  MedicineRepository medicineRepository;

  @Autowired
  PatientVisitRepository patientVisitRepository;

  @Override
  public
  PatientMedicineModel addPatientMedicine(PatientMedicineModel patientMedicineModel) {
    PatientMedicine patientMedicine = new PatientMedicine();
    patientMedicine.setFrequency(patientMedicineModel.getFrequency());
    patientMedicine.setFromDate(patientMedicineModel.getFromDate());
    patientMedicine.setPatientVisit(
        patientVisitRepository.findById(patientMedicineModel.getPatientVisitId()).get());
    patientMedicine.setPatient(
        patientRepository.findById(patientMedicineModel.getPatientId()).get());
    patientMedicine.setMedicine(
        medicineRepository.findById(patientMedicineModel.getMedicineId()).get());

    return EntityToViewModelConverter.convertPatientMedicine(
        patientMedicinesRepository.save(patientMedicine));
  }

  @Override
  public
  List<PatientMedicineModel> getAllMedicinesForPatient(Long patientId) {
    List<PatientMedicine> patientMedicines =
        patientMedicinesRepository.findAllByPatient_PatientId(patientId);
    List<PatientMedicineModel> medicineModels = new ArrayList<>();
    for (PatientMedicine patientMedicine : patientMedicines) {
      medicineModels.add(EntityToViewModelConverter.convertPatientMedicine(patientMedicine));
    }
    return medicineModels;
  }

  @Override
  public
  String deletePatientMedicine(Long medicineId) {
    patientMedicinesRepository.delete(patientMedicinesRepository.findById(medicineId).get());
    return "Medicine with id:" + medicineId + " deleted successfully!";
  }
}
