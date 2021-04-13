import * as React from "react";
import {useEffect, useState} from "react";

import DatePicker from "react-datepicker";
import ReactModal from "react-modal";
import Select, {OptionTypeBase} from "react-select";
import {
	DoctorModel,
	HealthCareProviderModel,
	Medicine,
	Patient,
	PatientMedicineModel,
	PatientVisitModel
} from "../_gen/entity";
import {getDoctorDetails, getHealthcareProviders, getPatientDetails, savePatientVisits} from "../api";
import MedicineField from "./medicineField";


export interface AddLastVisitsProps {
	patientId: string;
	showModal: boolean;
	setModal: (showModal: boolean) => void;
	doctorId?: string;
}

const AddLastVisits: React.FunctionComponent<AddLastVisitsProps> = ({patientId, doctorId, showModal, setModal}) => {
	// obtain master data:

	const [hcps, setHcps] = useState<HealthCareProviderModel[]>([] as HealthCareProviderModel[]);

	useEffect(
		() => {
			const getAndSetHcps = async () => {
				const result = await getHealthcareProviders();
				setHcps(result);
			};
			getAndSetHcps();
		}, []
	);

	useEffect(
		() => {
			const getPatient = async () => {
				const patient = await getPatientDetails(patientId);
				setCurrentVisit(
					{
						...currentVisit,
						patient: patient
					}
				);
			};
			getPatient();
		}, [patientId]
	);

	useEffect(
		() => {
			const getDoctor = async () => {
				if (doctorId !== undefined) {
					const doctor = await getDoctorDetails(doctorId);
					setCurrentVisit({
						                ...currentVisit,
						                doctor: doctor
					                });
				}
			};
			getDoctor();
		}, [doctorId]
	);

	const initialPatientVisitState: PatientVisitModel = {
		patient: {} as Patient,
		doctor: {} as DoctorModel,
		healthCareProvider: {} as HealthCareProviderModel,
		diagnoseNotes: "",
		additionalTests: "",
		surgeryNotes: "",
		medicines: [] as PatientMedicineModel[],
		visitDateTime: undefined,
		nextVisitDateTime: undefined
	};

	const [currentVisit, setCurrentVisit] = useState<PatientVisitModel>(initialPatientVisitState);

	const savePatientVisit = async () => {
		await savePatientVisits(currentVisit);
	};

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		await savePatientVisit();
		// closes the modal after save
		safeExit();
	};

	const safeExit = () => {
		setModal(false);
		setCurrentVisit({
			                ...initialPatientVisitState,
			patient: currentVisit.patient,
			doctor: doctorId !== undefined ? currentVisit.doctor: {} as DoctorModel
		});
	};

	const handleTextChange = (e: { target: { name: string, value: string }; }) => {
		const {target} = e;
		const {name, value} = target;
		setCurrentVisit(
			{
				...currentVisit,
				[name]: value
			}
		);
	};

	function getHealthcareProviderById(id: number) {
		const hcp = hcps.find(
			hcpTemp => hcpTemp.hcpId === id
		);
		return hcp || {} as HealthCareProviderModel;
	}

	function getHealthcareProviderOptions() {
		const docHcps = doctorId === undefined ? hcps : currentVisit.doctor.healthCareProviders;
		return docHcps ? docHcps.map(
			(healthCareProvider: HealthCareProviderModel) => (
				{
					label: healthCareProvider.hcpName,
					value: healthCareProvider.hcpId as number,
				}
			)
		): null;
	}

	function handleHealthcareProviderChange(selectedOption: any, action: any) {
		setCurrentVisit(
			{
				...currentVisit,
				healthCareProvider: getHealthcareProviderById(Number(selectedOption.value))
			}
		);
	}

	const getDoctorById = (doctorId: number) => {
		return currentVisit.healthCareProvider.doctors.find(
			doctor => doctor.doctorId === doctorId
		) || {} as DoctorModel;
	};

	const getDoctors = () => {
		const {healthCareProvider} = currentVisit;
		return healthCareProvider && healthCareProvider.doctors ? healthCareProvider.doctors.map(
			(doctor: DoctorModel) => ({
				value: doctor.doctorId,
				label: doctor.doctorName
			})
		) : [];
	};

	const handleDoctorChange = (selectedOption: any) => {
		setCurrentVisit(
			{
				...currentVisit,
				doctor: getDoctorById(Number(selectedOption.value))
			}
		);
	};

	const getPropertyFromCurrentVisit = (propertyName: keyof PatientVisitModel, defaultValue: string | Date) => {
		const value = currentVisit[propertyName];
		return value ? value : defaultValue;
	};
	const getVisitDate = () => {
		return getPropertyFromCurrentVisit("visitDateTime", "");
	};

	const getNextVisitDate = () => {
		return getPropertyFromCurrentVisit("nextVisitDateTime", "");
	};

	const handleDateChange = (date: Date | [Date, Date] | null, property: keyof PatientVisitModel) => {
		setCurrentVisit(
			{
				...currentVisit,
				[property]: date
			}
		);
	};

	const renderMedicines = () => {

		const addMedicine = (medicine: PatientMedicineModel) => {
			console.log("medicines");
			const {medicines} = currentVisit;
			medicines.push(medicine);
			setCurrentVisit(
				{
					...currentVisit,
					medicines
				}
			);
		};

		return (<MedicineField patientId={patientId} medicines={currentVisit.medicines} onSubmit={addMedicine}/>);
	};

	const renderDateField = (name: keyof PatientVisitModel, label: string, value: Date, placeholderText: string) => {
		return (
			<div className={"row"}>
				<div className={"col-md-3"}>
					<label htmlFor={name} className="text-info">
						{label}
					</label>
				</div>
				<div className={"col-md-9"}>
					<DatePicker
						selected={value}
						showTimeSelect
						dateFormat={"yyyy/MM/dd h:mm aa"}
						onChange={(date) => handleDateChange(date, name)}
						placeholderText={placeholderText}
					/>
				</div>
			</div>
		);
	};

	const renderTextField = (name: string, label: string, onChange: React.ChangeEventHandler<HTMLInputElement>) => {
		return (
			<React.Fragment>
				<div className={"row"}>
					<div className={"col-md-3"}>
						<label htmlFor={name} className="text-info">
							{label}
						</label>
					</div>
					<div className={"col-md-9"}>
						<input
							type="text"
							name={name}
							id={name}
							className="form-control"
							value={currentVisit[name]}
							onChange={handleTextChange}/>
					</div>
				</div>

			</React.Fragment>
		);
	};

	const renderSelectField = (
		name: keyof PatientVisitModel, options: { label: string; value: number }[], label: string, onChange: any,
		placeHolder: string) => {
		return (
			<React.Fragment>
				<div className={"row"}>
					<div className={"col-md-3"}>
						<label htmlFor={name} className="text-info">
							{label}
						</label>
					</div>
					<div className={"col-md-9"}>
						<Select
							options={options}
							onChange={onChange}
							placeholder={placeHolder}
						/>
					</div>
				</div>
			</React.Fragment>
		);
	};

	function renderReadonlyDoctor() {
		return (
			<div className={"row"}>
				<div className={"col-md-3"}>
					Doctor
				</div>
				<div className={"col-md-9"}>
					{currentVisit.doctor.doctorName}
				</div>
			</div>
		)
	}

	return (
		<React.Fragment>
			<ReactModal
				isOpen={showModal}
				ariaHideApp={false}
			>
				<div className="container">
					<div className={"bg-light"}>
						<div className="row">
							<div className="col-md-11">
								<h3 className="text-center text-info">Add a Visit</h3>
							</div>
							<div className="col-md-1 col-md-offset-1">
								<button onClick={() => safeExit()}>
									x
								</button>

							</div>
						</div>
					</div>
					<hr/>
					<div className="container">
						<div
							className="row justify-content-center align-items-center">
							<div className="col-md-12">
								<div className="col-md-12">
									<form className="form" onSubmit={handleSubmit}>
										<div className="form-group">
											{renderSelectField(
												"healthCareProvider", getHealthcareProviderOptions(), "Health Care Provider",
												handleHealthcareProviderChange, "Select Healthcare Provider")}
										</div>
										<div className="form-group">
											{doctorId === undefined ? renderSelectField("doctor", getDoctors(), "Doctor", handleDoctorChange, "Select Doctor") : renderReadonlyDoctor()}
										</div>
										<div className="form-group">
											{renderDateField("visitDateTime", "Visited On", getVisitDate(), "Select Visit Date")}
										</div>
										<div className="form-group">
											{renderDateField("nextVisitDateTime", "Next Visit On", getNextVisitDate(), "Select Next Visit")}
										</div>
										<div className="form-group">
											{renderTextField("diagnoseNotes", "Diagnose Notes", handleTextChange)}
										</div>
										<div className="form-group">
											{renderTextField("surgeryNotes", "Surgery Notes", handleTextChange)}
										</div>
										<div className="form-group">
											{renderTextField("additionalTests", "Additional Tests", handleTextChange)}
										</div>
										<hr/>
										<div className="form-group">
											{renderMedicines()}
										</div>
										<div className="form-group d-grid">
											<input
												type="submit"
												name="submit"
												placeholder={"Select Symptoms"}
												className="btn btn-info btn-md"
												value="Add Visit"/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>


				</div>

			</ReactModal>
		</React.Fragment>
	);
};

export default AddLastVisits;
