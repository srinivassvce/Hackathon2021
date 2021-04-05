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
class PatientVisit implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long patientVisitId;

  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "patient_id")
  private Patient patient;

  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "doctor_id")
  private Doctor doctor;

  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "hcp_id")
  private HealthCareProvider healthCareProvider;

  private Date visitDateTime;

  private Date nextVisitDateTime;

  private String diagnoseNotes;

  private String additionalTests;

  private String surgeryNotes;

  public
  PatientVisit() {
  }

  public
  PatientVisit(Patient patient, Doctor doctor, HealthCareProvider healthCareProvider,
               Date visitDateTime, Date nextVisitDateTime, String diagnoseNotes,
               String additionalTests, String surgeryNotes) {
    this.patient = patient;
    this.doctor = doctor;
    this.healthCareProvider = healthCareProvider;
    this.visitDateTime = visitDateTime;
    this.nextVisitDateTime = nextVisitDateTime;
    this.diagnoseNotes = diagnoseNotes;
    this.additionalTests = additionalTests;
    this.surgeryNotes = surgeryNotes;
  }

  public
  HealthCareProvider getHealthCareProvider() {
    return healthCareProvider;
  }

  public
  void setHealthCareProvider(HealthCareProvider healthCareProvider) {
    this.healthCareProvider = healthCareProvider;
  }

  public
  String getSurgeryNotes() {
    return surgeryNotes;
  }

  public
  void setSurgeryNotes(String surgeryNotes) {
    this.surgeryNotes = surgeryNotes;
  }

  public
  Long getPatientVisitId() {
    return patientVisitId;
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
  Doctor getDoctor() {
    return doctor;
  }

  public
  void setDoctor(Doctor doctor) {
    this.doctor = doctor;
  }

  public
  Date getVisitDateTime() {
    return visitDateTime;
  }

  public
  void setVisitDateTime(Date visitDateTime) {
    this.visitDateTime = visitDateTime;
  }

  public
  Date getNextVisitDateTime() {
    return nextVisitDateTime;
  }

  public
  void setNextVisitDateTime(Date nextVisitDateTime) {
    this.nextVisitDateTime = nextVisitDateTime;
  }

  public
  String getDiagnoseNotes() {
    return diagnoseNotes;
  }

  public
  void setDiagnoseNotes(String diagnoseNotes) {
    this.diagnoseNotes = diagnoseNotes;
  }

  public
  String getAdditionalTests() {
    return additionalTests;
  }

  public
  void setAdditionalTests(String additionalTests) {
    this.additionalTests = additionalTests;
  }

  @Override
  public
  boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (!(o instanceof PatientVisit)) {
      return false;
    }
    PatientVisit that = (PatientVisit) o;
    return Objects.equals(getPatientVisitId(), that.getPatientVisitId()) &&
        Objects.equals(getPatient(), that.getPatient()) &&
        Objects.equals(getDoctor(), that.getDoctor()) &&
        Objects.equals(getVisitDateTime(), that.getVisitDateTime()) &&
        Objects.equals(getNextVisitDateTime(), that.getNextVisitDateTime()) &&
        Objects.equals(getDiagnoseNotes(), that.getDiagnoseNotes()) &&
        Objects.equals(getAdditionalTests(), that.getAdditionalTests());
  }

  @Override
  public
  int hashCode() {
    return Objects.hash(getPatientVisitId(), getPatient(), getDoctor(), getVisitDateTime(),
        getNextVisitDateTime(), getDiagnoseNotes(), getAdditionalTests());
  }

  @Override
  public
  String toString() {
    return "PatientVisit{" +
        "patientVisitId=" +
        patientVisitId +
        ", patient=" +
        patient +
       /* ", doctor=" +
        doctor +*/
        ", visitDateTime=" +
        visitDateTime +
        ", nextVisitDateTime=" +
        nextVisitDateTime +
        ", diagnoseNotes='" +
        diagnoseNotes +
        '\'' +
        ", additionalTests='" +
        additionalTests +
        '\'' +
        '}';
  }
}
