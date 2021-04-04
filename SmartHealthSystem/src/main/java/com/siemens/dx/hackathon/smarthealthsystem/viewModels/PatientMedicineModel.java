package com.siemens.dx.hackathon.smarthealthsystem.viewModels;

import com.siemens.dx.hackathon.smarthealthsystem.entity.MedicineType;

import java.util.Date;

public
class PatientMedicineModel {
  private Long medicineId;

  private String genericName;

  private String brandName;

  private String dose;

  private String classification;

  private String manufacturer;

  private MedicineType medicineType;

  private String medicinePrice;

  private Date fromDate;

  private Date toDate;

  private String frequency;


  public
  PatientMedicineModel() {
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
}
