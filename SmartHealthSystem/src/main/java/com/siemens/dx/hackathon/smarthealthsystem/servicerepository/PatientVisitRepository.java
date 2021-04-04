package com.siemens.dx.hackathon.smarthealthsystem.servicerepository;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientVisit;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public
interface PatientVisitRepository extends JpaRepository<PatientVisit, Long> {
  List<PatientVisit> findAllByPatient_PatientId(Long patientId);
}
