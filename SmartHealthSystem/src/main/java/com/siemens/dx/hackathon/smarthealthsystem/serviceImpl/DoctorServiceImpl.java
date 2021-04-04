package com.siemens.dx.hackathon.smarthealthsystem.serviceImpl;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Doctor;
import com.siemens.dx.hackathon.smarthealthsystem.exceptions.EntityNotFoundException;
import com.siemens.dx.hackathon.smarthealthsystem.service.IDoctorService;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.DoctorRepository;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.DoctorModel;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.EntityToViewModelConverter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public
class DoctorServiceImpl implements IDoctorService {
  @Autowired
  DoctorRepository doctorRepository;

  @Override
  public
  List<DoctorModel> findAll() {
    List<DoctorModel> doctorModels = new ArrayList<>();
    List<Doctor> doctors = doctorRepository.findAll();

    for (Doctor doctor : doctors) {
      doctorModels.add(EntityToViewModelConverter.convertDoctor(doctor));
    }
    return doctorModels;
  }

  @Override
  public
  DoctorModel findByDoctorId(Long doctorId) {
    try {
      Doctor doctor = doctorRepository.findById(doctorId).get();
      return EntityToViewModelConverter.convertDoctor(doctor);
    } catch (NoSuchElementException e) {
      throw new EntityNotFoundException("Doctor not found for Id: " + doctorId);
    }
  }
}
