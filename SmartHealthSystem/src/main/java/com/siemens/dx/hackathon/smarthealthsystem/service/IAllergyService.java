package com.siemens.dx.hackathon.smarthealthsystem.service;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Allergy;

import java.util.List;

public
interface IAllergyService {

  List<Allergy> getAllAllergies();

  Allergy getAllergyById(Long allergyId);

  Allergy createNewAllergy(Allergy allergy);

  Allergy updateExistingAllergy(Allergy allergy);

  String deleteAllergy(long allergyId);
}
