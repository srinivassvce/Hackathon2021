package com.siemens.dx.hackathon.smarthealthsystem.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public
class MedicalInsurance implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "insurance_id")
  private Long insuranceId;

  private String insuranceCompany;

  private String tpa;

  @OneToMany(mappedBy = "medicalInsurance")
  private Set<PatientInsurance> patientInsurances = new HashSet<>();

  public
  MedicalInsurance() {
  }

  public
  MedicalInsurance(String insuranceCompany, String tpa) {
    this.insuranceCompany = insuranceCompany;
    this.tpa = tpa;
  }

  public static
  long getSerialVersionUID() {
    return serialVersionUID;
  }

  public
  Long getInsuranceId() {
    return insuranceId;
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

  @Override
  public
  boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (!(o instanceof MedicalInsurance)) {
      return false;
    }
    MedicalInsurance that = (MedicalInsurance) o;
    return Objects.equals(getInsuranceId(), that.getInsuranceId()) &&
        Objects.equals(getInsuranceCompany(), that.getInsuranceCompany()) &&
        Objects.equals(getTpa(), that.getTpa());
  }

  @Override
  public
  int hashCode() {
    return Objects.hash(getInsuranceId(), getInsuranceCompany(), getTpa());
  }

  @Override
  public
  String toString() {
    return "MedicalInsurance{" +
        "insuranceId=" +
        insuranceId +
        ", insuranceCompany='" +
        insuranceCompany +
        '\'' +
        ", tpa='" +
        tpa +
        '\'' +
        '}';
  }
}
