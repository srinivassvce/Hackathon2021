import {useState} from "react";
import * as React from "react";
import {Allergy, PatientVisitModel} from "../_gen/entity";
import ReactModal from "react-modal";
import Select, {OptionTypeBase} from "react-select";
import {getPatientDetails, getPatientVisits, saveAllergenDetails, savePatientVisits} from "../api";

export interface AddLastVisitsProps {
	patientId: string;
	showModal: boolean;
	setModal: (showModal: boolean) => void;
}

const AddLastVisits: React.FunctionComponent<AddLastVisitsProps> = ({patientId, showModal, setModal}) => {
	const [visits, setVisits] = React.useState<Allergy[]>([]);

	const initialPatientVisitState: PatientVisitModel = {} as PatientVisitModel;

	React.useEffect(() => {
		getAndSetLastVisits();
	}, []);

	const getAndSetLastVisits = async () => {
		const visits = await getPatientVisits(patientId);
		setVisits(visits);

	};
	const [currentVisit, setCurrentVisit] = useState<PatientVisitModel>(initialPatientVisitState);

	const savePatientVisit = async () => {
		await savePatientVisits(currentVisit);
	};

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		await savePatientVisit();
		// closes the modal after save
		setCurrentVisit(initialPatientVisitState);
		setModal(false);
	};

	const safeExit = () => {
		setModal(false);
		setCurrentVisit(initialPatientVisitState);
	}

	const handleTextChange = (e: { target: { name: string, value: string }; }) => {
		const {target} = e;
		const {name, value} = target;
		setCurrentVisit(
			{
				...currentVisit,
				[name]: value
			}
		)
	}

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
							<div className="col-md-6">
								<div className="col-md-12">
									<form className="form" onSubmit={handleSubmit}>
										<div className="form-group">
											<label htmlFor="symptoms" className="text-info">
												Surgery Notes
											</label>
											<input
												type="text"
												name="surgeryNotes"
												id="surgeryNotes"
												className="form-control"
												value={currentVisit.surgeryNotes}
												onChange={handleTextChange}/>
										</div>
										<div className="form-group d-grid">
											<input
												type="submit"
												name="submit"
												placeholder={"Select Symptoms"}
												className="btn btn-info btn-md"
												value="Add"/>
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
