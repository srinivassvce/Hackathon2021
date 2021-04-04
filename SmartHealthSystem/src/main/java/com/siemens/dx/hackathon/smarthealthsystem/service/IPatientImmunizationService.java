package com.siemens.dx.hackathon.smarthealthsystem.service;

import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientImmunizationModel;

import java.util.List;

public
interface IPatientImmunizationService {
  List<PatientImmunizationModel> getAllImmunizationsForPatient(Long PatientId);
}
