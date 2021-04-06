package com.siemens.dx.hackathon.smarthealthsystem.entity;

import java.io.Serializable;
import java.sql.Blob;
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
class PatientReports implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "patient_report_id")
  private Long patientReportId;

  @ManyToOne(cascade= CascadeType.ALL)
  @JoinColumn(name = "patient_id")
  private Patient patient;

  @ManyToOne(cascade= CascadeType.ALL)
  @JoinColumn(name = "hcp_id")
  private HealthCareProvider healthCareProvider;

  private
  Blob reportImages;

  public
  PatientReports() {
  }

  public
  PatientReports(Patient patient, Blob reportImages) {
    this.patient = patient;
    this.reportImages = reportImages;
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
  Blob getReportImages() {
    return reportImages;
  }

  public
  void setReportImages(Blob reportImages) {
    this.reportImages = reportImages;
  }

  @Override
  public
  boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (!(o instanceof PatientReports)) {
      return false;
    }
    PatientReports that = (PatientReports) o;
    return Objects.equals(getPatientReportId(), that.getPatientReportId()) &&
        Objects.equals(getPatient(), that.getPatient()) &&
        Objects.equals(getReportImages(), that.getReportImages());
  }

  @Override
  public
  int hashCode() {
    return Objects.hash(getPatientReportId(), getPatient(), getReportImages());
  }

  @Override
  public
  String toString() {
    return "PatientReports{" +
        "patientReportId=" +
        patientReportId +
        ", patient=" +
        patient +
        ", reportImages=" +
        reportImages +
        '}';
  }
}
