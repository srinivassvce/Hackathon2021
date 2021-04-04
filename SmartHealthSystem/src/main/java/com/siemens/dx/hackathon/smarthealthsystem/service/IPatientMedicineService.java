package com.siemens.dx.hackathon.smarthealthsystem.service;

import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientMedicineModel;

import java.util.List;

public
interface IPatientMedicineService {
  List<PatientMedicineModel> getAllMedicinesForPatient(Long patientId);
}
