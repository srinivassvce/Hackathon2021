package com.siemens.dx.hackathon.smarthealthsystem.service;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientAllergy;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientImmunizationModel;

import java.util.List;

public
interface IPatientImmunizationService {
  PatientImmunizationModel addPatientImmunization(PatientImmunizationModel patientImmunizationModel);

  List<PatientImmunizationModel> getAllImmunizationsForPatient(Long PatientId);

  String deleteImmunizationForAPatient(Long immunizationId);
}
