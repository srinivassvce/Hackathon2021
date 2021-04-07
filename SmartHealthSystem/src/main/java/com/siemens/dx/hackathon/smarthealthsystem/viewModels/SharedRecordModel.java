package com.siemens.dx.hackathon.smarthealthsystem.viewModels;

public
class SharedRecordModel {
  private Long patientId;

  private String sharedEmail;

  private String sharedName;

  public
  String getSharedName() {
    return sharedName;
  }

  public
  void setSharedName(String sharedName) {
    this.sharedName = sharedName;
  }

  public
  Long getPatientId() {
    return patientId;
  }

  public
  void setPatientId(Long patientId) {
    this.patientId = patientId;
  }

  public
  String getSharedEmail() {
    return sharedEmail;
  }

  public
  void setSharedEmail(String sharedEmail) {
    this.sharedEmail = sharedEmail;
  }
}
