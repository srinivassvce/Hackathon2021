import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {registerUser} from "../api";
import { useFormFields } from "../libs/useFormFields";
import { useHistory } from "react-router";

// export interface ISignup {
// 	email: string;
// 	password: string;
// 	patientName?: string;
// 	mobileNumber?: string;
// 	confirmPassword: string;
// 	address?: string;
// 	gender?: string;
// 	zipCode?: string;
// 	state?: String;
// 	dateOfBirth?: string;
// 	city?: string;
// }
export default function Register() {
	const history = useHistory();
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
	console.log("Fields", fields);
	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
		event,
	) => {
		event.preventDefault();
		const {patientName, email, address, mobile, password, bloodGroup, dateOfBirth} = fields;
		const birthDateUnformatted = new Date(dateOfBirth);
		const birthDate = birthDateUnformatted.toISOString();
		const patient = {
			patientName,
			patientEmail: email,
			address,
			mobile,
			password,
			bloodGroup,
			birthDate
		}
		const result = await registerUser(patient);
		history.push("/signupsuccessful");
	};
	function validateForm() {
		return (
			fields.email.length > 0 &&
			fields.password.length > 0 &&
			fields.password === fields.confirmPassword
		);
	}

	return (
		<React.Fragment>
			<div id="signup">
				<div className="container" id="wrap">
					<div className="row">
						<div className="col-md-6 col-md-offset-3">
							<form
								onSubmit={handleSubmit}
								accept-charset="utf-8"
								className="form">
								<legend>Patient/Client Information</legend>
								<input
									type="text"
									name="patientName"
									value={fields.patientName}
									autoFocus
									className="form-control input-lg"
									placeholder="Patient Name"
									onChange={handleFieldChange}
								/>
								<input
									type="text"
									name="dateOfBirth"
									value={fields.dateOfBirth}
									className="form-control input-lg"
									placeholder="Date Of Birth (mm/dd/yyyy)"
									onChange={handleFieldChange}
								/>
								<input
									type="gender"
									name="gender"
									value={fields.gender}
									className="form-control input-lg"
									placeholder="Gender"
									onChange={handleFieldChange}
								/>
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
								<span className="help-block">
									By clicking Create my account, you agree to our Terms and that
									you have read our Data Use Policy, including our Cookie Use.
								</span>
								<button
									className="btn btn-lg btn-primary btn-block signup-btn"
									type="submit"
									disabled={!validateForm()}>
									Create my account
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
