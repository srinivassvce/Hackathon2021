package com.siemens.dx.hackathon.smarthealthsystem.controllers;

import com.siemens.dx.hackathon.smarthealthsystem.entity.MedicalInsurance;
import com.siemens.dx.hackathon.smarthealthsystem.exceptions.EntityNotFoundException;
import com.siemens.dx.hackathon.smarthealthsystem.exceptions.MethodArgumentNotValidException;
import com.siemens.dx.hackathon.smarthealthsystem.service.IInsuranceService;
import com.siemens.dx.hackathon.smarthealthsystem.serviceImpl.InsuranceServiceImpl;

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
class InsuranceController {

  @Autowired
  IInsuranceService insuranceService;

  @GetMapping(path = "/get/insuranceCompany/all")
  public
  ResponseEntity<List<MedicalInsurance>> getAllInsuranceCompanies() {
    return new ResponseEntity<>(insuranceService.getAllInsuranceCompanies(), HttpStatus.OK);
  }


  @GetMapping(path = "/get/insuranceCompany/{insuranceId}")
  public
  ResponseEntity<MedicalInsurance> getInsuranceById(@PathVariable long insuranceId)
  throws EntityNotFoundException {
    MedicalInsurance medicalInsurance = insuranceService.getInsuranceById(insuranceId);
    return new ResponseEntity<>(medicalInsurance, HttpStatus.OK);
  }

  @PostMapping(path = "/create/insurance")
  public
  ResponseEntity<MedicalInsurance> createNewInsurance(@RequestBody MedicalInsurance medicalInsurance)
  throws MethodArgumentNotValidException {
    return new ResponseEntity<>(insuranceService.createNewMedicalInsurance(medicalInsurance),
        HttpStatus.CREATED);
  }

  @DeleteMapping(path = "/delete/insurance/{insuranceId}")
  public
  ResponseEntity<String> deleteInsurance(@PathVariable long insuranceId) {
    insuranceService.deleteMedicalInsurance(insuranceId);
    return new ResponseEntity<>("Deleted", HttpStatus.OK);
  }
}
