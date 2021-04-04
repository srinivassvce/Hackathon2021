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
class Allergy implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "allergy_id")
  private Long allergyId;

  @Column(name = "allergy_type")
  private String allergyType;

  @Column(name = "allergens")
  private String allergens;

  @OneToMany(mappedBy = "allergy")
  private
  Set<PatientAllergy> patientAllergies = new HashSet<>();

  public
  Allergy() {
  }

  public
  Allergy(String allergyType, String allergens) {
    this.allergyType = allergyType;
    this.allergens = allergens;
  }

  public
  Long getAllergyId() {
    return allergyId;
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

  @Override
  public
  boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (!(o instanceof Allergy)) {
      return false;
    }
    Allergy allergy = (Allergy) o;
    return Objects.equals(getAllergyId(), allergy.getAllergyId()) &&
        Objects.equals(getAllergyType(), allergy.getAllergyType()) &&
        Objects.equals(getAllergens(), allergy.getAllergens());
  }

  @Override
  public
  int hashCode() {
    return Objects.hash(getAllergyId(), getAllergyType(), getAllergens());
  }

  @Override
  public
  String toString() {
    return "Allergy{" +
        "allergyId=" + allergyId +
        ", allergyType='" + allergyType +
        '\'' +
        ", allergens='" + allergens +
        '\'' +
        '}';
  }
}
