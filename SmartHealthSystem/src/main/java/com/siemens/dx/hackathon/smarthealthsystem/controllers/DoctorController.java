package com.siemens.dx.hackathon.smarthealthsystem.controllers;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Doctor;
import com.siemens.dx.hackathon.smarthealthsystem.entity.HealthCareProvider;
import com.siemens.dx.hackathon.smarthealthsystem.entity.LoginParameter;
import com.siemens.dx.hackathon.smarthealthsystem.service.IDoctorService;
import com.siemens.dx.hackathon.smarthealthsystem.serviceImpl.DoctorServiceImpl;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.DoctorModel;

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
import java.util.Set;

@RestController
@RequestMapping(path = "/api")
public
class DoctorController {
  @Autowired
  IDoctorService doctorService;

  @GetMapping(path = "/get/doctor/all")
  public
  ResponseEntity<List<DoctorModel>> getAllDoctors() {
    return new ResponseEntity<>(doctorService.findAll(), HttpStatus.OK);
  }

  @GetMapping(path = "/get/doctor/{doctorId}")
  public
  ResponseEntity<DoctorModel> getDoctorById(@PathVariable long doctorId) {
    return new ResponseEntity<>(doctorService.findByDoctorId(doctorId), HttpStatus.OK);
  }

/*  @GetMapping(path = "/get/doctor/hcps/{doctorId}")
  public
  ResponseEntity<Set<HealthCareProvider>> getHcpsForDoctorById(@PathVariable long doctorId) {
    return new ResponseEntity<>(doctorService.findByDoctorId(doctorId).getHealthCareProviders(),
        HttpStatus.OK);
  }*/

  // login
  @PostMapping(path = "/doctorLogin")
  public
  ResponseEntity<String> loginDoctor(@RequestBody LoginParameter loginParameter) {
    String email = loginParameter.getEmail();
    String pw = loginParameter.getPassword();

    String message = doctorService.loginDoctor(email, pw);
    return new ResponseEntity<>(message, HttpStatus.OK);
  }
}
