package com.siemens.dx.hackathon.smarthealthsystem.controllers;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientAllergy;
import com.siemens.dx.hackathon.smarthealthsystem.exceptions.MethodArgumentNotValidException;
import com.siemens.dx.hackathon.smarthealthsystem.service.IPatientAllergyService;
import com.siemens.dx.hackathon.smarthealthsystem.serviceImpl.PatientAllergyServiceImpl;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientAllergyModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
public
class PatientAllergyController {

  @Autowired
  IPatientAllergyService patientAllergyService;

/*  @GetMapping(path = "/get/patient-allergy")
  public
  ResponseEntity<List<PatientAllergy>> getPatientsAllergies() {
    return new ResponseEntity<>(patientAllergyService.getPatientsAllergies(), HttpStatus.OK);
  }*/


  @GetMapping(path = "/get/patient/allergy/{patientId}")
  public
  ResponseEntity<List<PatientAllergyModel>> getAllergiesForAPatient(@PathVariable long patientId) {
    return new ResponseEntity<>(patientAllergyService.getAllergiesForAPatient(patientId),
        HttpStatus.OK);
  }

  @PostMapping(path = "/create/patient/allergy")
  public
  ResponseEntity<PatientAllergy> createPatientAllergy(@RequestBody PatientAllergy patientAllergy)
  throws MethodArgumentNotValidException {
    return new ResponseEntity<>(patientAllergyService.createPatientAllergy(patientAllergy),
        HttpStatus.CREATED);
  }
}
