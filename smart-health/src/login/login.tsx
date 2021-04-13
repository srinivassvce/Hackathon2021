import React, { useState } from "react";
import "../styles/login.css";
import { useHistory } from "react-router";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { doctorLoginUrl, getUrl } from "../api";
import { loginUrl } from "../api";
import axios from "axios";
import Page from "../common/page";
import SignUpOptional from "./signupOptional";

export interface LoginProps {
	setPatientId: (patientId: number) => void;
	setDoctorId: (doctorId: string) => void;
}

export default function Login(props: LoginProps) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isPatient, setIsPatient] = useState(true);
	const history = useHistory();

	const validateForm = () =>
		email.length > 0 && password.length > 0 ? true : false;

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
		event,
	) => {
		event.preventDefault();
		const failure = "Incorrect Email or Password!";
		const failureDoctor = "Incorrect Doctor's Email or Password!";

		if (isPatient) {
			const resp = axios
				.post(loginUrl(), { email, password })
				.then((c) => {
					props.setPatientId(c.data);
					if (c.data !== failure) {
						history.push("/dashboard");
					} else {
						alert("Invalid User name or Password");
					}
				})
				.catch((err) => console.log(err));
		} else {
			const resp = axios
				.post(doctorLoginUrl(), { email, password })
				.then((c) => {
					console.log(c);
					if (c.data !== failureDoctor) {
						props.setDoctorId(c.data);
						history.push("/view");
					} else {
						alert("Invalid Doctor's name or Password");
					}
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<React.Fragment>
			<Page id={""} title="Welcome to Smart Health">
				<div id="login">
					<div className="container">
						<div
							id="login-row"
							className="row justify-content-center align-items-center">
							<div id="login-column" className="col-md-6">
								<div id="login-box" className="col-md-12">
									<form
										id="login-form"
										className="form"
										onSubmit={handleSubmit}>
										<h3 className="text-center text-info">Sign In</h3>
										<br></br>
										<div className="form-check form-check-inline">
											<input
												className="form-check-input"
												type="radio"
												checked={isPatient}
												name="inlineRadioOptions"
												onChange={(e) => setIsPatient(true)}
												id="inlineRadio1"
												value="Patient"></input>
											<label
												className="form-check-label"
												htmlFor="inlineRadio1">
												Patient
											</label>
										</div>
										<div className="form-check form-check-inline">
											<input
												className="form-check-input"
												checked={!isPatient}
												type="radio"
												name="inlineRadioOptions"
												onChange={(e) => setIsPatient(false)}
												id="inlineRadio2"
												value="Doctor"></input>
											<label
												className="form-check-label"
												htmlFor="inlineRadio2">
												Doctor
											</label>
										</div>
										<div className="form-group">
											<label htmlFor="username" className="text-secondary">
												Email:
											</label>
											<input
												type="text"
												name="username"
												id="username"
												autoFocus
												className="form-control"
												value={email}
												onChange={(e) => setEmail(e.target.value)}></input>
										</div>
										<div className="form-group">
											<label htmlFor="password" className="text-secondary">
												Password:
											</label>
											<input
												type="password"
												name="password"
												id="password"
												value={password}
												className="form-control"
												onChange={(e) => setPassword(e.target.value)}></input>
										</div>
										<div className="text-center">
											<input
												type="submit"
												name="submit"
												disabled={!validateForm()}
												className="btn btn-primary"
												value="Sign In"></input>
										</div>
										<br></br>
										<br></br>
										<br></br>
										<br></br>
										<SignUpOptional isPatient={isPatient} />
										{/* <div id="register-link" className="text-center">
											New User?
											<a href="/Register" className="text-info">
												Signup
											</a>
										</div> */}
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Page>
		</React.Fragment>
	);
}
