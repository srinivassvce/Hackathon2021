package com.siemens.dx.hackathon.smarthealthsystem.controllers;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientAllergy;
import com.siemens.dx.hackathon.smarthealthsystem.exceptions.MethodArgumentNotValidException;
import com.siemens.dx.hackathon.smarthealthsystem.serviceImpl.PatientAllergyServiceImpl;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientAllergyModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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
  PatientAllergyServiceImpl patientAllergyService;

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

  @PostMapping(path = "/add/patient/allergy")
  public
  ResponseEntity<PatientAllergyModel> createPatientAllergy(
      @RequestBody PatientAllergyModel patientAllergyModel)
  throws MethodArgumentNotValidException {
    return new ResponseEntity<>(patientAllergyService.createPatientAllergy(patientAllergyModel),
        HttpStatus.CREATED);
  }

  @DeleteMapping(path = "/delete/patient/allergy/{allergyId}")
  public
  ResponseEntity<String> deleteAllergyForAPatient(@PathVariable long allergyId) {
    String message = patientAllergyService.deleteAllergyForAPatient(allergyId);
    return new ResponseEntity<>(message, HttpStatus.OK);
  }
}
