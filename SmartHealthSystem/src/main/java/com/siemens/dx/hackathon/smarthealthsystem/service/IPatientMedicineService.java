package com.siemens.dx.hackathon.smarthealthsystem.service;

import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientMedicineModel;

import java.util.List;

public
interface IPatientMedicineService {
  PatientMedicineModel addPatientMedicine(PatientMedicineModel patientMedicineModel);

  List<PatientMedicineModel> getAllMedicinesForPatient(Long patientId);

  String deletePatientMedicine(Long medicineId);
}
