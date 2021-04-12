import * as React from "react";
import DatePicker from "react-datepicker";
import ReactModal from "react-modal";
import Select, {OptionTypeBase} from "react-select";
import {Immunization} from "../_gen/entity";
import {getAllImmunizations, saveImmunizationDetails} from "../api";

export interface AddVaccineProps {
	patientId: string;
	showModal: boolean;
	setModal: (showModal: boolean) => void;
}

const AddVaccine: React.FunctionComponent<AddVaccineProps> = ({patientId, showModal, setModal}) => {
	const [immunizations, setImmunizations] = React.useState<Immunization[]>([]);
	React.useEffect(() => {
		getAndSetImmunizations();
	}, []);

	const getAndSetImmunizations = async () => {
		const immunizations = await getAllImmunizations();
		setImmunizations(immunizations);

	};
	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		await saveImmunization();
		// closes the modal after save
		setImmunization(
			{
				vaccineId: -1,
				vaccineName: "",
				vaccineDate: ""
			}
		);
		setModal(false);
	};

	const saveImmunization = async () => {
		await saveImmunizationDetails(immunization, patientId);
	};

	const getImmunizationNames = () => {

		const immunizationNamesSet = new Set();
		immunizations.forEach(
			immunization => immunizationNamesSet.add(immunization.vaccineName)
		);
		const values: OptionTypeBase[] = [];
		immunizationNamesSet.forEach(
			vaccineName => values.push({
				                           label: vaccineName,
				                           value: vaccineName
			                           })
		);
		return values;
	};

	const updateVaccineDate = (date) => {
		setImmunization(
			{
				...immunization,
				vaccineDate: date
			}
		);
	};
	const handleImmunizationNameChange = (option: any, action: any) => {
		const found = immunizations.find(vaccine =>
			                                 vaccine.vaccineName.localeCompare(option.value) === 0
		);
		const immunizationId = found.vaccineId === null ? 1 : found.vaccineId;
		setImmunization(
			{
				...immunization,
				vaccineName: option.value,
				vaccineId: immunizationId,
			}
		);
	};
	const [immunization, setImmunization] = React.useState(
		{
			vaccineId: -1,
			vaccineName: "",
			vaccineDate: ""
		}
	);
	const [disabled, setDisabled] = React.useState(true);

	React.useEffect(
		() => {
			const isDis = immunization.vaccineId === null || immunization.vaccineId === undefined;
			setDisabled(isDis);
		}, [immunization]
	);

	const safeExit = () => {
		setModal(false);
		setImmunization(
			{
				vaccineId: -1,
				vaccineName: "",
				vaccineDate: ""
			}
		);
	};
	return (
		<React.Fragment>
			<ReactModal
				isOpen={showModal}
				ariaHideApp={false}
			>
				<div className="container">
					<div className="jumbotron">
						<div className="row">
							<div className="col-md-11">
								<h3 className="text-center text-info">Add Vaccine</h3>
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
							<div className="col-md-6">
								<div className="col-md-12">
									<form className="form" onSubmit={handleSubmit}>
										<div className="form-group">
											<label htmlFor="vaccine Name" className="text-info">
												Vaccine Name :
											</label>
											<Select
												options={getImmunizationNames()}
												onChange={handleImmunizationNameChange}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="Start Date" className="text-info">
												From Date :
											</label>
											<div>
												<DatePicker
													selected={immunization.vaccineDate}
													placeholderText="mm/dd/yyyy"
													isClearable
													onChange={updateVaccineDate}
												/>
											</div>
										</div>
										<div className="form-group d-grid">
											<input
												type="submit"
												name="submit"
												disabled={disabled}
												className="btn btn-info btn-md"
												value="Add"></input>
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

export default AddVaccine;