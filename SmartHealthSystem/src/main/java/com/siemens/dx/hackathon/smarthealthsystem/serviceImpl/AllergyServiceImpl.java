package com.siemens.dx.hackathon.smarthealthsystem.serviceImpl;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Allergy;
import com.siemens.dx.hackathon.smarthealthsystem.entity.Patient;
import com.siemens.dx.hackathon.smarthealthsystem.service.IAllergyService;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.AllergyRepository;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public
class AllergyServiceImpl implements IAllergyService {

  @Autowired
  private AllergyRepository allergyRepository;

  @Override
  public
  List<Allergy> getAllAllergies() {
    return allergyRepository.findAll();
  }

  @Override
  public
  Allergy getAllergyById(Long allergyId) {
    return allergyRepository.findById(allergyId).get();
  }

  @Override
  public
  Allergy createNewAllergy(Allergy allergy) {
    return allergyRepository.save(allergy);
  }

  @Override
  public
  Allergy updateExistingAllergy(Allergy allergy) {
    return allergyRepository.save(allergy);
  }

  @Override
  public
  String deleteAllergy(long allergyId) {
    Allergy allergy = allergyRepository.findById(allergyId).get();
    allergyRepository.delete(allergy);
    return "Allergy with id: " + allergyId + " deleted successfully!";
  }
}
