package com.siemens.dx.hackathon.smarthealthsystem.serviceImpl;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientReports;
import com.siemens.dx.hackathon.smarthealthsystem.service.IPatientReportService;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientReportRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public
class PatientReportServiceImpl implements IPatientReportService {

  @Autowired
  PatientReportRepository patientReportRepository;

  @Override
  public
  PatientReports addPatientReport(PatientReports patientReports) {
    return patientReportRepository.save(patientReports);
  }

  @Override
  public
  List<PatientReports> getAllPatientReports() {
    return patientReportRepository.findAll();
  }

  @Override
  public
  List<PatientReports> getAllPatientReportByPatientId(long patientId) {
    return patientReportRepository.findAllByPatient_PatientId(patientId);
  }
}
