package com.siemens.dx.hackathon.smarthealthsystem.service;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientReport;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientReportModel;

import java.util.List;

public
interface IPatientReportService {

  PatientReportModel addPatientReport(PatientReportModel patientReportModel);

  List<PatientReport> getAllPatientReports();

  List<PatientReport> getAllPatientReportByPatientId(long patientId);
}
