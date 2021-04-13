import {useState} from "react";
import * as React from "react";
import {Route, Switch} from "react-router";
import {PatientVisitModel} from "../_gen/entity";
import AddAllergen from "../addPages/addAllergen";
import AddInsurance from "../addPages/addInsurance";
import AddLastVisits from "../addPages/addLastVisits";
import AddMedicine from "../addPages/addMedicine";
import AddVaccine from "../addPages/addVaccine";
import {
	getAllergens,
	getDoctors,
	getEmergencyContacts,
	getImmunizations,
	getMedicalHistory,
	getMedicalInsurances,
	getMedicines,
	getPatientVisits
} from "../api";
import Page from "../common/page";
import "../styles/dashboardStyles.css";
import Allergens from "../details/allergens";
import Doctors from "../details/doctors";
import EmergencyContacts from "../details/emergencyContacts";
import Immunizations from "../details/Immunizations";
import LastVisits from "../details/lastVisits";
import MedicalHistory from "../details/medicalHistory";
import MedicalInsurances from "../details/medicalInsurances";
import Medicines from "../details/medicines";
import Tile from "../tile/tile";
import AddEmergencyContact from "../addPages/addEmergencyContact";

export interface DashboardProps {
	patientId: string;
	isViewRecord: boolean;
	doctorId?: string;
}

const Dashboard: React.FunctionComponent<DashboardProps> = (props) => {
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

	const getFormattedDoctors = async (patientId: string) => {
		const doctors = await getDoctors(patientId);
		const lengthToDisplay = doctors.length > 3 ? 3 : doctors.length;
		const formattedDoctors = [];
		for (let i = lengthToDisplay - 1; i >= 0; i--) {
			const doctor = doctors[i];
			formattedDoctors.push(
				`${doctor.doctorName}`
			);
		}
		if (lengthToDisplay < doctors.length) {
			formattedDoctors.push("(Click for more.)");
		}
		return {doctors: formattedDoctors};
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

	const getFormattedMedicalHistory = async (patientId: string) => {
		const medicalHistories = await getMedicalHistory(patientId);
		const lengthToDisplay = medicalHistories.length;
		const formattedMedicalHistories = [];
		if (lengthToDisplay >= 1) {
			const medicalHistory = medicalHistories[lengthToDisplay - 1];
			formattedMedicalHistories.push(
				<div>
					<ul style={{listStyleType: "none"}}>
						<div className={"row"}><strong>{new Date(medicalHistory.visitedDate).toDateString()}</strong></div>
						<li>Diagnose Notes- {(medicalHistory.diagnoseNotes)}</li>
						<li>Surgical Notes - {medicalHistory.surgicalNotes}</li>
					</ul>
				</div>
			);
		}
		if (medicalHistories.length > 1) {
			formattedMedicalHistories.push("(Click for more.)");
		}
		return {medicalHistory: formattedMedicalHistories};
	};
	const getFormattedEmergencyContacts = async (patientId: string) => {
		const emergencyContacts = await getEmergencyContacts(patientId);
		console.log(emergencyContacts);
		const lengthToDisplay = emergencyContacts.length > 3 ? 3 : emergencyContacts.length;
		const formattedContacts = [];
		for (let i = lengthToDisplay - 1; i >= 0; i--) {
			const contact = emergencyContacts[i];
			if(contact.emergencyPatient != null) {
				formattedContacts.push(
					`${contact.emergencyPatient.patientName}, Mob- ${contact.emergencyPatient.mobile}`
				)
			}
		}

		if (lengthToDisplay < emergencyContacts.length) {
			formattedContacts.push("(Click for more.)");
		}
		console.log(formattedContacts);
		return {emergencyContacts: formattedContacts};
	};
	const responsiveClasses = "col-12 col-sm-6 col-md-4";
	const viewRecordUrl = props.isViewRecord ? "/viewRecord": "";
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
						navigateTo={props.isViewRecord? "/view/allergens":"/dashboard/allergens"}
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
						navigateTo={props.isViewRecord? "/view/medicines":"/dashboard/medicines"}
						addEntityContent={getAddMedicineNode}
						key="medicines"
						isAddNotAllowed={props.isViewRecord}
						isUpdateRequired={isUpdateRequired}
					/>
				</div>
				<div className={responsiveClasses}>
					<Tile
						label={"Doctors"}
						onExpand={() => {
						}}
						propertyName={"doctors"}
						requestFunction={() => getFormattedDoctors(props.patientId)}
						navigateTo={props.isViewRecord? "/view/doctors":"/dashboard/doctors"}
						key="doctors"
						isAddNotAllowed={props.isViewRecord}
						isUpdateRequired={isUpdateRequired}
					/>
				</div>
				<div className={responsiveClasses}>
					<Tile
						label={"Immunizations"}
						onExpand={() => {
						}}
						propertyName={"immunizations"}
						requestFunction={() => getFormattedImmunizations(props.patientId)}
						navigateTo={props.isViewRecord? "/view/immunizations":"/dashboard/immunizations"}
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
						navigateTo={props.isViewRecord? "/view/insurances":"/dashboard/insurances"}
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
						navigateTo={props.isViewRecord? "/view/visits":"/dashboard/visits"}
						addEntityContent={getAddLastVisitsNode}
						key="lastVisits"
						isAddNotAllowed={props.doctorId === undefined && props.isViewRecord}
						setIsUpdateRequired={setIsUpdateRequired}
					/>
				</div>
				<div className={responsiveClasses}>
					<Tile
						label={"Medical History"}
						onExpand={() => {
						}}
						propertyName={"medicalHistory"}
						requestFunction={() => getFormattedMedicalHistory(props.patientId)}
						navigateTo={props.isViewRecord? "/view/history":"/dashboard/history"}
						key="medicalHistory"
						isAddNotAllowed={props.isViewRecord}
						isUpdateRequired={isUpdateRequired}
					/>
				</div>
				<div className={responsiveClasses}>
					<Tile
						label={"Emergency Contacts"}
						onExpand={() => {
						}}
						propertyName={"emergencyContacts"}
						requestFunction={() => getFormattedEmergencyContacts(props.patientId)}
						navigateTo={props.isViewRecord? "/view/contacts":"/dashboard/contacts"}
						addEntityContent={getAddEmergencyContactNode}
						key="emergencyContacts"
						isAddNotAllowed={props.isViewRecord}
					/>
				</div>
			</div>
		</div>;
	}

	const [isUpdateRequired, setIsUpdateRequired] = useState(false);
	return (
		<Switch>
			<Route exact path="/dashboard" render={ () =>
				 <Page patientId={props.patientId} title="Dashboard">
					 {renderDashBoardContent()}
				 </Page>
				}/>
			<Route exact path="/view" render={()=>
				<React.Fragment>
					{renderDashBoardContent()}
				</React.Fragment>
				}/>


			<Route path="/dashboard/allergens"> <Allergens othersView={false} patientId={props.patientId} /></Route>
			<Route path="/dashboard/medicines"> <Medicines othersView={false} patientId={props.patientId} /></Route>
			<Route path="/dashboard/doctors"> <Doctors othersView={false} patientId={props.patientId} /></Route>
			<Route path="/dashboard/immunizations"> <Immunizations othersView={false} patientId={props.patientId} /></Route>
			<Route path="/dashboard/insurances"> <MedicalInsurances othersView={false} patientId={props.patientId} /></Route>
			<Route path="/dashboard/visits"> <LastVisits othersView={false} patientId={props.patientId} /></Route>
			<Route path="/dashboard/history"> <MedicalHistory othersView={false} patientId={props.patientId}/></Route>
			<Route path="/dashboard/contacts"> <EmergencyContacts othersView={false} patientId={props.patientId} /></Route>


			<Route path="/view/allergens"> <Allergens othersView={true} patientId={props.patientId} /></Route>
			<Route path="/view/medicines"> <Medicines othersView={true} patientId={props.patientId} /></Route>
			<Route path="/view/doctors"> <Doctors othersView={true} patientId={props.patientId} /></Route>
			<Route path="/view/immunizations"> <Immunizations othersView={true} patientId={props.patientId} /></Route>
			<Route path="/view/insurances"> <MedicalInsurances othersView={true} patientId={props.patientId} /></Route>
			<Route path="/view/visits"> <LastVisits othersView={true} patientId={props.patientId} /></Route>
			<Route path="/view/history"> <MedicalHistory othersView={true} patientId={props.patientId}/></Route>
			<Route path="/view/contacts"> <EmergencyContacts othersView={true} patientId={props.patientId} /></Route>
		</Switch>

		// <React.Fragment>
		// 	{props.isViewRecord ? renderDashBoardContent() :
		// 	 <Page patientId={props.patientId} title="Dashboard">
		// 		 {renderDashBoardContent()}
		// 	 </Page>
		// 	}
		// </React.Fragment>
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

	const setModalForLastVisit = (b: boolean, cb: (b: boolean)=>void) => {
		cb(b);
		setIsUpdateRequired(!isUpdateRequired);
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
			<AddLastVisits doctorId={props.doctorId} patientId={props.patientId} showModal={showModal} setModal={(b) => {
				setModal(b);
				setIsUpdateRequired(!isUpdateRequired);
			}}/>
		);
	}
};


export default Dashboard;
