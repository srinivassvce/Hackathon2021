package com.siemens.dx.hackathon.smarthealthsystem.controllers;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Allergy;
import com.siemens.dx.hackathon.smarthealthsystem.entity.LoginParameter;
import com.siemens.dx.hackathon.smarthealthsystem.entity.Patient;
import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientAllergy;
import com.siemens.dx.hackathon.smarthealthsystem.exceptions.EntityNotFoundException;
import com.siemens.dx.hackathon.smarthealthsystem.exceptions.MethodArgumentNotValidException;
import com.siemens.dx.hackathon.smarthealthsystem.serviceImpl.PatientServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public
class PatientController {

  @Autowired
  private PatientServiceImpl patientService;

  public static
  void compareAndUpdateObject(Object objUI, Object objDb) {

    //Field[] fields = objDb.getClass().getDeclaredFields();

  }

  @GetMapping(path = "")
  public
  String welcome() {
    return "Welcome to KARMA BYTES home!";
  }

  // Get all patients from Patient table
  @GetMapping(path = "/get/patient/all")
  public
  ResponseEntity<List<Patient>> fetchAllPatients() {
    List<Patient> patients = patientService.getAllPatients();
    return new ResponseEntity<>(patients, HttpStatus.OK);
  }

  // Get Patient by Id from Patient table
  @GetMapping(path = "/get/patient/{patientId}")
  public
  ResponseEntity<Patient> fetchUserById(@PathVariable long patientId)
  throws EntityNotFoundException {
    return new ResponseEntity<>(patientService.getPatientById(patientId), HttpStatus.OK);
  }

  // Create a patient in Patient table
  @PostMapping(path = "/create/patient")
  public
  ResponseEntity<Patient> createUser(@RequestBody Patient patient)
  throws MethodArgumentNotValidException {
    return new ResponseEntity<>(patientService.createNewPatient(patient), HttpStatus.CREATED);
  }

  // Update a Patient in Patient table
  @PutMapping(path = "/update/patient/{patientId}")
  public
  ResponseEntity<Patient> updateUser(@RequestBody Patient patient, @PathVariable long patientId) {

    Patient patientFromDb = patientService.getPatientById(patientId);
    compareAndUpdateObject(patient, patientFromDb);

    return new ResponseEntity<>(patientService.updateExistingPatient(patient), HttpStatus.CREATED);
  }

  // Delete a patient from Patient table
  @DeleteMapping(path = "/delete/patient/{patientId}")
  public
  ResponseEntity<String> deleteUser(@PathVariable long patientId) {
    String message = patientService.deletePatient(patientId);
    return new ResponseEntity<>(message, HttpStatus.OK);
  }

  // login
  @PostMapping(path = "/login")
  public
  ResponseEntity<String> loginUser(@RequestBody LoginParameter loginParameter) {
    String email = loginParameter.getEmail();
    String pw = loginParameter.getPassword();

    String message = patientService.login(email, pw);
    return new ResponseEntity<>(message, HttpStatus.OK);
  }
}
