import axios, { AxiosResponse } from "axios";
import IPatient from "./entities/IPatient";

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
	await axios.post("http://localhost:8080/api/create/patient", { ...user });
	return true;
}

export async function getAllergens(patient: string) {
	const allergens = [
		"Food Allergy- Egg, Milk, Mustard",
		"Food Allergy- Egg, Milk, Mustard",
		"Food Allergy- Egg, Milk, Mustard",
	];
	return Promise.resolve({ allergens });
}
export async function getPatientName(patientId: string): Promise<string> {
	const patient = await getPatientDetails(patientId);
	return patient.patientName;
}

export async function getPatientDetails(patientId: String): Promise<IPatient> {
	const response: AxiosResponse<any> = await axios.get(
		`${getUrl()}/get/patient/${patientId}`,
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
	await axios.post(`${getUrl()}create/patient/allergy`, {
		patient,
		allergy,
		symptoms: allergy.symptoms,
	});
	return true;
}

export async function getMedicines(patient: string) {
	return Promise.resolve({
		medicines: ["Medicine 1", "Medicine 2", "Medicine 3"],
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
