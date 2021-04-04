package com.siemens.dx.hackathon.smarthealthsystem.entity;

public
enum HealthCareProviderType {
  Hospital,
  Clinic,
  Diagnostics;

  public int getHealthCareProviderType() {
    return this.ordinal();
  }
}
