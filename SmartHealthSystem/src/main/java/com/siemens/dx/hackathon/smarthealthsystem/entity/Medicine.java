package com.siemens.dx.hackathon.smarthealthsystem.entity;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public
class Medicine implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "medicine_id")
  private Long medicineId;

  @Column(name = "generic_name")
  private String genericName;

  @Column(name = "brand_name")
  private String brandName;

  @Column(name = "medicine_dose")
  private String dose;

  @Column(name = "classification")
  private String classification;

  private String manufacturer;

  @Enumerated(EnumType.ORDINAL)
  @Column(name = "medicine_type")
  private MedicineType medicineType;

  @Column(name = "medicine_price")
  private String medicinePrice;

  public
  Medicine() {
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
    Medicine medicine = (Medicine) o;
    return Objects.equals(medicineId, medicine.medicineId) &&
        Objects.equals(genericName, medicine.genericName) &&
        Objects.equals(brandName, medicine.brandName) &&
        Objects.equals(dose, medicine.dose) &&
        Objects.equals(classification, medicine.classification) &&
        Objects.equals(manufacturer, medicine.manufacturer) &&
        medicineType == medicine.medicineType &&
        Objects.equals(medicinePrice, medicine.medicinePrice);
  }

  @Override
  public
  String toString() {
    return "Medicine{" +
        "medicineId=" +
        medicineId +
        ", genericName='" +
        genericName +
        '\'' +
        ", brandName='" +
        brandName +
        '\'' +
        ", dose='" +
        dose +
        '\'' +
        ", classification='" +
        classification +
        '\'' +
        ", manufacturer='" +
        manufacturer +
        '\'' +
        ", medicineType=" +
        medicineType +
        ", medicinePrice='" +
        medicinePrice +
        '\'' +
        '}';
  }

  @Override
  public
  int hashCode() {
    return Objects.hash(medicineId, genericName, brandName, dose, classification, manufacturer,
        medicineType, medicinePrice);
  }

  public
  Medicine(String genericName, String dose, String classification, String manufacturer,
           MedicineType medicineType, String brandName, String medicinePrice) {
    this.genericName = genericName;
    this.dose = dose;
    this.classification = classification;
    this.manufacturer = manufacturer;
    this.medicineType = medicineType;
    this.brandName = brandName;
    this.medicinePrice = medicinePrice;
  }

  public
  Long getMedicineId() {
    return medicineId;
  }

  public
  void setMedicineId(Long medicineId) {
    this.medicineId = medicineId;
  }

  public
  String getGenericName() {
    return genericName;
  }

  public
  void setGenericName(String genericName) {
    this.genericName = genericName;
  }

  public
  String getBrandName() {
    return brandName;
  }

  public
  void setBrandName(String brandName) {
    this.brandName = brandName;
  }

  public
  String getDose() {
    return dose;
  }

  public
  void setDose(String dose) {
    this.dose = dose;
  }

  public
  String getClassification() {
    return classification;
  }

  public
  void setClassification(String classification) {
    this.classification = classification;
  }

  public
  String getManufacturer() {
    return manufacturer;
  }

  public
  void setManufacturer(String manufacturer) {
    this.manufacturer = manufacturer;
  }

  public
  MedicineType getMedicineType() {
    return medicineType;
  }

  public
  void setMedicineType(MedicineType medicineType) {
    this.medicineType = medicineType;
  }

  public
  String getMedicinePrice() {
    return medicinePrice;
  }

  public
  void setMedicinePrice(String medicinePrice) {
    this.medicinePrice = medicinePrice;
  }
}
