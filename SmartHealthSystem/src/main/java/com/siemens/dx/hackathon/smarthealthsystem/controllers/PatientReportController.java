package com.siemens.dx.hackathon.smarthealthsystem.controllers;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientReport;
import com.siemens.dx.hackathon.smarthealthsystem.exceptions.EntityNotFoundException;
import com.siemens.dx.hackathon.smarthealthsystem.exceptions.MethodArgumentNotValidException;
import com.siemens.dx.hackathon.smarthealthsystem.service.IPatientReportService;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientReportModel;

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

//  @GetMapping(path = "/get/patient/report/all")
//  public
//  ResponseEntity<List<PatientReport>> getAllPatientReports() {
//    List<PatientReport> patientReports = patientReportService.getAllPatientReports();
//    return new ResponseEntity<>(patientReports, HttpStatus.OK);
//  }

  @GetMapping(path = "/get/patient/report/{patientId}")
  public
  ResponseEntity<List<PatientReport>> getReportsByPatient(@PathVariable long patientId)
  throws EntityNotFoundException {
    return new ResponseEntity<>(patientReportService.getAllPatientReportByPatientId(patientId),
        HttpStatus.OK);
  }

  @PostMapping(path = "/add/patient/report")
  public
  ResponseEntity<PatientReportModel> createPatientReport(@RequestBody PatientReportModel patientReportModel)
  throws MethodArgumentNotValidException {
    return new ResponseEntity<>(patientReportService.addPatientReport(patientReportModel),
        HttpStatus.CREATED);
  }
}
