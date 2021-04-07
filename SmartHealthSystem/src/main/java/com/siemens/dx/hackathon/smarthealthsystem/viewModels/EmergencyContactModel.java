package com.siemens.dx.hackathon.smarthealthsystem.viewModels;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Doctor;
import com.siemens.dx.hackathon.smarthealthsystem.entity.Patient;

public
class EmergencyContactModel {

  private Long patientId;

  private Patient emergencyPatient;

  private Doctor emergencyDoctor;

  public
  Long getPatientId() {
    return patientId;
  }

  public
  void setPatientId(Long patientId) {
    this.patientId = patientId;
  }

  public
  Patient getEmergencyPatient() {
    return emergencyPatient;
  }

  public
  void setEmergencyPatient(Patient emergencyPatient) {
    this.emergencyPatient = emergencyPatient;
  }

  public
  Doctor getEmergencyDoctor() {
    return emergencyDoctor;
  }

  public
  void setEmergencyDoctor(Doctor emergencyDoctor) {
    this.emergencyDoctor = emergencyDoctor;
  }
}
