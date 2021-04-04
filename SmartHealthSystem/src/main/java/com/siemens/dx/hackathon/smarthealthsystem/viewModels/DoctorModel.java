package com.siemens.dx.hackathon.smarthealthsystem.viewModels;

import java.util.List;

public
class DoctorModel {
  private Long doctorId;

  private String doctorName;

  private String licenseNumber;

  private String specialization;

  private String doctorEmail;

  private List<HealthCareProviderModel> healthCareProviders;

  public
  List<HealthCareProviderModel> getHealthCareProviders() {
    return healthCareProviders;
  }

  public
  void setHealthCareProviders(List<HealthCareProviderModel> healthCareProviders) {
    this.healthCareProviders = healthCareProviders;
  }

  public
  Long getDoctorId() {
    return doctorId;
  }

  public
  void setDoctorId(Long doctorId) {
    this.doctorId = doctorId;
  }

  public
  String getDoctorName() {
    return doctorName;
  }

  public
  void setDoctorName(String doctorName) {
    this.doctorName = doctorName;
  }

  public
  String getLicenseNumber() {
    return licenseNumber;
  }

  public
  void setLicenseNumber(String licenseNumber) {
    this.licenseNumber = licenseNumber;
  }

  public
  String getSpecialization() {
    return specialization;
  }

  public
  void setSpecialization(String specialization) {
    this.specialization = specialization;
  }

  public
  String getDoctorEmail() {
    return doctorEmail;
  }

  public
  void setDoctorEmail(String doctorEmail) {
    this.doctorEmail = doctorEmail;
  }
}
