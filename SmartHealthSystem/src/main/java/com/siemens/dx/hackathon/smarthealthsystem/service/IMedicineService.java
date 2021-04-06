package com.siemens.dx.hackathon.smarthealthsystem.service;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Medicine;

import java.util.List;

public
interface IMedicineService {

  List<Medicine> getAllImmunizations();

  Medicine createMedicines(Medicine medicine);
}
