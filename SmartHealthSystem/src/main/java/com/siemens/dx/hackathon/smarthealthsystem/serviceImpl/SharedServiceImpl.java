package com.siemens.dx.hackathon.smarthealthsystem.serviceImpl;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Doctor;
import com.siemens.dx.hackathon.smarthealthsystem.entity.Patient;
import com.siemens.dx.hackathon.smarthealthsystem.entity.SharedRecord;
import com.siemens.dx.hackathon.smarthealthsystem.service.ISharedRecordsService;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.DoctorRepository;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.PatientRepository;
import com.siemens.dx.hackathon.smarthealthsystem.servicerepository.SharedRecordRepository;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.EmergencyContactModel;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.EntityToViewModelConverter;
import com.siemens.dx.hackathon.smarthealthsystem.viewModels.SharedRecordModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@Service
public
class SharedServiceImpl implements ISharedRecordsService {


  @Autowired
  SharedRecordRepository sharedRecordRepository;

  @Autowired
  PatientRepository patientRepository;

  @Autowired
  DoctorRepository doctorRepository;

  @Override
  public
  EmergencyContactModel addEmergencyContact(EmergencyContactModel emergencyContactModel,
                                            long patientId) {
    SharedRecord sharedRecord = new SharedRecord();
    sharedRecord.setEmergencyContact(true);
    sharedRecord.setPatient(patientRepository.findById(patientId).get());
    sharedRecord.setSharedPatient(
        patientRepository.findById(emergencyContactModel.getPatientId()).get());
    sharedRecord.setSharedDate(Calendar.getInstance().getTime());
    return EntityToViewModelConverter.convertSharedRecordToEmergencyContactModel(
        sharedRecordRepository.save(sharedRecord));
  }

  @Override
  public
  List<EmergencyContactModel> getAllEmergencyContactByPatientId(Long patientId) {
    List<SharedRecord> sharedRecords = sharedRecordRepository.findAllByPatient_PatientId(patientId);
    List<EmergencyContactModel> emergencyContactModels = new ArrayList<>();
    for (SharedRecord sharedRecord : sharedRecords) {
      if (null != sharedRecord.getPatient() && sharedRecord.isEmergencyContact()) {
        emergencyContactModels.add(
            EntityToViewModelConverter.convertSharedRecordToEmergencyContactModel(sharedRecord));
      } else {
        //Doctor is not an Emergency contact
      }
    }

    return emergencyContactModels;
  }

  @Override
  public
  SharedRecordModel getDoctorOrPatientDetails(String email) {
    Patient patient = patientRepository.findByPatientEmail(email);
    Doctor doctor = doctorRepository.findByDoctorEmail(email);
    SharedRecordModel sharedRecordModel = new SharedRecordModel();
    if (null == doctor) {
      sharedRecordModel.setPatientId(patient.getPatientId());
      sharedRecordModel.setSharedEmail(patient.getPatientEmail());
      sharedRecordModel.setSharedName(patient.getPatientName());
    }
    if (null == patient) {
      sharedRecordModel.setPatientId(doctor.getDoctorId());
      sharedRecordModel.setSharedEmail(doctor.getDoctorEmail());
      sharedRecordModel.setSharedName(doctor.getDoctorName());
    }

    return sharedRecordModel;
  }

  @Override
  public
  SharedRecordModel addSharedRecord(SharedRecordModel sharedRecordModel, long patientId) {
    SharedRecord sharedRecord = new SharedRecord();
    sharedRecord.setPatient(patientRepository.findById(patientId).get());
    sharedRecord.setSharedPatient(
        patientRepository.findByPatientEmail(sharedRecordModel.getSharedEmail()));
    sharedRecord.setSharedDoctor(
        doctorRepository.findByDoctorEmail(sharedRecordModel.getSharedEmail()));
    sharedRecord.setEmergencyContact(false);
    sharedRecord.setSharedDate(Calendar.getInstance().getTime());
    SharedRecord sharedRecordSaved = sharedRecordRepository.save(sharedRecord);
    return EntityToViewModelConverter.convertSharedRecordToSharedRecordModel(sharedRecordSaved);
  }

  @Override
  public
  List<SharedRecordModel> getAllSentSharedRecords(Long patientId) {
    List<SharedRecord> sharedRecords = sharedRecordRepository.findAllByPatient_PatientId(patientId);
    List<SharedRecordModel> sharedRecordModels = new ArrayList<>();
    for (SharedRecord sharedRecord : sharedRecords) {
      sharedRecordModels.add(
          EntityToViewModelConverter.convertSharedRecordToSharedRecordModel(sharedRecord));
    }
    return sharedRecordModels;
  }

  @Override
  public
  List<SharedRecordModel> getAllReceivedSharedRecords(Long id) {
    List<SharedRecord> sharedRecords = sharedRecordRepository.findAllBySharedDoctor_DoctorId(id);
    if (sharedRecords.isEmpty()) {
      sharedRecords = sharedRecordRepository.findAllBySharedPatient_PatientId(id);
    }
    List<SharedRecordModel> sharedRecordModels = new ArrayList<>();
    for (SharedRecord sharedRecord : sharedRecords) {
      sharedRecordModels.add(
          EntityToViewModelConverter.convertSharedRecordToViewRecordModel(sharedRecord));
    }
    return sharedRecordModels;
  }

  @Override
  public
  String deleteSharedRecord(long sharedRecordId) {
    SharedRecord sharedRecord = new SharedRecord();
    if (sharedRecordId != -1) {
      sharedRecord = sharedRecordRepository.findById(sharedRecordId).get();
      if(!sharedRecord.isEmergencyContact()){
        sharedRecordRepository.delete(sharedRecord);
      } else {
        return "false";
      }
    }
    return "Deleted share";
  }
}
