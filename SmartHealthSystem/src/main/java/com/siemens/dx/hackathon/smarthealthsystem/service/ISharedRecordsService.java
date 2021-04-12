package com.siemens.dx.hackathon.smarthealthsystem.service;

import com.siemens.dx.hackathon.smarthealthsystem.viewModels.EmergencyContactModel;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.SharedRecordModel;

import java.util.List;

public
interface ISharedRecordsService {
  EmergencyContactModel addEmergencyContact(EmergencyContactModel emergencyContactModel,
                                            long patientId);

  List<EmergencyContactModel> getAllEmergencyContactByPatientId(Long patientId);

  SharedRecordModel getDoctorOrPatientDetails(String email);

  SharedRecordModel addSharedRecord(SharedRecordModel sharedRecordModel);

  List<SharedRecordModel> getAllSentSharedRecords(Long patientId);

  List<SharedRecordModel> getAllReceivedSharedRecords(Long id);

  String deleteSharedRecord(SharedRecordModel sharedRecordModel);
}
