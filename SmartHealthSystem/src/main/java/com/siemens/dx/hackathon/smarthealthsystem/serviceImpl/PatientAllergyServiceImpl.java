package com.siemens.dx.hackathon.smarthealthsystem.serviceImpl;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientAllergy;
import com.siemens.dx.hackathon.smarthealthsystem.service.IPatientAllergyService;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.AllergyRepository;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientAllergyRepository;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientRepository;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.EntityToViewModelConverter;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientAllergyModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public
class PatientAllergyServiceImpl implements IPatientAllergyService {

  @Autowired
  PatientAllergyRepository patientAllergyRepository;

  @Autowired
  PatientRepository patientRepository;

  @Autowired
  AllergyRepository allergyRepository;

  @Override
  public
  PatientAllergyModel createPatientAllergy(PatientAllergyModel patientAllergyModel) {
    PatientAllergy patientAllergy = new PatientAllergy();
    patientAllergy.setPatient(patientRepository.findById(patientAllergyModel.getPatientId()).get());
    patientAllergy.setAllergy(allergyRepository.findById(patientAllergyModel.getAllergyId()).get());
    patientAllergy.setSymptoms(patientAllergyModel.getSymptoms());
    return EntityToViewModelConverter.convertPatientAllergy(
        patientAllergyRepository.save(patientAllergy));
  }

/*  @Override
  public
  PatientAllergy updatePatientAllergy(PatientAllergy patientAllergy) {
    return patientAllergyRepository.save(patientAllergy);
  }*/

/*  @Override
  public
  List<PatientAllergy> getPatientsAllergies() {
    return patientAllergyRepository.findAll();
  }*/

  @Override
  public
  List<PatientAllergyModel> getAllergiesForAPatient(Long patientId) {
    List<PatientAllergy> patientAllergies =
        patientAllergyRepository.findByPatient_PatientId(patientId);
    List<PatientAllergyModel> patientAllergyModels = new ArrayList<>();
    for (PatientAllergy patientAllergy : patientAllergies) {
      patientAllergyModels.add(EntityToViewModelConverter.convertPatientAllergy(patientAllergy));
    }
    return patientAllergyModels;
  }

  @Override
  public
  String deleteAllergyForAPatient(Long allergyId) {
    patientAllergyRepository.delete(patientAllergyRepository.findById(allergyId).get());
    return "Allergy with id:" + allergyId + " deleted successfully!";
  }
}
