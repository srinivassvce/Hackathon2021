package com.siemens.dx.hackathon.smarthealthsystem.service;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientAllergy;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientAllergyModel;

import java.util.List;

public
interface IPatientAllergyService {
  PatientAllergyModel createPatientAllergy(PatientAllergyModel patientAllergyModel);

  List<PatientAllergyModel> getAllergiesForAPatient(Long patientId);

  String deleteAllergyForAPatient(Long allergyId);

/*  PatientAllergy updatePatientAllergy(PatientAllergy patientAllergy);

  List<PatientAllergy> getPatientsAllergies();*/
}
