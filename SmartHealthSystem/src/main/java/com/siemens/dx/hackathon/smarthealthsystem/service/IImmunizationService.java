package com.siemens.dx.hackathon.smarthealthsystem.service;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Immunization;

import org.springframework.stereotype.Service;

import java.util.List;

public
interface IImmunizationService {
  List<Immunization> getAllImmunizations();
}
