package com.siemens.dx.hackathon.smarthealthsystem.servicerepository;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientReports;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public
interface PatientReportRepository extends JpaRepository<PatientReports, Long> {

  List<PatientReports> findAllByPatient_PatientId(Long patientId);
}
