import {useState} from "react";
import * as React from "react";
import DatePicker from "react-datepicker";
import {getPatientDetails} from "../api";
import Page from "../common/page";
import IPatient from "../entities/IPatient";
import {useFormFields} from "../libs/useFormFields";

export interface profileProps {
	patientId: string;
}

const Profile: React.FunctionComponent<profileProps> = (props) => {

	const {patientId} = props;

	let initialFieldValues = {
		email: "",
		password: "",
		confirmPassword: "",
		gender: "",
		address: "",
		zipCode: "",
		patientName: "",
		mobileNumber: "",
		state: "",
		dateOfBirth: "",
		city: "",
	};

	let initializeFieldValues = (patient:IPatient) => (initialFieldValues = {
		email: patient.patientEmail,
		password: patient.password,
		confirmPassword: patient.password,
		gender: patient.bloodGroup,
		address: patient.patientAddress,
		zipCode: patient.patientAddress,
		patientName: patient.patientName,
		mobileNumber: patient.mobile,
		state: patient.patientAddress,
		dateOfBirth: patient.birthDate,
		city: patient.patientAddress,
	});

	const [fields, handleFieldChange] = useFormFields({
		                                                  email: "",
		                                                  password: "",
		                                                  confirmPassword: "",
		                                                  gender: "",
		                                                  address: "",
		                                                  zipCode: "",
		                                                  patientName: "",
		                                                  mobileNumber: "",
		                                                  state: "",
		                                                  dateOfBirth: "",
		                                                  city: "",
	                                                  });

	React.useEffect(
		() => {
			if (patientId !== undefined && patientId !== "") {
				getInitialPatientDetail();

			}
		}, []
	)

	const getInitialPatientDetail = async () => {
		 let patient = await getPatientDetails(patientId);
			console.log("Patient Object is",patient);
		initializeFieldValues(patient);
		// return initialFieldValues;

	};

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
		event,
	) => {
		event.preventDefault();
		const {
			patientName,
			email,
			address,
			mobile,
			password,
			bloodGroup,
			dateOfBirth,
		} = fields;
	};

	const DOB = () => {
		const [startDate, setStartDate] = useState(new Date());
		return (
			<DatePicker
				selected={startDate}
				onChange={(date :Date) => setStartDate(date)}
				showTimeInput ={false}
				/>
		);
	};

		function validateForm() {
			return (
				fields.email.length > 0 &&
				fields.password.length > 0 &&
				fields.password === fields.confirmPassword
			);
		}


	return (
		<Page id={props.patientId} title="Profile">
				<div className="container" id="wrap">
					<div className="row justify-content-center">
						<div className="col-md-6 col-md-offset-3">
							<form
								onSubmit={handleSubmit}
								accept-charset="utf-8"
								className="form">
								<legend>Your Information</legend>
								<input
									type="text"
									name="patientName"
									value={fields.patientName}
									autoFocus
									className="form-control input-lg"
									placeholder="Patient Name"
									onChange={handleFieldChange}
								/>

								<div className="form-control input-lg">
									<label htmlFor="Date Of Birth" className="text-secondary">
										Date of Birth:&nbsp;&nbsp;&nbsp;&nbsp; <DOB />
									</label>
								</div>

								<div className="form-control input-lg">
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="inlineRadioOptions"
											onChange={handleFieldChange}
											id="inlineRadio1"
											value="male"></input>
										<label className="form-check-label">Male</label>
									</div>

									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="radio"
											name="inlineRadioOptions"
											onChange={handleFieldChange}
											id="inlineRadio2"
											value="female"></input>
										<label className="form-check-label">Female</label>
									</div>
								</div>

								<input
									type="text"
									name="mobileNumber"
									value={fields.mobileNumber}
									className="form-control input-lg"
									placeholder="Mobile Number"
									onChange={handleFieldChange}
								/>
								<input
									type="text"
									name="address"
									value={fields.address}
									className="form-control input-lg"
									placeholder="Address"
									onChange={handleFieldChange}
								/>
								<input
									type="text"
									name="city"
									value={fields.city}
									className="form-control input-lg"
									placeholder="City"
									onChange={handleFieldChange}
								/>
								<input
									type="text"
									name="zipCode"
									value={fields.zipCode}
									className="form-control input-lg"
									placeholder="Zip Code"
									onChange={handleFieldChange}
								/>
								<input
									type="text"
									name="state"
									value={fields.state}
									className="form-control input-lg"
									placeholder="State"
									onChange={handleFieldChange}
								/>
								<input
									type="email"
									name="email"
									value={fields.email}
									className="form-control input-lg"
									placeholder="Your Email"
									onChange={handleFieldChange}
								/>
								<input
									type="password"
									name="password"
									value={fields.password}
									className="form-control input-lg"
									placeholder="Password"
									onChange={handleFieldChange}
								/>
								<input
									type="password"
									name="confirmPassword"
									value={fields.confirmPassword}
									className="form-control input-lg"
									placeholder="Confirm Password"
									onChange={handleFieldChange}
								/>

								<br />
								<button
									className="btn btn-lg btn-primary btn-block signup-btn"
									type="submit"
									// disabled={!validateForm()}>
									disabled={false}>
									Update Profile
								</button>
							</form>
						</div>
					</div>
				</div>
		</Page>
	);

}

export default Profile;
