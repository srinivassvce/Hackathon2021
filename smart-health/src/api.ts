import axios, {AxiosResponse} from "axios";
import {HealthCareProvider, HealthCareProviderModel, Patient, PatientVisitModel, SharedRecordModel} from "./_gen/entity";

export function getUrl(): string {
	return `http://localhost:8080/api/`;
}

export function loginUrl(): string {
	return `${getUrl()}/login`;
}

export function doctorLoginUrl(): string {
    return `${getUrl()}/doctorLogin`;
}

export async function registerUser(user: any): Promise<boolean> {
	console.log(user);
	await axios.post(
		"http://localhost:8080/api/create/patient",
		{...user}
	);
	return true;
}

export async function getAllergens(patientId: string) {
	const response = await axios.get(
		`${getUrl()}get/patient/allergy/${patientId}`
	);
	return Promise.resolve(response.data);
}

export async function getPatientName(patientId: string): Promise<string> {
	const patient = await getPatientDetails(patientId);
	return patient.patientName;
}

export async function getPatientDetails(patientId: String): Promise<Patient> {
	const response: AxiosResponse<any> = await axios.get(`${getUrl()}get/patient/${patientId}`);
	return response.data;
}

export async function getAllAllergens() {
	const response = await axios.get(`${getUrl()}get/allergy/all`);
	return response.data;
}

export async function getAllPatients() {
    const response = await axios.get(`${getUrl()}get/patient/all`);
    return response.data;
}

export async function getPatientByEmail(patientEmail: string): Promise<Patient> {
    const response: AxiosResponse<any> = await axios.get(`${getUrl()}get/patient/email/${patientEmail}`);;
    return response.data;
}

export async function getPatientVisits(patientId: string) {
	const response = await axios.get(`${getUrl()}get/patient/visits/${patientId}`);
	return response.data;
}

export async function savePatientVisits(patientVisitModel: PatientVisitModel) {
	const response = await axios.post(`${getUrl()}add/patient/visit`, patientVisitModel);
}

export async function getAllMedicines() {
	const response = await axios.get(`${getUrl()}get/medicine/all`);
	return response.data;
}


export async function getAllImmunizations() {
	const response = await axios.get(`${getUrl()}get/immunization/all`);
	return response.data;
}

export async function getAllMedicalInsurances() {
	const response = await axios.get(`${getUrl()}get/insuranceCompany/all`);
	return response.data;
}

export async function saveAllergenDetails(allergy: any, patientId: string): Promise<boolean> {
	const patient = await getPatientDetails(patientId);
	await axios.post(
		`${getUrl()}add/patient/allergy`,
		{
			patientId,
			...allergy,
			symptoms: allergy.symptoms
		}
	);
	return true;
}

export async function saveImmunizationDetails(immunization: any, patientId: string): Promise<boolean> {
	await axios.post(
		`${getUrl()}add/patient/immunization`,
		{
			...immunization,
			patientId,
		}
	);
	return true;
}

export async function saveInsuranceDetails(medicalInsurance: any, patientId: string): Promise<boolean> {
	await axios.post(
		`${getUrl()}add/patient/insurance`,
		{
			...medicalInsurance,
			patientId,
		}
	);
	return true;
}

export async function saveMedicineDetails(medicine: any, patientId: string): Promise<boolean> {

	await axios.post(
		`${getUrl()}add/patient/medicine`,
		{
			...medicine,
			patientId,
			frequency: medicine.frequency
		}
	);
	return true;
}

export async function getMedicines(patientId: string) {

	const response = await axios.get(
		`${getUrl()}get/patient/medicine/${patientId}`
	);
	return Promise.resolve(response.data);
}


export async function getDoctors() {
	return Promise.resolve(
		{
			doctors: [
				"Doctor 1",
				"Doctor 2",
				"Doctor 3"
			]
		}
	);
}

export async function getImmunizations(patientId: string) {
	const response = await axios.get(
		`${getUrl()}get/patient/immunization/${patientId}`
	);
	return Promise.resolve(response.data);
}

/*export async function getImmunizations() {
	return Promise.resolve(
		{
			immunizations: [
				"Vaccine 1",
				"Vaccine 2",
				"Vaccine 3"
			]
		}
	);
}*/
export async function getMedicalInsurances(patientId: string) {
	const response = await axios.get(
		`${getUrl()}get/patient/insurance/${patientId}`
	);
	return Promise.resolve(response.data);
}


export async function getMedicalHistory() {
	return Promise.resolve(
		{
			medicalHistory: [
				"History 1",
				"History 2",
				"History 3"
			]
		}
	);
}

export async function getEmergencyContacts(patientId: string) {
    const response = await axios.get(
        `${getUrl()}get/patient/emergencyContact/${patientId}`
    )
    return Promise.resolve(response.data);
}

export async function saveEmergencyContactDetails(patient: Patient, aPatientId: string): Promise<boolean> {
    console.log("About to save");
    await axios.post(
        `${getUrl()}add/patient/emergencyContact/${aPatientId}`,
        {
            aPatientId,
            ...patient
        }
    );
    return true;
}

export async function getAllergen(allergenId: string) {
	const response = await axios.get(`${getUrl()}/get/allergy/${allergenId}`);
	return response.data;
}

export async function getHealthcareProviders(): Promise<HealthCareProviderModel[]> {
	const response = await axios.get(`${getUrl()}get/hcp/all`);
	return response.data;
}

export async function getDoctorOrPatientDetails(patientEmail: string): Promise<SharedRecordModel> {
    const response: AxiosResponse<any> = await axios.get(`${getUrl()}get/confirmation/share/${patientEmail}`);;
    return response.data;
}

export async function getAllSentSharedRecords(patientId: string): Promise<SharedRecordModel[]> {
    const response: AxiosResponse<any> = await axios.get(`${getUrl()}get/sentSharedRecords/all/${patientId}`);;
    return response.data;
}

export async function saveSharedRecords(sharedRecord: any, aPatientId: string): Promise<any> {
    const response =await axios.post(
        `${getUrl()}add/shareRecord/${aPatientId}`,
        {
            ...sharedRecord,
			aPatientId
        }
    );
    return response.data;
}

export async function deleteSharedRecord(sharedRecordId: number): Promise<SharedRecordModel[]> {
    const response: AxiosResponse<any> = await axios.delete(`${getUrl()}delete/sharedRecord/${sharedRecordId}`);;
    return response.data;
}

