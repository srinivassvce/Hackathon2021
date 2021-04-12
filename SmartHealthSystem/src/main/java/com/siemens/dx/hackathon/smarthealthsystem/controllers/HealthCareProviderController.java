package com.siemens.dx.hackathon.smarthealthsystem.controllers;

import com.siemens.dx.hackathon.smarthealthsystem.entity.HealthCareProvider;
import com.siemens.dx.hackathon.smarthealthsystem.service.IHealthCareProviderService;
import com.siemens.dx.hackathon.smarthealthsystem.serviceImpl.HealthCareProviderServiceImpl;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.HealthCareProviderModel;

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
class HealthCareProviderController {
  @Autowired
  IHealthCareProviderService healthCareProviderService;

  @GetMapping(path = "/get/hcp/all")
  public
  ResponseEntity<List<HealthCareProviderModel>> getAllHcps() {
    return new ResponseEntity<>(healthCareProviderService.getAllHealthCareProviders(),
        HttpStatus.OK);
  }

  @GetMapping(path = "/get/hcp/{hcpId}")
  public
  ResponseEntity<HealthCareProviderModel> getAllHcps(@PathVariable long hcpId) {
    return new ResponseEntity<>(healthCareProviderService.getHcpById(hcpId), HttpStatus.OK);
  }
/*
  @GetMapping(path = "/get/hcp/doctor/{hcpId}")
  public
  ResponseEntity<Set<DoctorModel>> getAllDoctorsForHcpById(@PathVariable long hcpId) {
    return new ResponseEntity<>(healthCareProviderService.getHcpById(hcpId).getDoctors(),
        HttpStatus.OK);
  }*/
}
