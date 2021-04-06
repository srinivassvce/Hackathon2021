package com.siemens.dx.hackathon.smarthealthsystem.controllers;


import com.siemens.dx.hackathon.smarthealthsystem.service.IPatientImmunizationService;

import com.siemens.dx.hackathon.smarthealthsystem.exceptions.MethodArgumentNotValidException;

import com.siemens.dx.hackathon.smarthealthsystem.serviceImpl.PatientImmunizationServiceImpl;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientImmunizationModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
class PatientImmunizationController {
  @Autowired
  IPatientImmunizationService patientImmunizationService;

  @GetMapping(path = "/get/patient/immunization/{patientId}")
  public
  ResponseEntity<List<PatientImmunizationModel>> getImmunizationsForPatient(
      @PathVariable long patientId) {
    return new ResponseEntity<>(patientImmunizationService.getAllImmunizationsForPatient(patientId),
        HttpStatus.OK);
  }

  @PostMapping(path = "/add/patient/immunization")
  public
  ResponseEntity<PatientImmunizationModel> addVaccineForPatient(
      @RequestBody PatientImmunizationModel immunizationModel)
  throws MethodArgumentNotValidException {
    return new ResponseEntity<>(
        patientImmunizationService.addPatientImmunization(immunizationModel), HttpStatus.CREATED);
  }

  @DeleteMapping(path = "/delete/patient/immunization/{immunizationId}")
  public
  ResponseEntity<String> deleteAllergyForAPatient(@PathVariable long allergyId) {
    String message = patientImmunizationService.deleteImmunizationForAPatient(allergyId);
    return new ResponseEntity<>(message, HttpStatus.OK);
  }
}
