import * as React from "react";
import AddAllergen from "../addPages/addAllergen";
import AddInsurance from "../addPages/addInsurance";
import AddMedicine from "../addPages/addMedicine";
import AddVaccine from "../addPages/addVaccine";
import {
	getAllergens,
	getDoctors,
	getEmergencyContacts,
	getImmunizations,
	getLastVisits,
	getMedicalHistory,
	getMedicalInsurances,
	getMedicines
} from "../api";
import Page from "../common/page";
import "../styles/dashboardStyles.css";
import Tile from "../tile/tile";

export interface DashboardProps {
	patientId: string;
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
	const responsiveClasses = "col-12 col-sm-6 col-md-4";
	return (
		<React.Fragment>

			<Page patientId={props.patientId} title="Dashboard">
				<div className="container-fluid">
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
								addEntityContent={getAddVaccineNode}
								key="immunizations"
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
								addEntityContent={getMedicalInsuranceNode}
								key="medicalInsurances"
							/>
						</div>
						<div className={responsiveClasses}>
							<Tile
								label={"Last Visits"}
								onExpand={() => {
								}}
								propertyName={"lastVisits"}
								requestFunction={() => getLastVisits()}
								navigateTo={"/visits"}
								key="lastVisits"
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
							/>
						</div>
						<div className={responsiveClasses}>
							<Tile
								label={"Emergency Contacts"}
								onExpand={() => {
								}}
								propertyName={"emergencyContacts"}
								requestFunction={() => getEmergencyContacts()}
								navigateTo={"/contacts"}
								key="emergencyContacts"
							/>
						</div>
					</div>
				</div>
			</Page>
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
};


export default Dashboard;


