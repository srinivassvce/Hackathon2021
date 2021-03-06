package com.siemens.dx.hackathon.smarthealthsystem.service;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientVisit;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.DoctorModel;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.MedicalHistoryModel;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientVisitModel;

import java.util.List;

public
interface IPatientVisitService {
  List<PatientVisitModel> getAllVisitDetailsForPatient(Long patientId);

  List<PatientVisit> getAllVisits();

  PatientVisitModel addPatientVisit(PatientVisitModel patientVisitModel);

  List<DoctorModel> getAllDoctorsForAPatient(Long patientId);

  List<MedicalHistoryModel> getMedicalHistory(Long patientId);
}
