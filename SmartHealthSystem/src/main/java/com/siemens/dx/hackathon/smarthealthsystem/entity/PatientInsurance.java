package com.siemens.dx.hackathon.smarthealthsystem.entity;

import java.io.Serializable;
import java.sql.Blob;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public
class PatientInsurance implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long patienInsuranceId;

  @ManyToOne(cascade= CascadeType.ALL)
  @JoinColumn(name = "patient_id")
  private Patient patient;

  @ManyToOne(cascade= CascadeType.ALL)
  @JoinColumn(name = "insurance_id")
  private MedicalInsurance medicalInsurance;

  private long sumInsured;

  private
  Blob insuranceDocuments;

  public
  PatientInsurance() {
  }

  public
  PatientInsurance(Patient patient, MedicalInsurance medicalInsurance, long sumInsured,
                   Blob insuranceDocuments) {
    this.patient = patient;
    this.medicalInsurance = medicalInsurance;
    this.sumInsured = sumInsured;
    this.insuranceDocuments = insuranceDocuments;
  }

  public static
  long getSerialVersionUID() {
    return serialVersionUID;
  }

  public
  Long getPatienInsuranceId() {
    return patienInsuranceId;
  }

  public
  void setPatienInsuranceId(Long patienInsuranceId) {
    this.patienInsuranceId = patienInsuranceId;
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
  MedicalInsurance getMedicalInsurance() {
    return medicalInsurance;
  }

  public
  void setMedicalInsurance(MedicalInsurance medicalInsurance) {
    this.medicalInsurance = medicalInsurance;
  }

  public
  long getSumInsured() {
    return sumInsured;
  }

  public
  void setSumInsured(long sumInsured) {
    this.sumInsured = sumInsured;
  }

  public
  Blob getInsuranceDocuments() {
    return insuranceDocuments;
  }

  public
  void setInsuranceDocuments(Blob insuranceDocuments) {
    this.insuranceDocuments = insuranceDocuments;
  }
}
