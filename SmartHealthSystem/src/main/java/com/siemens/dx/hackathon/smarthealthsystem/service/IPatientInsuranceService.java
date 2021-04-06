package com.siemens.dx.hackathon.smarthealthsystem.service;

import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientInsuranceModel;

import java.util.List;

public
interface IPatientInsuranceService {

  PatientInsuranceModel addPatientInsurance(PatientInsuranceModel patientInsuranceModel);

//  List<PatientInsuranceModel> getAllPatientInsurance();
//
//  PatientInsurance getPatientInsuranceById(Long patientInsuranceId);
/*
  PatientInsurance updatePatientInsurance(PatientInsurance patientInsurance);*/

  List<PatientInsuranceModel> getAllInsuranceForAPatient(Long patientId);

  String deletePatientInsurance(Long insuranceId);
}
