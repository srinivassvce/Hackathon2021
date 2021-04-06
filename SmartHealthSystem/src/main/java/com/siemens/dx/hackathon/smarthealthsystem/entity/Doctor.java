package com.siemens.dx.hackathon.smarthealthsystem.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "doctorId")
public
class Doctor implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "doctor_id")
  private Long doctorId;

  @Column(name = "doctor_name")
  private String doctorName;

  @Column(name = "license_number")
  private String licenseNumber;

  private String specialization;

  private String doctorEmail;

  private String doctorPassword;

  @OneToMany(mappedBy = "doctor")
  private Set<PatientVisit> patientVisits;

  @ManyToMany
  @JoinTable(name = "DOCTOR_HEALTH_CARE_PROVIDERS",
             joinColumns = @JoinColumn(name = "doctor_id"),
             inverseJoinColumns = @JoinColumn(name = "hcp_id"))
  private Set<HealthCareProvider> healthCareProviders = new HashSet<>();

  public
  Doctor() {
  }

  public
  Doctor(String doctorName, String licenseNumber, String specialization, String doctorEmail,
         String doctorPassword, Set<HealthCareProvider> healthCareProviders) {
    this.doctorName = doctorName;
    this.licenseNumber = licenseNumber;
    this.specialization = specialization;
    this.doctorEmail = doctorEmail;
    this.doctorPassword = doctorPassword;
    this.healthCareProviders = healthCareProviders;
  }

  @Override
  public
  String toString() {
    return "Doctor{" +
        "doctorId=" +
        doctorId +
        ", doctorName='" +
        doctorName +
        '\'' +
        ", licenseNumber='" +
        licenseNumber +
        '\'' +
        ", specialization='" +
        specialization +
        '\'' +
        ", doctorEmail='" +
        doctorEmail +
        '\'' +
        ", doctorPassword='" +
        doctorPassword +
        '\'' +
     /*   ", healthCareProviders=" +
        healthCareProviders +*/
        '}';
  }

  public
  Long getDoctorId() {
    return doctorId;
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
    Doctor doctor = (Doctor) o;
    return Objects.equals(doctorId, doctor.doctorId) &&
        Objects.equals(doctorName, doctor.doctorName) &&
        Objects.equals(licenseNumber, doctor.licenseNumber) &&
        Objects.equals(specialization, doctor.specialization) &&
        Objects.equals(doctorEmail, doctor.doctorEmail) &&
        Objects.equals(doctorPassword, doctor.doctorPassword);
  }

  @Override
  public
  int hashCode() {
    return Objects.hash(doctorId, doctorName, licenseNumber, specialization, doctorEmail,
        doctorPassword);
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

  public
  String getDoctorPassword() {
    return doctorPassword;
  }

  public
  void setDoctorPassword(String doctorPassword) {
    this.doctorPassword = doctorPassword;
  }

  public
  Set<HealthCareProvider> getHealthCareProviders() {
    return healthCareProviders;
  }
/*@OneToMany(mappedBy = "patient")
  private Set<PatientVisit> patientVisits;
*/

  public
  void setHealthCareProviders(Set<HealthCareProvider> healthCareProviders) {
    this.healthCareProviders = healthCareProviders;
  }
}
