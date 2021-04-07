package com.siemens.dx.hackathon.smarthealthsystem.service;

import com.siemens.dx.hackathon.smarthealthsystem.viewModels.DoctorModel;

import java.util.List;

public
interface IDoctorService {
  List<DoctorModel> findAll();

  DoctorModel findByDoctorId(Long doctorId);

  String loginDoctor(String patientEmail, String patientPassword);
}
