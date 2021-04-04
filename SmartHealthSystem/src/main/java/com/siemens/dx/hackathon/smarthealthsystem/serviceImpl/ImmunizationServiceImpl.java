package com.siemens.dx.hackathon.smarthealthsystem.serviceImpl;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Immunization;
import com.siemens.dx.hackathon.smarthealthsystem.service.IImmunizationService;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.ImmunizationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public
class ImmunizationServiceImpl implements IImmunizationService {
  @Autowired
  ImmunizationRepository immunizationRepository;

  @Override
  public
  List<Immunization> getAllImmunizations() {
    return immunizationRepository.findAll();
  }
}
