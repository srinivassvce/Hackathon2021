import axios, { AxiosResponse } from "axios";
import IPatient from "./entities/IPatient";

export function getUrl(): string {
	return `http://localhost:8080/api/`;
}

export function loginUrl(): string {
	return `${getUrl()}/login`;
}

export async function registerUser(user: any): Promise<boolean> {
	console.log(user);
	await axios.post("http://localhost:8080/api/create/patient", { ...user });
	return true;
}

export async function getAllergens(patientId: string) {
	const response = await axios.get(
		`${getUrl()}get/patient/allergy/${patientId}`,
	);
	return Promise.resolve(response.data);
}

export async function getPatientName(patientId: string): Promise<string> {
	const patient = await getPatientDetails(patientId);
	return patient.patientName;
}

export async function getPatientDetails(patientId: String): Promise<IPatient> {
	const response: AxiosResponse<any> = await axios.get(
		`${getUrl()}get/patient/${patientId}`,
	);
	return response.data;
}

export async function getAllAllergens() {
	const response = await axios.get(`${getUrl()}get/allergy/all`);
	return response.data;
}

export async function saveAllergenDetails(
	allergy: any,
	patientId: string,
): Promise<boolean> {
	const patient = await getPatientDetails(patientId);
	await axios.post(`${getUrl()}add/patient/allergy`, {
		patientId,
		...allergy,
		symptoms: allergy.symptoms,
	});
	return true;
}
export async function saveUploadPatientReport(
	patientId: string,
	hospital: string,
	reportname: string,
	patientname: string,
	fileupload: any,
): Promise<boolean> {
	await axios.post(`${getUrl()}/add/patient/report`, {
		patientId,
		hospital,
		reportname,
		patientname,
		fileupload,
	});
	return true;
}

export async function getMedicines(patient: string) {
	return Promise.resolve({
		medicines: ["Medicine 1", "Medicine 2", "Medicine 3"],
	});
}

export async function getDoctors() {
	return Promise.resolve({
		doctors: ["Doctor 1", "Doctor 2", "Doctor 3"],
	});
}

export async function getImmunizations() {
	return Promise.resolve({
		immunizations: ["Vaccine 1", "Vaccine 2", "Vaccine 3"],
	});
}

export async function getMedicalInsurances() {
	return Promise.resolve({
		medicalInsurances: ["Insurance 1", "Insurance 2", "Insurance 3"],
	});
}

export async function getLastVisits() {
	return Promise.resolve({
		lastVisits: ["Visit 1", "Visit 2", "Visit 3"],
	});
}

export async function getMedicalHistory() {
	return Promise.resolve({
		medicalHistory: ["History 1", "History 2", "History 3"],
	});
}

export async function getEmergencyContacts() {
	return Promise.resolve({
		emergencyContacts: ["Contact 1", "Contact 2", "Contact 3"],
	});
}

export async function getAllergen(allergenId: string) {
	const response = await axios.get(`${getUrl()}/get/allergy/${allergenId}`);
	return response.data;
}

export function getPatientInfo(patientId: string) {
	return Promise.resolve({
		patientInfo: {
			allergens: [],
			medicines: [],
			name: "Smart Health Pat - 1",
		},
	});
}
