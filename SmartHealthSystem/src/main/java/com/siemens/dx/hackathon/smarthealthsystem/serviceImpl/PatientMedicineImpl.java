package com.siemens.dx.hackathon.smarthealthsystem.serviceImpl;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientMedicine;
import com.siemens.dx.hackathon.smarthealthsystem.service.IPatientMedicineService;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientMedicinesRepository;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.EntityToViewModelConverter;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientMedicineModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public
class PatientMedicineImpl implements IPatientMedicineService {
  @Autowired
  PatientMedicinesRepository patientMedicinesRepository;

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
}
