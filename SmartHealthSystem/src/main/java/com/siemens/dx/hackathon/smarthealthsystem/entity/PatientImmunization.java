package com.siemens.dx.hackathon.smarthealthsystem.entity;

import java.io.Serializable;
import java.util.Date;
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
class PatientImmunization implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long patientImmunizationId;

  @ManyToOne(cascade= CascadeType.ALL)
  @JoinColumn(name = "patient_id")
  private Patient patient;

  @ManyToOne(cascade= CascadeType.ALL)
  @JoinColumn(name = "vaccine_id")
  private Immunization immunization;

  private Date vaccineDate;

  public
  PatientImmunization() {
  }

  public
  PatientImmunization(Immunization immunization, Date vaccineDate) {
    this.immunization = immunization;
    this.vaccineDate = vaccineDate;
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
  Immunization getImmunization() {
    return immunization;
  }

  public
  void setImmunization(Immunization immunization) {
    this.immunization = immunization;
  }

  public
  Date getVaccineDate() {
    return vaccineDate;
  }

  public
  void setVaccineDate(Date vaccineDate) {
    this.vaccineDate = vaccineDate;
  }

  @Override
  public
  boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (!(o instanceof PatientImmunization)) {
      return false;
    }
    PatientImmunization that = (PatientImmunization) o;
    return Objects.equals(patientImmunizationId, that.patientImmunizationId) &&
        Objects.equals(getPatient(), that.getPatient()) &&
        Objects.equals(getImmunization(), that.getImmunization()) &&
        Objects.equals(getVaccineDate(), that.getVaccineDate());
  }

  @Override
  public
  int hashCode() {
    return Objects.hash(patientImmunizationId, getPatient(), getImmunization(), getVaccineDate());
  }


}
