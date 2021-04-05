package com.siemens.dx.hackathon.smarthealthsystem.service;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientInsurance;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientAllergyModel;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientInsuranceModel;

import java.util.List;

public
interface IPatientInsuranceService {

  PatientInsurance addPatientInsurance(PatientInsurance patientInsurance);

//  List<PatientInsuranceModel> getAllPatientInsurance();
//
//  PatientInsurance getPatientInsuranceById(Long patientInsuranceId);

  PatientInsurance updatePatientInsurance(PatientInsurance patientInsurance);

  List<PatientInsuranceModel> getAllInsuranceForAPatient(Long patientId);
}
