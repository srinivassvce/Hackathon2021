import * as React from "react";
import {PatientVisitModel} from "../_gen/entity";
import AddAllergen from "../addPages/addAllergen";
import AddInsurance from "../addPages/addInsurance";
import AddMedicine from "../addPages/addMedicine";
import AddVaccine from "../addPages/addVaccine";
import AddEmergencyContact from "../addPages/addEmergencyContact";
import {
	getAllergen,
	getAllergens,
	getDoctors,
	getEmergencyContacts,
	getImmunizations,
	getLastVisits,
	getMedicalHistory,
	getMedicalInsurances,
	getMedicines, getPatientVisits
} from "../api";
import Page from "../common/page";
import AddLastVisits from "../addPages/addLastVisits";
import "../styles/dashboardStyles.css";
import Tile from "../tile/tile";

export interface DashboardProps {
	patientId: string;
	isViewRecord?: boolean;
	doctorId?: string;
}

const Dashboard: React.FunctionComponent<DashboardProps> = (props) => {
	console.log("is viewrecord addable?", props.doctorId === undefined && props.isViewRecord);
	const getFormattedAllergens = async (patientId: string) => {
		const allergens = await getAllergens(patientId);
		console.log(allergens);
		const lengthToDisplay = allergens.length > 3 ? 3 : allergens.length;
		const formattedAllergens = [];
		for (let i = lengthToDisplay - 1; i >= 0; i--) {
			const allergy = allergens[i];
			formattedAllergens.push(
				`${allergy.allergyType} - ${allergy.allergens} - ${allergy.symptoms}`
			);
		}
		if (lengthToDisplay < allergens.length) {
			formattedAllergens.push("(Click for more.)");
		}
		return {allergens: formattedAllergens};
	};

	const getFormattedMedicines = async (patientId: string) => {
		const medicines = await getMedicines(patientId);
		console.log(medicines);
		const lengthToDisplay = medicines.length > 3 ? 3 : medicines.length;
		const formattedMedicines = [];
		for (let i = lengthToDisplay - 1; i >= 0; i--) {
			const medicine = medicines[i];
			formattedMedicines.push(
				`${medicine.brandName} -  ${medicine.frequency}`
			);
		}
		if (lengthToDisplay < medicines.length) {
			formattedMedicines.push("(Click for more.)");
		}
		return {medicines: formattedMedicines};
	};
	const getFormattedVisits = async (patientId: string) => {
		const visits: PatientVisitModel[] = await getPatientVisits(patientId);
		const lengthToDisplay = visits.length > 3 ? 3 : visits.length;
		const formattedVisits = [];
		for (let i = lengthToDisplay - 1; i >= 0; i--) {
			const visit = visits[i];
			formattedVisits.push(
				`${visit.doctor.doctorName} (${new Date(visit.visitDateTime).toLocaleDateString()})}`
			);
		}
		if (lengthToDisplay < visits.length) {
			formattedVisits.push("(Click for more.)");
		}
		return {visits: formattedVisits};
	};

	const getFormattedImmunizations = async (patientId: string) => {
		const immunizations = await getImmunizations(patientId);
		const lengthToDisplay = immunizations.length > 3 ? 3 : immunizations.length;
		const formattedVaccines = [];
		for (let i = lengthToDisplay - 1; i >= 0; i--) {
			const vaccine = immunizations[i];
			const vaccineDate = new Date(vaccine.vaccineDate).toDateString();
			formattedVaccines.push(
				`${vaccine.vaccineName} - ${vaccineDate}`
			);
		}
		if (lengthToDisplay < immunizations.length) {
			formattedVaccines.push("(Click for more.)");
		}
		return {immunizations: formattedVaccines};
	};


	const getFormattedMedicalInsurances = async (patientId: string) => {
		const medicalInsurances = await getMedicalInsurances(patientId);
		const lengthToDisplay = medicalInsurances.length > 3 ? 3 : medicalInsurances.length;
		const formattedMedicalInsurances = [];
		for (let i = lengthToDisplay - 1; i >= 0; i--) {
			const insurance = medicalInsurances[i];
			formattedMedicalInsurances.push(
				`${insurance.insuranceCompany} - Rs${insurance.sumInsured}`
			);
		}
		if (lengthToDisplay < medicalInsurances.length) {
			formattedMedicalInsurances.push("(Click for more.)");
		}
		return {medicalInsurances: formattedMedicalInsurances};
	};

	const getFormattedEmergencyContacts = async (patientId: string) => {
		const emergencyContacts = await getEmergencyContacts(patientId);
		console.log(emergencyContacts);
		const lengthToDisplay = emergencyContacts.length > 3 ? 3 : emergencyContacts.length;
		const formattedContacts = [];
		for (let i = lengthToDisplay - 1; i >= 0; i--) {
			const contact = emergencyContacts[i];
			formattedContacts.push(
				`${contact.emergencyPatient.patientName}, Mob- ${contact.emergencyPatient.mobile}`
			);
		}

		if (lengthToDisplay < emergencyContacts.length) {
			formattedContacts.push("(Click for more.)");
		}
		console.log(formattedContacts);
		return {emergencyContacts: formattedContacts};
	};
	const responsiveClasses = "col-12 col-sm-6 col-md-4";

	function renderDashBoardContent() {
		return <div className="container-fluid">
			<div className="row tileRow">
				<div className={responsiveClasses}>
					<Tile
						label={"Allergens"}
						onExpand={() => {
						}}
						propertyName={"allergens"}
						requestFunction={() => getFormattedAllergens(props.patientId)}
						navigateTo={"/allergens"}
						addEntityContent={getAddAllergenNode}
						key="allergens"
						isAddNotAllowed={props.isViewRecord}
					/>
				</div>
				<div className={responsiveClasses}>
					<Tile
						label={"Medicines"}
						onExpand={() => {
						}}
						propertyName={"medicines"}
						requestFunction={() => getFormattedMedicines(props.patientId)}
						navigateTo={"/medicines"}
						addEntityContent={getAddMedicineNode}
						key="medicines"
						isAddNotAllowed={props.isViewRecord}
					/>
				</div>
				<div className={responsiveClasses}>
					<Tile
						label={"Doctors"}
						onExpand={() => {
						}}
						propertyName={"doctors"}
						requestFunction={() => getDoctors()}
						navigateTo={"/doctors"}
						key="doctors"
						isAddNotAllowed={props.isViewRecord}
					/>
				</div>
				<div className={responsiveClasses}>
					<Tile
						label={"Immunizations"}
						onExpand={() => {
						}}
						propertyName={"immunizations"}
						requestFunction={() => getFormattedImmunizations(props.patientId)}
						navigateTo={"/immunizations"}
						key="immunizations"
						addEntityContent={getAddVaccineNode}
						isAddNotAllowed={props.isViewRecord}
					/>
				</div>
				<div className={responsiveClasses}>
					<Tile
						label={"Medical Insurances"}
						onExpand={() => {
						}}
						propertyName={"medicalInsurances"}
						requestFunction={() => getFormattedMedicalInsurances(props.patientId)}
						navigateTo={"/insurances"}
						key="medicalInsurances"
						addEntityContent={getMedicalInsuranceNode}
						isAddNotAllowed={props.isViewRecord}
					/>
				</div>
				<div className={responsiveClasses}>
					<Tile
						label={"Last Visits"}
						onExpand={() => {
						}}
						propertyName={"visits"}
						requestFunction={() => getFormattedVisits(props.patientId)}
						navigateTo={"/visits"}
						addEntityContent={getAddLastVisitsNode}
						key="lastVisits"
						isAddNotAllowed={props.doctorId === undefined && props.isViewRecord}
					/>
				</div>
				<div className={responsiveClasses}>
					<Tile
						label={"Medical History"}
						onExpand={() => {
						}}
						propertyName={"medicalHistory"}
						requestFunction={() => getMedicalHistory()}
						navigateTo={"/history"}
						key="medicalHistory"
						isAddNotAllowed={props.isViewRecord}
					/>
				</div>
				<div className={responsiveClasses}>
					<Tile
						label={"Emergency Contacts"}
						onExpand={() => {
						}}
						propertyName={"emergencyContacts"}
						requestFunction={() => getFormattedEmergencyContacts(props.patientId)}
						navigateTo={"/contacts"}
						addEntityContent={getAddEmergencyContactNode}
						key="emergencyContacts"
						isAddNotAllowed={props.isViewRecord}
					/>
				</div>
			</div>
		</div>;
	}

	return (
		<React.Fragment>
			{props.isViewRecord ? renderDashBoardContent() :
			 <Page id={props.patientId} title="Dashboard">
				 {renderDashBoardContent()}
			 </Page>
			}
		</React.Fragment>
	);

	function getAddAllergenNode(showModal: boolean, setModal: (x: boolean) => void): React.ReactNode {
		return (
			<AddAllergen patientId={props.patientId} showModal={showModal} setModal={setModal}/>
		);
	}

	function getAddMedicineNode(showModal: boolean, setModal: (x: boolean) => void): React.ReactNode {
		return (
			<AddMedicine patientId={props.patientId} showModal={showModal} setModal={setModal}/>
		);
	}

	function getAddVaccineNode(showModal: boolean, setModal: (x: boolean) => void): React.ReactNode {
		return (
			<AddVaccine patientId={props.patientId} showModal={showModal} setModal={setModal}/>
		);
	}

	function getMedicalInsuranceNode(showModal: boolean, setModal: (x: boolean) => void): React.ReactNode {
		return (
			<AddInsurance patientId={props.patientId} showModal={showModal} setModal={setModal}/>
		);
	}

	function getAddEmergencyContactNode(showModal: boolean, setModal: (x: boolean) => void): React.ReactNode {
		return (
			<AddEmergencyContact patientId={props.patientId} showModal={showModal} setModal={setModal}/>
		);
	}

	function getAddLastVisitsNode(showModal: boolean, setModal: (x: boolean) => void): React.ReactNode {
		return (
			<AddLastVisits doctorId={props.doctorId} patientId={props.patientId} showModal={showModal} setModal={setModal}/>
		);
	}
};


export default Dashboard;
