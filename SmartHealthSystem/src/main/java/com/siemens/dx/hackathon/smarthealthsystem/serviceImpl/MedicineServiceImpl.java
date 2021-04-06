package com.siemens.dx.hackathon.smarthealthsystem.serviceImpl;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Medicine;
import com.siemens.dx.hackathon.smarthealthsystem.service.IMedicineService;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public
class MedicineServiceImpl implements IMedicineService {

  @Autowired
  MedicineRepository medicineRepository;

  @Override
  public
  List<Medicine> getAllImmunizations() {
    return medicineRepository.findAll();
  }

  @Override
  public
  Medicine createMedicines(Medicine medicine) {
    return medicineRepository.save(medicine);
  }
}
