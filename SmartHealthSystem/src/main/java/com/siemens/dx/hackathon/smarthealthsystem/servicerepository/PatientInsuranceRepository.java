package com.siemens.dx.hackathon.smarthealthsystem.servicerepository;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientInsurance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public
interface PatientInsuranceRepository extends JpaRepository<PatientInsurance, Long> {
  List<PatientInsurance> findByPatient_PatientId(Long patientId);
}
