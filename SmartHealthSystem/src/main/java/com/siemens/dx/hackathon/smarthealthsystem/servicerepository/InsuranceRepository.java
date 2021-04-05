package com.siemens.dx.hackathon.smarthealthsystem.servicerepository;

import com.siemens.dx.hackathon.smarthealthsystem.entity.MedicalInsurance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public
interface InsuranceRepository extends JpaRepository<MedicalInsurance, Long> {
}
