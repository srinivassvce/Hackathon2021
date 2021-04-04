package com.siemens.dx.hackathon.smarthealthsystem.servicerepository;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientMedicine;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public
interface PatientMedicinesRepository extends JpaRepository<PatientMedicine, Long> {
  List<PatientMedicine> findAllByPatient_PatientId(Long patientId);

  List<PatientMedicine> findAllByPatientVisit_PatientVisitId(Long visitId);
}
