package com.siemens.dx.hackathon.smarthealthsystem.service;


import com.siemens.dx.hackathon.smarthealthsystem.entity.HealthCareProvider;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.HealthCareProviderModel;

import java.util.List;

public
interface IHealthCareProviderService {
  List<HealthCareProviderModel> getAllHealthCareProviders();

  HealthCareProviderModel getHcpById(Long hcpId);
}
