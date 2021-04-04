package com.siemens.dx.hackathon.smarthealthsystem.controllers;

import com.siemens.dx.hackathon.smarthealthsystem.service.IPatientMedicineService;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientMedicineModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
public
class PatientMedicineController {
  @Autowired
  IPatientMedicineService patientMedicinesService;

  @GetMapping(path = "/get/patient/medicine/{patientId}")
  public
  ResponseEntity<List<PatientMedicineModel>> getMedicinesForPatient(@PathVariable long patientId) {
    return new ResponseEntity<>(patientMedicinesService.getAllMedicinesForPatient(patientId),
        HttpStatus.OK);
  }
}
