package com.siemens.dx.hackathon.smarthealthsystem.serviceImpl;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientReport;
import com.siemens.dx.hackathon.smarthealthsystem.service.IPatientReportService;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.HealthCareProviderRepository;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientReportRepository;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientRepository;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.EntityToViewModelConverter;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientReportModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public
class PatientReportServiceImpl implements IPatientReportService {

  @Autowired
  PatientReportRepository patientReportRepository;

  @Autowired
  PatientRepository patientRepository;

  @Autowired
  HealthCareProviderRepository healthCareProviderRepository;

  @Override
  public
  PatientReportModel addPatientReport(PatientReportModel patientReportModel) {

    PatientReport patientReport = new PatientReport();
    patientReport.setPatient(patientRepository.findById(patientReportModel.getPatientId()).get());
    patientReport.setHealthCareProvider(healthCareProviderRepository
        .findById(patientReportModel.getHealthCareProvider().getHcpId())
        .get());
    patientReport.setReportDate(patientReportModel.getReportDate());
    patientReport.setReportName(patientReportModel.getReportName());
    patientReport.setReportImage(patientReportModel.getReportImages());

    return EntityToViewModelConverter.convertPatientReport(
        patientReportRepository.save(patientReport));
  }

  @Override
  public
  List<PatientReport> getAllPatientReports() {
    return patientReportRepository.findAll();
  }

  @Override
  public
  List<PatientReport> getAllPatientReportByPatientId(long patientId) {
    return patientReportRepository.findAllByPatient_PatientId(patientId);
  }
}
