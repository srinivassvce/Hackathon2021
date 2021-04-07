package com.siemens.dx.hackathon.smarthealthsystem.entity;

import java.io.Serializable;
import java.sql.Blob;
import java.util.Date;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public
class PatientReport implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "patient_report_id")
  private Long patientReportId;

  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "patient_id")
  private Patient patient;

  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "hcp_id")
  private HealthCareProvider healthCareProvider;

  private Blob reportImage;

  private String reportName;

  private Date reportDate;

  public
  PatientReport() {
  }

  public
  PatientReport(Patient patient, HealthCareProvider healthCareProvider, Blob reportImage,
                String reportName, Date reportDate) {
    this.patient = patient;
    this.healthCareProvider = healthCareProvider;
    this.reportImage = reportImage;
    this.reportName = reportName;
    this.reportDate = reportDate;
  }

  public
  Long getPatientReportId() {
    return patientReportId;
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
  Blob getReportImage() {
    return reportImage;
  }

  public
  void setReportImage(Blob reportImage) {
    this.reportImage = reportImage;
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
  String getReportName() {
    return reportName;
  }

  public
  void setReportName(String reportName) {
    this.reportName = reportName;
  }

  public
  Date getReportDate() {
    return reportDate;
  }

  public
  void setReportDate(Date reportDate) {
    this.reportDate = reportDate;
  }

  @Override
  public
  boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (!(o instanceof PatientReport)) {
      return false;
    }
    PatientReport that = (PatientReport) o;
    return Objects.equals(getPatientReportId(), that.getPatientReportId()) &&
        Objects.equals(getPatient(), that.getPatient()) &&
        Objects.equals(getHealthCareProvider(), that.getHealthCareProvider()) &&
        Objects.equals(getReportImage(), that.getReportImage()) &&
        Objects.equals(getReportName(), that.getReportName()) &&
        Objects.equals(getReportDate(), that.getReportDate());
  }

  @Override
  public
  int hashCode() {
    return Objects.hash(getPatientReportId(), getPatient(), getHealthCareProvider(),
        getReportImage(), getReportName(), getReportDate());
  }

  @Override
  public
  String toString() {
    return "PatientReport{" +
        "patientReportId=" +
        patientReportId +
        ", patient=" +
        patient +
        ", healthCareProvider=" +
        healthCareProvider +
        ", reportImage=" + reportImage +
        ", reportName='" +
        reportName +
        '\'' +
        ", reportDate=" +
        reportDate +
        '}';
  }
}
