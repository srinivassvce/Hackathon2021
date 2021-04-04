package com.siemens.dx.hackathon.smarthealthsystem.viewModels;

import java.util.Date;

public
class PatientImmunizationModel {
  private Long vaccineId;

  public
  Long getVaccineId() {
    return vaccineId;
  }

  public
  void setVaccineId(Long vaccineId) {
    this.vaccineId = vaccineId;
  }

  public
  String getVaccineName() {
    return vaccineName;
  }

  public
  void setVaccineName(String vaccineName) {
    this.vaccineName = vaccineName;
  }

  public
  Date getVaccineDate() {
    return vaccineDate;
  }

  public
  void setVaccineDate(Date vaccineDate) {
    this.vaccineDate = vaccineDate;
  }

  private String vaccineName;


  private Date vaccineDate;
}
