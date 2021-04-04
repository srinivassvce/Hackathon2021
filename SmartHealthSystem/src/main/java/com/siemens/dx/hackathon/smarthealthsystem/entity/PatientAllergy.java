package com.siemens.dx.hackathon.smarthealthsystem.entity;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public
class PatientAllergy implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long patientAllergyId;

  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "PATIENT_ID")
  private Patient patient;

  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "ALLERGY_ID")
  private Allergy allergy;

  public
  PatientAllergy() {
  }

  private String symptoms;

  public
  PatientAllergy(Patient patient, Allergy allergy, String symptoms) {
    this.patient = patient;
    this.allergy = allergy;
    this.symptoms = symptoms;
  }

  @Override
  public
  String toString() {
    return "PatientAllergy{" +
        "patientAllergyId=" +
        patientAllergyId +
        ", patient=" +
        patient +
        ", allergy=" +
        allergy +
        ", symptoms='" +
        symptoms +
        '\'' +
        '}';
  }

  @Override
  public
  boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PatientAllergy that = (PatientAllergy) o;
    return Objects.equals(patientAllergyId, that.patientAllergyId) &&
        Objects.equals(patient, that.patient) &&
        Objects.equals(allergy, that.allergy) &&
        Objects.equals(symptoms, that.symptoms);
  }

  @Override
  public
  int hashCode() {
    return Objects.hash(patientAllergyId, patient, allergy, symptoms);
  }

  public
  Long getPatientAllergyId() {
    return patientAllergyId;
  }

  public
  void setPatientAllergyId(Long patientAllergyId) {
    this.patientAllergyId = patientAllergyId;
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
  Allergy getAllergy() {
    return allergy;
  }

  public
  void setAllergy(Allergy allergy) {
    this.allergy = allergy;
  }

  public
  String getSymptoms() {
    return symptoms;
  }

  public
  void setSymptoms(String symptoms) {
    this.symptoms = symptoms;
  }
}
