package com.siemens.dx.hackathon.smarthealthsystem.controllers;

import com.siemens.dx.hackathon.smarthealthsystem.exceptions.MethodArgumentNotValidException;
import com.siemens.dx.hackathon.smarthealthsystem.service.IPatientMedicineService;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientMedicineModel;

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
class PatientMedicineController {
  @Autowired
  IPatientMedicineService patientMedicinesService;

  @GetMapping(path = "/get/patient/medicine/{patientId}")
  public
  ResponseEntity<List<PatientMedicineModel>> getMedicinesForPatient(@PathVariable long patientId) {
    return new ResponseEntity<>(patientMedicinesService.getAllMedicinesForPatient(patientId),
        HttpStatus.OK);
  }

  @PostMapping(path = "/add/patient/medicine")
  public
  ResponseEntity<PatientMedicineModel> addPatientMedicine(
      @RequestBody PatientMedicineModel patientMedicineModel)
  throws MethodArgumentNotValidException {
    return new ResponseEntity<>(patientMedicinesService.addPatientMedicine(patientMedicineModel),
        HttpStatus.CREATED);
  }

  @DeleteMapping(path = "/delete/patient/medicine/{medicineId}")
  public
  ResponseEntity<String> deletePatientMedicine(@PathVariable long medicineId) {
    String message = patientMedicinesService.deletePatientMedicine(medicineId);
    return new ResponseEntity<>(message, HttpStatus.OK);
  }
}
