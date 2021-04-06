package com.siemens.dx.hackathon.smarthealthsystem.servicerepository;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Doctor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public
interface DoctorRepository extends JpaRepository<Doctor, Long> {
  Doctor findByDoctorEmail(String doctorEmail);
}
