package com.siemens.dx.hackathon.smarthealthsystem.controllers;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Medicine;
import com.siemens.dx.hackathon.smarthealthsystem.exceptions.MethodArgumentNotValidException;
import com.siemens.dx.hackathon.smarthealthsystem.service.IMedicineService;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.MedicineRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
public
class MedicinesController {

  @Autowired
  IMedicineService medicineService;

  @GetMapping(path = "/get/medicine/all")
  public
  ResponseEntity<List<Medicine>> getAllImmunizations() {
    return new ResponseEntity<>(medicineService.getAllImmunizations(), HttpStatus.OK);
  }
  @PostMapping(path = "/create/medicine")
  public
  ResponseEntity<Medicine> createMedicines(@RequestBody Medicine medicine)
  throws MethodArgumentNotValidException {
    return new ResponseEntity<>(medicineService.createMedicines(medicine), HttpStatus.CREATED);
  }
}
