package com.siemens.dx.hackathon.smarthealthsystem.viewModels;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Patient;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

public
class PatientVisitModel implements Serializable {

  private Patient patient;

  private DoctorModel doctor;

  private HealthCareProviderModel healthCareProvider;

  private Date visitDateTime;

  private Date nextVisitDateTime;

  private String diagnoseNotes;

  private String additionalTests;

  private String surgeryNotes;

  private List<PatientMedicineModel> medicines;

  public
  PatientVisitModel() {
  }

  public
  HealthCareProviderModel getHealthCareProvider() {
    return healthCareProvider;
  }

  public
  void setHealthCareProvider(HealthCareProviderModel healthCareProvider) {
    this.healthCareProvider = healthCareProvider;
  }

  public
  String getSurgeryNotes() {
    return surgeryNotes;
  }

  public
  void setSurgeryNotes(String surgeryNotes) {
    this.surgeryNotes = surgeryNotes;
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
  DoctorModel getDoctor() {
    return doctor;
  }

  public
  void setDoctor(DoctorModel doctor) {
    this.doctor = doctor;
  }

  public
  Date getVisitDateTime() {
    return visitDateTime;
  }

  public
  void setVisitDateTime(Date visitDateTime) {
    this.visitDateTime = visitDateTime;
  }

  public
  Date getNextVisitDateTime() {
    return nextVisitDateTime;
  }

  public
  void setNextVisitDateTime(Date nextVisitDateTime) {
    this.nextVisitDateTime = nextVisitDateTime;
  }

  public
  String getDiagnoseNotes() {
    return diagnoseNotes;
  }

  public
  void setDiagnoseNotes(String diagnoseNotes) {
    this.diagnoseNotes = diagnoseNotes;
  }

  public
  String getAdditionalTests() {
    return additionalTests;
  }

  public
  void setAdditionalTests(String additionalTests) {
    this.additionalTests = additionalTests;
  }

  public
  List<PatientMedicineModel> getMedicines() {
    return medicines;
  }

  public
  void setMedicines(List<PatientMedicineModel> medicines) {
    this.medicines = medicines;
  }
}
