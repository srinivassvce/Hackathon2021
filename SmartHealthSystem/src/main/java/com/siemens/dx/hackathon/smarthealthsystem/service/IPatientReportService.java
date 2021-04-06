package com.siemens.dx.hackathon.smarthealthsystem.service;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientReports;

import java.util.List;

public
interface IPatientReportService {

  PatientReports addPatientReport(PatientReports patientReports);

  List<PatientReports> getAllPatientReports();

  List<PatientReports> getAllPatientReportByPatientId(long patientId);
}
