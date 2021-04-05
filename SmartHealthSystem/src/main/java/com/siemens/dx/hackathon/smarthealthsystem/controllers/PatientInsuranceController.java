package com.siemens.dx.hackathon.smarthealthsystem.controllers;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientInsurance;
import com.siemens.dx.hackathon.smarthealthsystem.exceptions.MethodArgumentNotValidException;
import com.siemens.dx.hackathon.smarthealthsystem.serviceImpl.PatientInsuranceServiceImpl;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientInsuranceModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
public
class PatientInsuranceController {

  @Autowired
  PatientInsuranceServiceImpl patientInsuranceService;

 /* @GetMapping(path = "/get/patient/insurance/all")
  public
  ResponseEntity<List<PatientInsuranceModel>> getPatientsInsurances() {
    return new ResponseEntity<>(patientInsuranceService.getAllPatientInsurance(), HttpStatus.OK);
  }*/

  @GetMapping(path = "/get/patient/insurance/{patientId}")
  public
  ResponseEntity<List<PatientInsuranceModel>> getAllInsuranceForPatient(@PathVariable long patientId) {
    return new ResponseEntity<>(patientInsuranceService.getAllInsuranceForAPatient(patientId), HttpStatus.OK);
  }

  @PostMapping(path = "/create/pat-ins")
  public
  ResponseEntity<PatientInsurance> createPatientInsurance(@RequestBody
                                                              PatientInsurance patientInsurance)
  throws MethodArgumentNotValidException {
    return new ResponseEntity<>(patientInsuranceService.addPatientInsurance(patientInsurance),
        HttpStatus.CREATED);
  }

  @PutMapping(path = "/update/pat-ins/{patInsId}")
  public
  ResponseEntity<PatientInsurance> updatePatientInsurance(@RequestBody
                                                              PatientInsurance patientInsurance,
                                                          @PathVariable long patInsId) {
    return new ResponseEntity<>(patientInsuranceService.updatePatientInsurance(patientInsurance),
        HttpStatus.CREATED);
  }
}
