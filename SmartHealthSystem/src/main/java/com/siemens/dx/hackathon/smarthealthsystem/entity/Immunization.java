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
class Immunization implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "vaccine_id")
  private Long vaccineId;

  private String vaccineName;

  @OneToMany(mappedBy = "immunization")
  private Set<PatientImmunization> patientImmunizations = new HashSet<>();

  public
  Immunization() {
  }

  public
  Immunization(String vaccineName) {
    this.vaccineName = vaccineName;
  }

  public static
  long getSerialVersionUID() {
    return serialVersionUID;
  }

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

  @Override
  public
  boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (!(o instanceof Immunization)) {
      return false;
    }
    Immunization that = (Immunization) o;
    return Objects.equals(getVaccineId(), that.getVaccineId()) &&
        Objects.equals(getVaccineName(), that.getVaccineName());
  }

  @Override
  public
  int hashCode() {
    return Objects.hash(getVaccineId(), getVaccineName());
  }

  @Override
  public
  String toString() {
    return "Immunization{" +
        "vaccineId=" +
        vaccineId +
        ", vaccineName='" +
        vaccineName +
        '\'' +
        '}';
  }
}
