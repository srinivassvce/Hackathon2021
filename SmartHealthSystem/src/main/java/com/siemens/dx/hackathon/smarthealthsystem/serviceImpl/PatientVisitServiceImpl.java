package com.siemens.dx.hackathon.smarthealthsystem.serviceImpl;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientMedicine;
import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientVisit;
import com.siemens.dx.hackathon.smarthealthsystem.service.IPatientVisitService;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientMedicinesRepository;
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
}
