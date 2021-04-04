package com.siemens.dx.hackathon.smarthealthsystem.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

@SequenceGenerator(name = "seq", initialValue = 1000, allocationSize = 1000)
@Entity
public
class Patient implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq")
  @Column(name = "patient_id")
  private Long patientId;

  @Column(name = "patient_name")
  private String patientName;

  @Column(name = "patient_address")
  private String patientAddress;

  @Column(name = "patient_email", unique = true, nullable = false)
  private String patientEmail;

  @Column(name = "patient_mobile")
  private long mobile;

  @Column(name = "patient_pw", nullable = false)
  private String password;

  @Column(name = "patient_bg")
  private String bloodGroup;

  @Column(name = "patient_dob")
  private Date birthDate;

  private String height;

  private String weight;

  @OneToMany(mappedBy = "patient")
  private Set<PatientAllergy> patientAllergies;

  @OneToMany(mappedBy = "patient")
  private Set<PatientImmunization> patientImmunizations;

  @OneToMany(mappedBy = "patient")
  private Set<PatientInsurance> patientInsurances;

  @OneToMany(mappedBy = "patient")
  private Set<PatientReports> patientReports;

  @OneToMany(mappedBy = "patient")
  private Set<SharedRecords> sharedRecords;

  @OneToMany(mappedBy = "patient")
  private Set<PatientVisit> patientVisits;

  public
  Patient() {
  }

  public
  Patient(String patientName, String patientAddress, String patientEmail, long mobile,
          String password, String bloodGroup, Date birthDate, String height, String weight,
          PatientAllergy... patientAllergies) {
    this.patientName = patientName;
    this.patientAddress = patientAddress;
    this.patientEmail = patientEmail;
    this.mobile = mobile;
    this.password = password;
    this.bloodGroup = bloodGroup;
    this.birthDate = birthDate;
    this.height = height;
    this.weight = weight;
    for (PatientAllergy patientAllergy : patientAllergies) {
      patientAllergy.setPatient(this);
    }
    this.patientAllergies = Stream.of(patientAllergies).collect(Collectors.toSet());
  }

  public
  String getHeight() {
    return height;
  }

  public
  void setHeight(String height) {
    this.height = height;
  }

  public
  String getWeight() {
    return weight;
  }

  public
  void setWeight(String weight) {
    this.weight = weight;
  }

  public
  Long getPatientId() {
    return patientId;
  }

  public
  String getPatientName() {
    return patientName;
  }

  public
  void setPatientName(String patientName) {
    this.patientName = patientName;
  }

  public
  String getPatientAddress() {
    return patientAddress;
  }

  public
  void setPatientAddress(String patientAddress) {
    this.patientAddress = patientAddress;
  }

  public
  String getPatientEmail() {
    return patientEmail;
  }

  public
  void setPatientEmail(String patientEmail) {
    this.patientEmail = patientEmail;
  }

  public
  long getMobile() {
    return mobile;
  }

  public
  void setMobile(long mobile) {
    this.mobile = mobile;
  }

  public
  String getPassword() {
    return password;
  }

  public
  void setPassword(String password) {
    this.password = password;
  }

  public
  String getBloodGroup() {
    return bloodGroup;
  }

  public
  void setBloodGroup(String bloodGroup) {
    this.bloodGroup = bloodGroup;
  }

  public
  Date getBirthDate() {
    return birthDate;
  }

  public
  void setBirthDate(Date birthDate) {
    this.birthDate = birthDate;
  }

  @Override
  public
  boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (!(o instanceof Patient)) {
      return false;
    }
    Patient patient = (Patient) o;
    return getMobile() == patient.getMobile() &&
        Objects.equals(getPatientId(), patient.getPatientId()) &&
        Objects.equals(getPatientName(), patient.getPatientName()) &&
        Objects.equals(getPatientAddress(), patient.getPatientAddress()) &&
        Objects.equals(getPatientEmail(), patient.getPatientEmail()) &&
        Objects.equals(getPassword(), patient.getPassword()) &&
        Objects.equals(getBloodGroup(), patient.getBloodGroup()) &&
        Objects.equals(getBirthDate(), patient.getBirthDate());
  }

  @Override
  public
  int hashCode() {
    return Objects.hash(getPatientId(), getPatientName(), getPatientAddress(), getPatientEmail(),
        getMobile(), getPassword(), getBloodGroup(), getBirthDate());
  }

  @Override
  public
  String toString() {
    return "Patient{" +
        "patientId=" +
        patientId +
        ", patientName='" +
        patientName +
        '\'' +
        ", patientAddress='" +
        patientAddress +
        '\'' +
        ", patientEmail='" +
        patientEmail +
        '\'' +
        ", mobile=" +
        mobile +
        ", password='" +
        password +
        '\'' +
        ", bloodGroup='" +
        bloodGroup +
        '\'' +
        ", birthDate=" +
        birthDate +
        '}';
  }
}
