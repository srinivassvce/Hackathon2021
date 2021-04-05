package com.siemens.dx.hackathon.smarthealthsystem.serviceImpl;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientInsurance;
import com.siemens.dx.hackathon.smarthealthsystem.service.IPatientInsuranceService;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientInsuranceRepository;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.EntityToViewModelConverter;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientInsuranceModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public
class PatientInsuranceServiceImpl implements IPatientInsuranceService {

  @Autowired
  PatientInsuranceRepository patientInsuranceRepository;

  @Override
  public
  PatientInsurance addPatientInsurance(PatientInsurance patientInsurance) {
    return patientInsuranceRepository.save(patientInsurance);
  }

  /*@Override
  public
  List<PatientInsuranceModel> getAllPatientInsurance() {
    List<PatientInsurance> patientInsurances = patientInsuranceRepository.findAll();
    List<PatientInsuranceModel> patientInsuranceModels = new ArrayList<>();
    for (PatientInsurance patientInsurance : patientInsurances) {
      patientInsuranceModels.add(EntityToViewModelConverter.convertPatientInsurance(patientInsurance));
    }
    return patientInsuranceModels;
  }

  @Override
  public
  PatientInsurance getPatientInsuranceById(Long patientInsuranceId) {
    return patientInsuranceRepository.findById(patientInsuranceId).get();
  }*/

  @Override
  public
  PatientInsurance updatePatientInsurance(PatientInsurance patientInsurance) {
    return patientInsuranceRepository.save(patientInsurance);
  }

  @Override
  public
  List<PatientInsuranceModel> getAllInsuranceForAPatient(Long patientId) {
    List<PatientInsurance> patientInsurances =
        patientInsuranceRepository.findByPatient_PatientId(patientId);
    List<PatientInsuranceModel> patientInsuranceModels = new ArrayList<>();
    for (PatientInsurance patientInsurance : patientInsurances) {
      patientInsuranceModels.add(EntityToViewModelConverter.convertPatientInsurance(patientInsurance));
    }
    return patientInsuranceModels;
  }
}
