package com.siemens.dx.hackathon.smarthealthsystem.serviceImpl;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientImmunization;
import com.siemens.dx.hackathon.smarthealthsystem.service.IPatientImmunizationService;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientImmunizationRepository;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientImmunizationModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public
class PatientImmunizationServiceImpl implements IPatientImmunizationService {
  @Autowired
  PatientImmunizationRepository patientImmunizationRepository;

  @Override
  public
  List<PatientImmunizationModel> getAllImmunizationsForPatient(Long patientId) {
    List<PatientImmunization> patientImmunizations =
        patientImmunizationRepository.findByPatient_PatientId(patientId);
    List<PatientImmunizationModel> immunizations = new ArrayList<>();
    for (PatientImmunization patientImmunization : patientImmunizations) {
      PatientImmunizationModel patientImmunizationModel = new PatientImmunizationModel();
      patientImmunizationModel.setVaccineDate(patientImmunization.getVaccineDate());
      patientImmunizationModel.setVaccineId(patientImmunization.getImmunization().getVaccineId());
      patientImmunizationModel.setVaccineName(patientImmunization.getImmunization().getVaccineName());
      immunizations.add(patientImmunizationModel);
    }
    return immunizations;
  }
}
