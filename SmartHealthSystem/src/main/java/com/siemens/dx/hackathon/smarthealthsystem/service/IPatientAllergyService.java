package com.siemens.dx.hackathon.smarthealthsystem.service;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientAllergy;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientAllergyModel;

import java.util.List;

public
interface IPatientAllergyService {

  PatientAllergy createPatientAllergy(PatientAllergy patientAllergy);

  PatientAllergy updatePatientAllergy(PatientAllergy patientAllergy);

  List<PatientAllergy> getPatientsAllergies();

  List<PatientAllergyModel> getAllergiesForAPatient(Long patientId);
}
