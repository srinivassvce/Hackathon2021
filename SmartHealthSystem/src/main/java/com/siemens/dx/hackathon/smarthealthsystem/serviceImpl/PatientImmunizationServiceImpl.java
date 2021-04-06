package com.siemens.dx.hackathon.smarthealthsystem.serviceImpl;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientImmunization;
import com.siemens.dx.hackathon.smarthealthsystem.service.IPatientImmunizationService;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.ImmunizationRepository;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientImmunizationRepository;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientRepository;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.EntityToViewModelConverter;
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

  @Autowired
  PatientRepository patientRepository;

  @Autowired
  ImmunizationRepository immunizationRepository;

  @Override
  public
  PatientImmunizationModel addPatientImmunization(
      PatientImmunizationModel patientImmunizationModel) {
    PatientImmunization patientImmunization = new PatientImmunization();
    patientImmunization.setVaccineDate(patientImmunizationModel.getVaccineDate());
    patientImmunization.setImmunization(
        immunizationRepository.findById(patientImmunizationModel.getVaccineId()).get());
    patientImmunization.setPatient(
        patientRepository.findById(patientImmunizationModel.getPatientId()).get());

    return EntityToViewModelConverter.convertPatientImmunization(
        patientImmunizationRepository.save(patientImmunization));
  }

  @Override
  public
  List<PatientImmunizationModel> getAllImmunizationsForPatient(Long patientId) {
    List<PatientImmunization> patientImmunizations =
        patientImmunizationRepository.findByPatient_PatientId(patientId);
    List<PatientImmunizationModel> immunizations = new ArrayList<>();
    for (PatientImmunization patientImmunization : patientImmunizations) {
      immunizations.add(EntityToViewModelConverter.convertPatientImmunization(patientImmunization));
    }
    return immunizations;
  }

  @Override
  public
  String deleteImmunizationForAPatient(Long immunizationId) {
    patientImmunizationRepository.delete(
        patientImmunizationRepository.findById(immunizationId).get());
    return "Immunization with id:" + immunizationId + " deleted successfully!;";
  }
}
