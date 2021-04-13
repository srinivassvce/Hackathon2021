package com.siemens.dx.hackathon.smarthealthsystem.viewModels;

import java.io.Serializable;
import java.util.Date;

public
class SharedRecordModel implements Serializable {
  private Long patientId;

  private String sharedEmail;

  private String sharedName;

  private Date sharedDate;

  private Long sharedRecordId;

  public
  Long getSharedRecordId() {
    return sharedRecordId;
  }

  public
  void setSharedRecordId(Long sharedRecordId) {
    this.sharedRecordId = sharedRecordId;
  }

  public
  Date getSharedDate() {
    return sharedDate;
  }

  public
  void setSharedDate(Date sharedDate) {
    this.sharedDate = sharedDate;
  }

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
