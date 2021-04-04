package com.siemens.dx.hackathon.smarthealthsystem.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "hcpId")
public
class HealthCareProvider implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "hcp_id")
  private Long hcpId;

  @Column(name = "hcp_name")
  private String hcpName;

  @Column(name = "hcp_license")
  private String hcpLicense;

  @Column(name = "hcp_state")
  private String hcpState;

  @Column(name = "hcp_city")
  private String hcpCity;

  @Column(name = "hcp_pincode")
  private String hcpPincode;

  @Enumerated(EnumType.ORDINAL)
  @Column(name = "hcp_type")
  private HealthCareProviderType hcpType;

  @Column(name = "hcp_contact")
  private String hcpContact;

  /*@OneToMany(mappedBy = "healthCareProvider")
  private Set<PatientReports> patientReports = new HashSet<>();*/

  @ManyToMany(mappedBy = "healthCareProviders", cascade = CascadeType.ALL)
  private Set<Doctor> doctors = new HashSet<>();

  public
  HealthCareProvider() {
  }

  public
  HealthCareProvider(String hcpName, String hcpLicense, String hcpState, String hcpCity,
                     String hcpPincode, HealthCareProviderType hcpType, String hcpContact,
                     Set<Doctor> doctors) {
    this.hcpName = hcpName;
    this.hcpLicense = hcpLicense;
    this.hcpState = hcpState;
    this.hcpCity = hcpCity;
    this.hcpPincode = hcpPincode;
    this.hcpType = hcpType;
    this.hcpContact = hcpContact;
    this.doctors = doctors;
  }


  @Override
  public
  String toString() {
    return "HealthCareProvider{" +
        "hcpId=" +
        hcpId +
        ", hcpName='" +
        hcpName +
        '\'' +
        ", hcpLicense='" +
        hcpLicense +
        '\'' +
        ", hcpState='" +
        hcpState +
        '\'' +
        ", hcpCity='" +
        hcpCity +
        '\'' +
        ", hcpPincode='" +
        hcpPincode +
        '\'' +
        ", hcpType=" +
        hcpType +
        ", hcpContact='" +
        hcpContact +
        '\'' +
      /*  ", doctors=" +
        doctors +*/
        '}';
  }

  public
  Long getHcpId() {
    return hcpId;
  }

  public
  void setHcpId(Long hcpId) {
    this.hcpId = hcpId;
  }

  @Override
  public
  boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    HealthCareProvider that = (HealthCareProvider) o;
    return Objects.equals(hcpId, that.hcpId) &&
        Objects.equals(hcpName, that.hcpName) &&
        Objects.equals(hcpLicense, that.hcpLicense) &&
        Objects.equals(hcpState, that.hcpState) &&
        Objects.equals(hcpCity, that.hcpCity) &&
        Objects.equals(hcpPincode, that.hcpPincode) &&
        hcpType == that.hcpType &&
        Objects.equals(hcpContact, that.hcpContact);
  }

  @Override
  public
  int hashCode() {
    return Objects.hash(hcpId, hcpName, hcpLicense, hcpState, hcpCity, hcpPincode, hcpType,
        hcpContact);
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

  public
  Set<Doctor> getDoctors() {
    return doctors;
  }

  public
  void setDoctors(Set<Doctor> doctors) {
    this.doctors = doctors;
  }
}
