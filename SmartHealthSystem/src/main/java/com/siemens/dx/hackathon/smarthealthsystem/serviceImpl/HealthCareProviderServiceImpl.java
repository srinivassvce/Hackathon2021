package com.siemens.dx.hackathon.smarthealthsystem.serviceImpl;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Doctor;
import com.siemens.dx.hackathon.smarthealthsystem.entity.HealthCareProvider;
import com.siemens.dx.hackathon.smarthealthsystem.service.IHealthCareProviderService;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.HealthCareProviderRepository;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.DoctorModel;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.EntityToViewModelConverter;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.HealthCareProviderModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public
class HealthCareProviderServiceImpl implements IHealthCareProviderService {
  @Autowired
  HealthCareProviderRepository healthCareProviderRepository;

  @Override
  public
  List<HealthCareProvider> getAllHealthCareProviders() {
    return healthCareProviderRepository.findAll();
  }

  @Override
  public
  HealthCareProviderModel getHcpById(Long hcpId) {
    return EntityToViewModelConverter.convertHealthCareProvider(
        healthCareProviderRepository.findById(hcpId).get());
  }
}
