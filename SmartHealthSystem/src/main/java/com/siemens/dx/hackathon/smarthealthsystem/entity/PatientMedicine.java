package com.siemens.dx.hackathon.smarthealthsystem.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public
class PatientMedicine implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long patientMedicineId;

  @OneToOne(cascade= CascadeType.ALL)
  @JoinColumn(name = "patient_id")
  private Patient patient;

  @ManyToOne(cascade= CascadeType.ALL)
  @JoinColumn(name = "medicine_id")
  private Medicine medicine;

  @ManyToOne(cascade= CascadeType.ALL)
  @JoinColumn(name = "patient_visit_id")
  private PatientVisit patientVisit;

  private Date fromDate;

  private Date toDate;

  private String frequency;

  public
  PatientMedicine() {
  }

  public
  PatientMedicine(Patient patient, Medicine medicine, PatientVisit patientVisit, Date fromDate,
                  Date toDate, String frequency) {
    this.patient = patient;
    this.medicine = medicine;
    this.patientVisit = patientVisit;
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.frequency = frequency;
  }

  public
  Long getPatientMedicineId() {
    return patientMedicineId;
  }

  public
  void setPatientMedicineId(Long patientMedicineId) {
    this.patientMedicineId = patientMedicineId;
  }

  public
  Patient getPatient() {
    return patient;
  }

  public
  void setPatient(Patient patient) {
    this.patient = patient;
  }

  public
  Medicine getMedicine() {
    return medicine;
  }

  public
  void setMedicine(Medicine medicine) {
    this.medicine = medicine;
  }

  public
  PatientVisit getPatientVisit() {
    return patientVisit;
  }

  public
  void setPatientVisit(PatientVisit patientVisit) {
    this.patientVisit = patientVisit;
  }

  public
  Date getFromDate() {
    return fromDate;
  }

  public
  void setFromDate(Date fromDate) {
    this.fromDate = fromDate;
  }

  public
  Date getToDate() {
    return toDate;
  }

  public
  void setToDate(Date toDate) {
    this.toDate = toDate;
  }

  public
  String getFrequency() {
    return frequency;
  }

  public
  void setFrequency(String frequency) {
    this.frequency = frequency;
  }

  @Override
  public
  boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (!(o instanceof PatientMedicine)) {
      return false;
    }
    PatientMedicine that = (PatientMedicine) o;
    return Objects.equals(getPatientMedicineId(), that.getPatientMedicineId()) &&
        Objects.equals(getPatient(), that.getPatient()) &&
        Objects.equals(getMedicine(), that.getMedicine()) &&
        Objects.equals(getPatientVisit(), that.getPatientVisit()) &&
        Objects.equals(getFromDate(), that.getFromDate()) &&
        Objects.equals(getToDate(), that.getToDate()) &&
        Objects.equals(getFrequency(), that.getFrequency());
  }

  @Override
  public
  int hashCode() {
    return Objects.hash(getPatientMedicineId(), getPatient(), getMedicine(), getPatientVisit(),
        getFromDate(), getToDate(), getFrequency());
  }

  @Override
  public
  String toString() {
    return "PatientMedicine{" +
        "patientMedicineId=" +
        patientMedicineId +
        ", patient=" +
        patient +
        ", medicine=" + medicine +
       /* ", patientVisit=" +
        patientVisit +
        ", fromDate=" +
        fromDate +
        ", toDate=" +
        toDate +*/
        ", frequency='" +
        frequency +
        '\'' +
        '}';
  }
}
