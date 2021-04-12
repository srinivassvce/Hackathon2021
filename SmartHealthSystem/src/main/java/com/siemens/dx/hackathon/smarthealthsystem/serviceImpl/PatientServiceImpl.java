package com.siemens.dx.hackathon.smarthealthsystem.serviceImpl;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Patient;
import com.siemens.dx.hackathon.smarthealthsystem.exceptions.EntityNotFoundException;
import com.siemens.dx.hackathon.smarthealthsystem.exceptions.MethodArgumentNotValidException;
import com.siemens.dx.hackathon.smarthealthsystem.service.IPatientService;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;


@Service
public
class PatientServiceImpl implements IPatientService {

  @Autowired
  private PatientRepository patientRepository;

  @Override
  public
  List<Patient> getAllPatients() {
    try {
      return patientRepository.findAll();
    } catch (NoSuchElementException e) {
      throw new EntityNotFoundException("Patient not found!");
    }
  }

  @Override
  public
  Patient getPatientById(Long patientId) {
    try {
      return patientRepository.findById(patientId).get();
    } catch (NoSuchElementException e) {
      throw new EntityNotFoundException("Patient not found for Id: " +patientId);
    }
  }

  @Override
  public
  Patient createNewPatient(Patient patient) {
    try {
      return patientRepository.save(patient);
    } catch (DataIntegrityViolationException e) {
      throw new MethodArgumentNotValidException("One of the input is not unique.");
    }
  }

  @Override
  public
  Patient updateExistingPatient(Patient patient) {
    return patientRepository.save(patient);
  }

  @Override
  public
  String deletePatient(long patientId) {
    Patient patient = patientRepository.findById(patientId).get();
    patientRepository.delete(patient);
    return "Patient with id: " + patientId + " deleted successfully!";
  }

  @Override
  public
  String login(String patientEmail, String password) {
    Patient patient = patientRepository.findByPatientEmail(patientEmail);

    if (null != patient && patient.getPassword().equals(password)) {
      return patient.getPatientId().toString();
    } else {
      return "Incorrect Email or Password!";
    }
  }

  @Override
  public
  Patient getPatientByEmail(String patientEmail) {
    return patientRepository.findByPatientEmail(patientEmail);
  }
}
