package com.siemens.dx.hackathon.smarthealthsystem.serviceImpl;

import com.siemens.dx.hackathon.smarthealthsystem.entity.MedicalInsurance;
import com.siemens.dx.hackathon.smarthealthsystem.service.IInsuranceService;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.InsuranceRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public
class InsuranceServiceImpl implements IInsuranceService {

  @Autowired
  InsuranceRepository insuranceRepository;

  @Override
  public
  List<MedicalInsurance> getAllInsuranceCompanies() {
    return insuranceRepository.findAll();
  }

  @Override
  public
  MedicalInsurance getInsuranceById(Long insuranceId) {
    return insuranceRepository.findById(insuranceId).get();
  }

  @Override
  public
  MedicalInsurance createNewMedicalInsurance(MedicalInsurance medicalInsurance) {
    return insuranceRepository.save(medicalInsurance);
  }

  @Override
  public
  MedicalInsurance updateExistingMedicalInsurance(MedicalInsurance medicalInsurance,
                                                  long insuranceId) {
    return insuranceRepository.save(medicalInsurance);
  }

  @Override
  public
  void deleteMedicalInsurance(long insuranceId) {
       insuranceRepository.deleteById(insuranceId);
  }
}
