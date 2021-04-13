package com.siemens.dx.hackathon.smarthealthsystem.controllers;

import com.siemens.dx.hackathon.smarthealthsystem.exceptions.MethodArgumentNotValidException;
import com.siemens.dx.hackathon.smarthealthsystem.service.ISharedRecordsService;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.EmergencyContactModel;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.SharedRecordModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
class SharedRecordsController {

  @Autowired
  ISharedRecordsService sharedRecordsService;

  @PostMapping(path = "/add/patient/emergencyContact/{patientId}")
  public
  ResponseEntity<EmergencyContactModel> addEmergencyContact(
      @RequestBody EmergencyContactModel emergencyContactModel, @PathVariable long patientId)
  throws MethodArgumentNotValidException {
    return new ResponseEntity<>(
        sharedRecordsService.addEmergencyContact(emergencyContactModel, patientId),
        HttpStatus.CREATED);
  }

  @GetMapping("/get/patient/emergencyContact/{patientId}")
  public
  List<EmergencyContactModel> getAllEmergencyContactsByPatientId(@PathVariable long patientId) {
    return sharedRecordsService.getAllEmergencyContactByPatientId(patientId);
  }

  @GetMapping("/get/confirmation/share/{sharedEmail}")
  public
  SharedRecordModel getDoctorOrPatientDetails(@PathVariable String sharedEmail) {
    return sharedRecordsService.getDoctorOrPatientDetails(sharedEmail);
  }

  @GetMapping("/get/sentSharedRecords/all/{patientId}")
  public
  List<SharedRecordModel> getAllSentSharedRecords(@PathVariable long patientId) {
    return sharedRecordsService.getAllSentSharedRecords(patientId);
  }

  @GetMapping("/get/receivedSharedRecords/all/{id}")
  public
  List<SharedRecordModel> getAllReceivedSharedRecords(@PathVariable long id) {
    return sharedRecordsService.getAllReceivedSharedRecords(id);
  }

  @PostMapping("/add/shareRecord/{patientId}")
  public
  ResponseEntity<SharedRecordModel> shareRecord(@RequestBody SharedRecordModel sharedRecordModel,
                                                @PathVariable long patientId) {
    return new ResponseEntity<>(sharedRecordsService.addSharedRecord(sharedRecordModel, patientId),
        HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @DeleteMapping(path = "/delete/sharedRecord/{sharedRecordId}")
  public
  ResponseEntity<String> deleteSharedRecord(@PathVariable long sharedRecordId) {
    String message = sharedRecordsService.deleteSharedRecord(sharedRecordId);
    return new ResponseEntity<>(message, HttpStatus.OK);
  }
}
