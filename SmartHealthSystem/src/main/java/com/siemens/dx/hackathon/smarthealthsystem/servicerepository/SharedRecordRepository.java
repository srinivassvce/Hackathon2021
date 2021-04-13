package com.siemens.dx.hackathon.smarthealthsystem.servicerepository;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Doctor;
import com.siemens.dx.hackathon.smarthealthsystem.entity.Patient;
import com.siemens.dx.hackathon.smarthealthsystem.entity.SharedRecord;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public
interface SharedRecordRepository extends JpaRepository<SharedRecord, Long> {
  List<SharedRecord> findAllByPatient_PatientId(Long patientId);

  List<SharedRecord> findAllBySharedDoctor_DoctorId(Long doctorId);

  List<SharedRecord> findAllBySharedPatient_PatientId(Long patientId);

  SharedRecord findByPatientAndSharedPatient(Patient patient, Patient sharedPatient);

  SharedRecord findByPatientAndSharedDoctor(Patient patient, Doctor sharedDoctor);
}
