package com.siemens.dx.hackathon.smarthealthsystem.service;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Patient;

import java.util.List;

public
interface IPatientService {

  List<Patient> getAllPatients();

  Patient getPatientById(Long patientId);

  Patient createNewPatient(Patient patient);

  Patient updateExistingPatient(Patient patient);

  String deletePatient(long patientId);

  String login(String patientEmail, String patientPassword);

  Patient getPatientByEmail(String patientEmail);

}
