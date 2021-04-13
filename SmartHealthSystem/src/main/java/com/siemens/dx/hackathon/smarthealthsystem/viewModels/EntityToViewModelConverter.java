package com.siemens.dx.hackathon.smarthealthsystem.viewModels;

import com.siemens.dx.hackathon.smarthealthsystem.entity.Doctor;
import com.siemens.dx.hackathon.smarthealthsystem.entity.HealthCareProvider;
import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientAllergy;
import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientImmunization;
import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientInsurance;
import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientMedicine;
import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientReport;
import com.siemens.dx.hackathon.smarthealthsystem.entity.PatientVisit;
import com.siemens.dx.hackathon.smarthealthsystem.entity.SharedRecord;

import java.util.ArrayList;
import java.util.List;

public
class EntityToViewModelConverter {

  public static
  DoctorModel convertDoctor(Doctor doctor) {
    DoctorModel doctorModel = new DoctorModel();
    doctorModel.setDoctorId(doctor.getDoctorId());
    doctorModel.setDoctorEmail(doctor.getDoctorEmail());
    doctorModel.setDoctorName(doctor.getDoctorName());
    doctorModel.setLicenseNumber(doctor.getLicenseNumber());
    doctorModel.setSpecialization(doctor.getSpecialization());
    List<HealthCareProviderModel> healthCareProviderModels = new ArrayList<>();
    for (HealthCareProvider healthCareProvider : doctor.getHealthCareProviders()) {
      HealthCareProviderModel healthCareProviderModel = new HealthCareProviderModel();
      healthCareProviderModel.setHcpId(healthCareProvider.getHcpId());
      healthCareProviderModel.setHcpName(healthCareProvider.getHcpName());
      healthCareProviderModels.add(healthCareProviderModel);
    }
    doctorModel.setHealthCareProviders(healthCareProviderModels);
    return doctorModel;
  }

  public static
  HealthCareProviderModel convertHealthCareProvider(HealthCareProvider healthCareProvider) {
    HealthCareProviderModel healthCareProviderModel = new HealthCareProviderModel();
    healthCareProviderModel.setHcpId(healthCareProvider.getHcpId());
    healthCareProviderModel.setHcpName(healthCareProvider.getHcpName());
    healthCareProviderModel.setHcpCity(healthCareProvider.getHcpCity());
    healthCareProviderModel.setHcpContact(healthCareProvider.getHcpContact());
    healthCareProviderModel.setHcpLicense(healthCareProvider.getHcpLicense());
    healthCareProviderModel.setHcpPincode(healthCareProvider.getHcpPincode());
    healthCareProviderModel.setHcpState(healthCareProvider.getHcpState());
    healthCareProviderModel.setHcpType(healthCareProvider.getHcpType());
    List<DoctorModel> doctorModels = new ArrayList<>();
    for (Doctor doctor : healthCareProvider.getDoctors()) {
      DoctorModel doctorModel = new DoctorModel();
      doctorModel.setDoctorId(doctor.getDoctorId());
      doctorModel.setDoctorName(doctor.getDoctorName());
      doctorModels.add(doctorModel);
    }
    healthCareProviderModel.setDoctors(doctorModels);
    return healthCareProviderModel;
  }

  public static
  PatientMedicineModel convertPatientMedicine(PatientMedicine patientMedicine) {
    PatientMedicineModel medicineModel = new PatientMedicineModel();
    medicineModel.setBrandName(patientMedicine.getMedicine().getBrandName());
    medicineModel.setClassification(patientMedicine.getMedicine().getClassification());
    medicineModel.setDose(patientMedicine.getMedicine().getDose());
    medicineModel.setMedicineId(patientMedicine.getMedicine().getMedicineId());
    medicineModel.setManufacturer(patientMedicine.getMedicine().getManufacturer());
    medicineModel.setGenericName(patientMedicine.getMedicine().getGenericName());
    medicineModel.setMedicineType(patientMedicine.getMedicine().getMedicineType());
    medicineModel.setMedicinePrice(patientMedicine.getMedicine().getMedicinePrice());
    medicineModel.setFrequency(patientMedicine.getFrequency());
    medicineModel.setFromDate(patientMedicine.getFromDate());
    medicineModel.setToDate(patientMedicine.getToDate());
    medicineModel.setPatientId(patientMedicine.getPatient().getPatientId());
    if (null != patientMedicine.getPatientVisit()) {
      medicineModel.setPatientVisitId(patientMedicine.getPatientVisit().getPatientVisitId());
    }
    return medicineModel;
  }

  public static
  PatientAllergyModel convertPatientAllergy(PatientAllergy patientAllergy) {
    PatientAllergyModel patientAllergyModel = new PatientAllergyModel();
    patientAllergyModel.setPatientId(patientAllergy.getPatient().getPatientId());
    patientAllergyModel.setAllergyId(patientAllergy.getAllergy().getAllergyId());
    patientAllergyModel.setAllergens(patientAllergy.getAllergy().getAllergens());
    patientAllergyModel.setAllergyType(patientAllergy.getAllergy().getAllergyType());
    patientAllergyModel.setSymptoms(patientAllergy.getSymptoms());
    return patientAllergyModel;
  }

  public static
  PatientVisitModel convertPatientVisit(PatientVisit patientVisit,
                                        List<PatientMedicineModel> patientMedicineModels) {
    PatientVisitModel patientVisitModel = new PatientVisitModel();

    patientVisitModel.setAdditionalTests(patientVisit.getAdditionalTests());
    patientVisitModel.setDiagnoseNotes(patientVisit.getDiagnoseNotes());
    patientVisitModel.setHealthCareProvider(
        convertHealthCareProvider(patientVisit.getHealthCareProvider()));
    patientVisitModel.setDoctor(convertDoctor(patientVisit.getDoctor()));
    patientVisitModel.setNextVisitDateTime(patientVisit.getNextVisitDateTime());
    patientVisitModel.setVisitDateTime(patientVisit.getVisitDateTime());
    patientVisitModel.setPatient(patientVisit.getPatient());
    patientVisitModel.setSurgeryNotes(patientVisit.getSurgeryNotes());
    patientVisitModel.setMedicines(patientMedicineModels);
    return patientVisitModel;
  }

  public static
  PatientInsuranceModel convertPatientInsurance(PatientInsurance patientInsurance) {
    PatientInsuranceModel patientInsuranceModel = new PatientInsuranceModel();

    patientInsuranceModel.setInsuranceId(patientInsurance.getMedicalInsurance().getInsuranceId());
    patientInsuranceModel.setInsuranceCompany(
        patientInsurance.getMedicalInsurance().getInsuranceCompany());
    patientInsuranceModel.setTpa(patientInsurance.getMedicalInsurance().getTpa());
    patientInsuranceModel.setSumInsured(patientInsurance.getSumInsured());
    patientInsuranceModel.setInsuranceDocuments(patientInsurance.getInsuranceDocuments());
    patientInsuranceModel.setPatientId(patientInsurance.getPatient().getPatientId());
    return patientInsuranceModel;
  }

  public static
  PatientImmunizationModel convertPatientImmunization(PatientImmunization patientImmunization) {
    PatientImmunizationModel patientImmunizationModel = new PatientImmunizationModel();
    patientImmunizationModel.setVaccineDate(patientImmunization.getVaccineDate());
    patientImmunizationModel.setVaccineId(patientImmunization.getImmunization().getVaccineId());
    patientImmunizationModel.setPatientId(patientImmunization.getPatient().getPatientId());
    patientImmunizationModel.setVaccineName(patientImmunization.getImmunization().getVaccineName());
    return patientImmunizationModel;
  }

  public static
  PatientReportModel convertPatientReport(PatientReport patientReport) {
    PatientReportModel patientReportModel = new PatientReportModel();
    patientReportModel.setPatientId(patientReport.getPatient().getPatientId());
    patientReportModel.setHealthCareProvider(
        convertHealthCareProvider(patientReport.getHealthCareProvider()));
    patientReportModel.setReportName(patientReport.getReportName());
    patientReportModel.setReportDate(patientReport.getReportDate());
    patientReportModel.setReportImages(patientReport.getReportImage());
    return patientReportModel;
  }

  public static
  EmergencyContactModel convertSharedRecordToEmergencyContactModel(SharedRecord sharedRecord) {
    EmergencyContactModel emergencyContactModel = new EmergencyContactModel();
    emergencyContactModel.setPatientId(sharedRecord.getPatient().getPatientId());
    emergencyContactModel.setEmergencyPatient(sharedRecord.getSharedPatient());
    return emergencyContactModel;
  }

  public static
  SharedRecordModel convertSharedRecordToSharedRecordModel(SharedRecord sharedRecord) {
    SharedRecordModel sharedRecordModel = new SharedRecordModel();
    if (null != sharedRecord.getSharedDoctor()) {
      sharedRecordModel.setSharedEmail(sharedRecord.getSharedDoctor().getDoctorEmail());
      sharedRecordModel.setSharedName(sharedRecord.getSharedDoctor().getDoctorName());
      sharedRecordModel.setPatientId(sharedRecord.getSharedDoctor().getDoctorId());
    }
    if (null != sharedRecord.getSharedPatient()) {
      sharedRecordModel.setSharedEmail(sharedRecord.getSharedPatient().getPatientEmail());
      sharedRecordModel.setSharedName(sharedRecord.getSharedPatient().getPatientName());
      sharedRecordModel.setPatientId(sharedRecord.getSharedPatient().getPatientId());
    }
    sharedRecordModel.setSharedDate(sharedRecord.getSharedDate());
    sharedRecordModel.setSharedRecordId(sharedRecord.getSharedRecordId());
    return sharedRecordModel;
  }

  public static
  SharedRecordModel convertSharedRecordToViewRecordModel(SharedRecord sharedRecord) {
    SharedRecordModel sharedRecordModel = new SharedRecordModel();
    sharedRecordModel.setSharedEmail(sharedRecord.getPatient().getPatientEmail());
    sharedRecordModel.setSharedName(sharedRecord.getPatient().getPatientName());
    sharedRecordModel.setPatientId(sharedRecord.getPatient().getPatientId());
    sharedRecordModel.setSharedDate(sharedRecord.getSharedDate());
    return sharedRecordModel;
  }
}
