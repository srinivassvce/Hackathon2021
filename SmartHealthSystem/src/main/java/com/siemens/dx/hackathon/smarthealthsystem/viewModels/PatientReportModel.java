package com.siemens.dx.hackathon.smarthealthsystem.viewModels;

import java.sql.Blob;
import java.util.Date;


public
class PatientReportModel {

  private long patientId;

  private HealthCareProviderModel healthCareProvider;

  private Blob reportImages;

  private String reportName;

  private Date reportDate;

  public
  PatientReportModel() {
  }

  public
  long getPatientId() {
    return patientId;
  }

  public
  void setPatientId(long patientId) {
    this.patientId = patientId;
  }

  public
  HealthCareProviderModel getHealthCareProvider() {
    return healthCareProvider;
  }

  public
  void setHealthCareProvider(HealthCareProviderModel healthCareProvider) {
    this.healthCareProvider = healthCareProvider;
  }

  public
  Blob getReportImages() {
    return reportImages;
  }

  public
  void setReportImages(Blob reportImages) {
    this.reportImages = reportImages;
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
}
