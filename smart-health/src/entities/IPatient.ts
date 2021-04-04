export default interface IPatient {
	patientId: number;
	patientName: string;
	patientAddress: string;
	patientEmail: string;
	password: string;
	mobile?: string;
	birthDate: Date;
	address: string;
	bloodGroup: string;
	height: string;
	weight: string;
}