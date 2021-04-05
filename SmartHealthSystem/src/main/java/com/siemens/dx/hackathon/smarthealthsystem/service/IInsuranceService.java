package com.siemens.dx.hackathon.smarthealthsystem.service;

import com.siemens.dx.hackathon.smarthealthsystem.entity.MedicalInsurance;

import java.util.List;

public
interface IInsuranceService {

  List<MedicalInsurance> getAllInsuranceCompanies();

  MedicalInsurance getInsuranceById(Long insuranceId);

  MedicalInsurance createNewMedicalInsurance(MedicalInsurance medicalInsurance);

  MedicalInsurance updateExistingMedicalInsurance(MedicalInsurance medicalInsurance,
                                                  long insuranceId);

  void deleteMedicalInsurance(long insuranceId);
}
