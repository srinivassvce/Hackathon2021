package com.siemens.dx.hackathon.smarthealthsystem.servicerepository;

import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientAllergy;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public
interface PatientAllergyRepository extends JpaRepository<PatientAllergy, Long> {
  List<PatientAllergy> findByPatient_PatientId(Long patientId);
}
