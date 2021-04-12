import * as React from "react";
import ReactModal from "react-modal";
import Select, {OptionTypeBase} from "react-select";
import {MedicalInsurance} from "../_gen/entity";
import {getAllMedicalInsurances, saveInsuranceDetails} from "../api";

export interface AddInsuranceProps {
	patientId: string;
	showModal: boolean;
	setModal: (showModal: boolean) => void;
}

const AddInsurance: React.FunctionComponent<AddInsuranceProps> = ({patientId, showModal, setModal}) => {
	const [medicalInsurances, setMedicalInsurances] = React.useState<MedicalInsurance[]>([]);
	React.useEffect(() => {
		getAndSetMedicalInsurances();
	}, []);

	const getAndSetMedicalInsurances = async () => {
		const medicalInsurances = await getAllMedicalInsurances();
		setMedicalInsurances(medicalInsurances);

	};
	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		await saveInsurance();
		// closes the modal after save
		setMedicalInsurance(
			{
				insuranceId: -1,
				insuranceCompany: "",
				tpa: "",
				sumInsured: ""
			}
		);
		setModal(false);
	};
	const saveInsurance = async () => {
		await saveInsuranceDetails(medicalInsurance, patientId);
	};

	const getCompanyNames = () => {

		const companyNamesSet = new Set();
		medicalInsurances.forEach(
			medicalInsurance => companyNamesSet.add(medicalInsurance.insuranceCompany)
		);
		const values: OptionTypeBase[] = [];
		companyNamesSet.forEach(
			companyName => values.push({
				                           label: companyName,
				                           value: companyName
			                           })
		);
		return values;
	};

	const handleInsuranceNameChange = (option: any, action: any) => {
		// get all Brand Names for the selected Generic Name.
		const found = medicalInsurances.find(insurance =>
			                                     insurance.insuranceCompany.localeCompare(option.value) === 0
		);
		setMedicalInsurance(
			{
				...medicalInsurance,
				insuranceCompany: option.value,
				insuranceId: found.insuranceId,
				tpa: found.tpa
			}
		);
	};
	const handleChange = (e: { target: { name: string; value: string; }; }) => {
		const {name, value} = e.target;
		const newInsurance = {
			...medicalInsurance,
			[name]: value
		};
		setMedicalInsurance(newInsurance);
	};

	const [medicalInsurance, setMedicalInsurance] = React.useState(
		{
			insuranceId: -1,
			insuranceCompany: "",
			tpa: "",
			sumInsured: ""
		}
	);
	const [disabled, setDisabled] = React.useState(true);

	React.useEffect(
		() => {
			const isDis = medicalInsurance.insuranceId === null || medicalInsurance.insuranceId === undefined;
			setDisabled(isDis);
		}, [medicalInsurance]
	);

	const safeExit = () => {
		setModal(false);
		setMedicalInsurance(
			{
				insuranceId: -1,
				insuranceCompany: "",
				tpa: "",
				sumInsured: ""
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
								<h3 className="text-center text-info">Add Medical Insurance</h3>
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
											<label htmlFor="Insurance Company Name" className="text-info">
												Company Name :
											</label>
											<Select
												options={getCompanyNames()}
												onChange={handleInsuranceNameChange}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="Insurance TPA Name" className="text-info">
												TPA Name :
											</label>
											<br/>
											<label htmlFor="Insurance TPA Name" className="text-secondary">
												{medicalInsurance.tpa}
											</label>
										</div>
										<div className="form-group">
											<label htmlFor="Sum Insured" className="text-info">
												Sum Insured
											</label>
											<input
												type="text"
												name="sumInsured"
												id="sumInsured"
												autoFocus
												className="form-control"
												value={medicalInsurance.sumInsured}
												onChange={handleChange}></input>
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

export default AddInsurance;