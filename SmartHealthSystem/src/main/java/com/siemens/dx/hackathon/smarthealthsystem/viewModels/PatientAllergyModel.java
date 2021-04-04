package com.siemens.dx.hackathon.smarthealthsystem.viewModels;

public
class PatientAllergyModel {
  private Long allergyId;

  private String allergyType;

  private String allergens;

  private String symptoms;

  public
  PatientAllergyModel() {
  }

  public
  Long getAllergyId() {
    return allergyId;
  }

  public
  void setAllergyId(Long allergyId) {
    this.allergyId = allergyId;
  }

  public
  String getAllergyType() {
    return allergyType;
  }

  public
  void setAllergyType(String allergyType) {
    this.allergyType = allergyType;
  }

  public
  String getAllergens() {
    return allergens;
  }

  public
  void setAllergens(String allergens) {
    this.allergens = allergens;
  }

  public
  String getSymptoms() {
    return symptoms;
  }

  public
  void setSymptoms(String symptoms) {
    this.symptoms = symptoms;
  }
}
