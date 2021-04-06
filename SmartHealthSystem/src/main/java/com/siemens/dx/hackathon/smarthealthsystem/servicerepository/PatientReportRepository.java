package com.siemens.dx.hackathon.smarthealthsystem.servicerepository;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientReport;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public
interface PatientReportRepository extends JpaRepository<PatientReport, Long> {

  List<PatientReport> findAllByPatient_PatientId(Long patientId);
}
