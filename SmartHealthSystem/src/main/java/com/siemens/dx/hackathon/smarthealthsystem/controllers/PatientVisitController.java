package com.siemens.dx.hackathon.smarthealthsystem.controllers;

import com.siemens.dx.hackathon.smarthealthsystem.exceptions.MethodArgumentNotValidException;
import com.siemens.dx.hackathon.smarthealthsystem.service.IPatientVisitService;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.DoctorModel;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.MedicalHistoryModel;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientVisitModel;

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
class PatientVisitController {
  @Autowired
  IPatientVisitService patientVisitService;

  @GetMapping(path = "/get/patient/visits/{patientId}")
  public
  ResponseEntity<List<PatientVisitModel>> getVisitsForPatient(@PathVariable long patientId) {
    return new ResponseEntity<>(patientVisitService.getAllVisitDetailsForPatient(patientId),
        HttpStatus.OK);
  }

  @GetMapping(path = "/get/patient/visits/doctors/{patientId}")
  public
  ResponseEntity<List<DoctorModel>> getDoctorsForPatient(@PathVariable long patientId) {
    return new ResponseEntity<>(patientVisitService.getAllDoctorsForAPatient(patientId),
        HttpStatus.OK);
  }

  @GetMapping(path = "/get/patient/visits/medicalHistory/{patientId}")
  public
  ResponseEntity<List<MedicalHistoryModel>> getMedicalHistory(@PathVariable long patientId) {
     return new ResponseEntity<>(patientVisitService.getMedicalHistory(patientId), HttpStatus.OK);
  }
/*  @GetMapping(path = "/get/patient/visits/all")
  public
  ResponseEntity<List<PatientVisit>> getAllVisits() {
    return new ResponseEntity<>(patientVisitService.getAllVisits(), HttpStatus.OK);
  }*/

  @PostMapping(path = "/add/patient/visit")
  public
  ResponseEntity<PatientVisitModel> addPatientVisit(
      @RequestBody PatientVisitModel patientVisitModel)
  throws MethodArgumentNotValidException {
    return new ResponseEntity<>(patientVisitService.addPatientVisit(patientVisitModel),
        HttpStatus.CREATED);
  }
}
