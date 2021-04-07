package com.siemens.dx.hackathon.smarthealthsystem.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public
class SharedRecord implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long sharedRecordId;

  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "patient_id")
  private Patient patient;

  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "shared_patient_id")
  private Patient sharedPatient;

  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "shared_doctor_id")
  private Doctor sharedDoctor;

  private Date sharedDate;

  private boolean isEmergencyContact;

  public
  Doctor getSharedDoctor() {
    return sharedDoctor;
  }

  public
  void setSharedDoctor(Doctor sharedDoctor) {
    this.sharedDoctor = sharedDoctor;
  }

  public
  Long getSharedRecordId() {
    return sharedRecordId;
  }

  public
  Patient getPatient() {
    return patient;
  }

  public
  void setPatient(Patient patient) {
    this.patient = patient;
  }

  public
  Patient getSharedPatient() {
    return sharedPatient;
  }

  public
  void setSharedPatient(Patient sharedPatient) {
    this.sharedPatient = sharedPatient;
  }

  public
  Date getSharedDate() {
    return sharedDate;
  }

  public
  void setSharedDate(Date sharedDate) {
    this.sharedDate = sharedDate;
  }

  public
  boolean isEmergencyContact() {
    return isEmergencyContact;
  }

  public
  void setEmergencyContact(boolean emergencyContact) {
    isEmergencyContact = emergencyContact;
  }
}
