package com.siemens.dx.hackathon.smarthealthsystem.viewModels;

import java.sql.Blob;

public
class PatientInsuranceModel {

  private Long insuranceId;

  private Long patientId;

  private String insuranceCompany;

  private String tpa;

  private long sumInsured;

  private Blob insuranceDocuments;

  public
  PatientInsuranceModel() {
  }

  public
  Long getInsuranceId() {
    return insuranceId;
  }

  public
  void setInsuranceId(Long insuranceId) {
    this.insuranceId = insuranceId;
  }

  public
  String getInsuranceCompany() {
    return insuranceCompany;
  }

  public
  void setInsuranceCompany(String insuranceCompany) {
    this.insuranceCompany = insuranceCompany;
  }

  public
  String getTpa() {
    return tpa;
  }

  public
  void setTpa(String tpa) {
    this.tpa = tpa;
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

  public
  Long getPatientId() {
    return patientId;
  }

  public
  void setPatientId(Long patientId) {
    this.patientId = patientId;
  }
}
