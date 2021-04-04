package com.siemens.dx.hackathon.smarthealthsystem.viewModels;

import com.siemens.dx.hackathon.smarthealthsystem.entity.HealthCareProviderType;

import java.util.List;

public
class HealthCareProviderModel {
  private Long hcpId;

  private String hcpName;

  private String hcpLicense;

  private String hcpState;

  private String hcpCity;

  private String hcpPincode;

  private HealthCareProviderType hcpType;

  private String hcpContact;

  private List<DoctorModel> doctors;

  public
  List<DoctorModel> getDoctors() {
    return doctors;
  }

  public
  void setDoctors(List<DoctorModel> doctors) {
    this.doctors = doctors;
  }

  public
  Long getHcpId() {
    return hcpId;
  }

  public
  void setHcpId(Long hcpId) {
    this.hcpId = hcpId;
  }

  public
  String getHcpName() {
    return hcpName;
  }

  public
  void setHcpName(String hcpName) {
    this.hcpName = hcpName;
  }

  public
  String getHcpLicense() {
    return hcpLicense;
  }

  public
  void setHcpLicense(String hcpLicense) {
    this.hcpLicense = hcpLicense;
  }

  public
  String getHcpState() {
    return hcpState;
  }

  public
  void setHcpState(String hcpState) {
    this.hcpState = hcpState;
  }

  public
  String getHcpCity() {
    return hcpCity;
  }

  public
  void setHcpCity(String hcpCity) {
    this.hcpCity = hcpCity;
  }

  public
  String getHcpPincode() {
    return hcpPincode;
  }

  public
  void setHcpPincode(String hcpPincode) {
    this.hcpPincode = hcpPincode;
  }

  public
  HealthCareProviderType getHcpType() {
    return hcpType;
  }

  public
  void setHcpType(HealthCareProviderType hcpType) {
    this.hcpType = hcpType;
  }

  public
  String getHcpContact() {
    return hcpContact;
  }

  public
  void setHcpContact(String hcpContact) {
    this.hcpContact = hcpContact;
  }
}
