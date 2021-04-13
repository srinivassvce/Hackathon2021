package com.siemens.dx.hackathon.smarthealthsystem.controllers;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Medicine;
import com.siemens.dx.hackathon.smarthealthsystem.serviceImpl.PatientMedicineServiceImpl;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.MedicineRepository;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.NotificationModel;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.PatientMedicineModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(path = "/api")
public
class NotificationController {

  @Autowired
  PatientMedicineServiceImpl patientMedicineService;

  @Autowired
  MedicineRepository medicineRepository;

  @GetMapping(path = "/get/notifications/{patientId}")
  public
  ResponseEntity<List<NotificationModel>> getAllNotifications(@PathVariable long patientId) {
    List<PatientMedicineModel> patientMedicineModels =
        patientMedicineService.getAllMedicinesForPatient(patientId);
    List<NotificationModel> medicineNotifications =
        getRecommendationsForMedicine(patientMedicineModels);

    List<NotificationModel> notificationModels = new ArrayList<>();
    NotificationModel notificationModel = new NotificationModel();
    notificationModel.setTimestamp(new Date());
    notificationModel.setUpdate("HEHEHEHEHEHEHEHH");
    notificationModels.add(notificationModel);

    return new ResponseEntity<>(medicineNotifications, HttpStatus.OK);
  }

  private
  List<NotificationModel> getRecommendationsForMedicine(
      List<PatientMedicineModel> patientMedicineModels) {
    List<NotificationModel> notificationModels = new ArrayList<>();
    List<Medicine> cheaperMedicines = new ArrayList<>();
    for (PatientMedicineModel patientMedicineModel : patientMedicineModels) {
      StringBuilder updateString = new StringBuilder("Other Cheap");
      String classification = patientMedicineModel.getClassification();
      updateString.append(" " + classification + " drugs are ");
      List<Medicine> medicines = medicineRepository.findAllByClassification(classification);
      for (Medicine medicine : medicines) {
        if ((Double.parseDouble(medicine.getMedicinePrice()) <
            Double.parseDouble(patientMedicineModel.getMedicinePrice()))) {
          cheaperMedicines.add(medicine);
          updateString.append(medicine.getBrandName() + ", ");
        }
      } //found cheaperMedicines
      if (!cheaperMedicines.isEmpty()) {
        NotificationModel notificationModel = new NotificationModel();
        notificationModel.setTimestamp(new Date());
        notificationModel.setUpdate(updateString.toString());
        notificationModels.add(notificationModel);
      }
    }// end for for current medicines


    return notificationModels;
  }
}
