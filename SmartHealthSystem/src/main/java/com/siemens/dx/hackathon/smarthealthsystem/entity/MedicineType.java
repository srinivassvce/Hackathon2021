package com.siemens.dx.hackathon.smarthealthsystem.entity;

public
enum MedicineType {

  TABLET,
  CAPSULE,
  SYRUP,
  INJECTION;

  public int getMedicineType() {
    return this.ordinal();
  }

}
