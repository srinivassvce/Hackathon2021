package com.siemens.dx.hackathon.smarthealthsystem.viewModels;

import java.util.Date;

public
class MedicalHistoryModel {
  Long patientId;

  String diagnoseNotes;

  String additionalTests;

  String surgicalNotes;

  Date visitedDate;

  public
  Long getPatientId() {
    return patientId;
  }

  public
  void setPatientId(Long patientId) {
    this.patientId = patientId;
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

  public
  String getSurgicalNotes() {
    return surgicalNotes;
  }

  public
  void setSurgicalNotes(String surgicalNotes) {
    this.surgicalNotes = surgicalNotes;
  }

  public
  Date getVisitedDate() {
    return visitedDate;
  }

  public
  void setVisitedDate(Date visitedDate) {
    this.visitedDate = visitedDate;
  }
}
