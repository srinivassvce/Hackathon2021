package com.siemens.dx.hackathon.smarthealthsystem.controllers;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Allergy;
import com.siemens.dx.hackathon.smarthealthsystem.entity.Patient;
import com.siemens.dx.hackathon.smarthealthsystem.exceptions.EntityNotFoundException;
import com.siemens.dx.hackathon.smarthealthsystem.exceptions.MethodArgumentNotValidException;
import com.siemens.dx.hackathon.smarthealthsystem.service.IAllergyService;
import com.siemens.dx.hackathon.smarthealthsystem.serviceImpl.AllergyServiceImpl;

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
class AllergyController {

  @Autowired
  IAllergyService allergyService;

  @GetMapping(path = "/get/allergy/all")
  public
  ResponseEntity<List<Allergy>> getAllAllergies() {
    return new ResponseEntity<>(allergyService.getAllAllergies(), HttpStatus.OK);
  }

  @GetMapping(path = "/get/allergy/{allergyId}")
  public
  ResponseEntity<Allergy> getAllAllergies(@PathVariable long allergyId)
  throws EntityNotFoundException {
    Allergy allergy = allergyService.getAllergyById(allergyId);
    return new ResponseEntity<>(allergy, HttpStatus.OK);
  }

  @PostMapping(path = "/create/allergy")
  public
  ResponseEntity<Allergy> createAllergy(@RequestBody Allergy allergy)
  throws MethodArgumentNotValidException {
    return new ResponseEntity<>(allergyService.createNewAllergy(allergy), HttpStatus.CREATED);
  }

 /* // Delete a allergy from Allergy table
  @DeleteMapping(path = "/delete/allergy/{allergyId}")
  public
  ResponseEntity<String> deleteAllergy(@PathVariable long allergyId) {
    String message = allergyService.deleteAllergy(allergyId);
    return new ResponseEntity<>(message, HttpStatus.OK);
  }*/
}
