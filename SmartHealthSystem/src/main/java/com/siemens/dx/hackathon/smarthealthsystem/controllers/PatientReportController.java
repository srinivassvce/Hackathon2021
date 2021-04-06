package com.siemens.dx.hackathon.smarthealthsystem.controllers;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientReports;
import com.siemens.dx.hackathon.smarthealthsystem.exceptions.EntityNotFoundException;
import com.siemens.dx.hackathon.smarthealthsystem.exceptions.MethodArgumentNotValidException;
import com.siemens.dx.hackathon.smarthealthsystem.service.IPatientReportService;

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
class PatientReportController {

  @Autowired
  IPatientReportService patientReportService;

  @GetMapping(path = "/get/patient/report/all")
  public
  ResponseEntity<List<PatientReports>> getAllPatientReports() {
    List<PatientReports> patientReports = patientReportService.getAllPatientReports();
    return new ResponseEntity<>(patientReports, HttpStatus.OK);
  }

  @GetMapping(path = "/get/patient/report/{patientId}")
  public
  ResponseEntity<List<PatientReports>> getReportsByPatient(@PathVariable long patientId)
  throws EntityNotFoundException {
    return new ResponseEntity<>(patientReportService.getAllPatientReportByPatientId(patientId),
        HttpStatus.OK);
  }

  @PostMapping(path = "/add/patient/report")
  public
  ResponseEntity<PatientReports> createPatientReport(@RequestBody PatientReports patientReports)
  throws MethodArgumentNotValidException {
    return new ResponseEntity<>(patientReportService.addPatientReport(patientReports),
        HttpStatus.CREATED);
  }
}
