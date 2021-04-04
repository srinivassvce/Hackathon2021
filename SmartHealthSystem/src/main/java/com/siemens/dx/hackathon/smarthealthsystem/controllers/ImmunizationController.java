package com.siemens.dx.hackathon.smarthealthsystem.controllers;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Immunization;
import com.siemens.dx.hackathon.smarthealthsystem.service.IImmunizationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
public
class ImmunizationController {
  @Autowired
  IImmunizationService iImmunizationService;

  @GetMapping(path = "/get/immunization/all")
  public
  ResponseEntity<List<Immunization>> getAllImmunizations() {
    return new ResponseEntity<>(iImmunizationService.getAllImmunizations(), HttpStatus.OK);
  }
}
