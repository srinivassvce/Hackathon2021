import React, { useState } from "react";
import "../styles/login.css";
import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { getUrl } from "../api";
import { loginUrl } from "../api";
import axios from "axios";

export interface LoginProps {
	setPatientId: (patientId: string) => void;
}

export default function Login(props: LoginProps) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [isPatient, setIsPatient] = useState("0");
	const history = useHistory();

	const validateForm = () =>
		email.length > 0 && password.length > 0 ? true : false;

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
		event,
	) => {
		event.preventDefault();
		if (isPatient === "0") {
			const resp = axios
				.post(loginUrl(), { email, password })
				.then((c) => {
					props.setPatientId(c.data);
					history.push("/dashboard");
				})
				.catch((err) => console.log(err));
		} else {
			console.log("Doctor", isPatient);
			history.push("/dashboard");
		}
	};

	return (
		<React.Fragment>
			<div id="login">
				<div className="container">
					<div
						id="login-row"
						className="row justify-content-center align-items-center">
						<div id="login-column" className="col-md-6">
							<div id="login-box" className="col-md-12">
								<form id="login-form" className="form" onSubmit={handleSubmit}>
									<h3 className="text-center text-info">Sign In</h3>
									<br></br>

									<div className="text-center">
										<div className="form-check form-check-inline">
											<input
												className="form-check-input"
												type="radio"
												checked={isPatient === "0"}
												name="inlineRadioOptions"
												onChange={(e) => setIsPatient(e.target.value)}
												id="inlineRadio1"
												value="0"></input>
											<label className="form-check-label">Patient</label>
										</div>
										<br></br>
										<br></br>
										<div className="form-check form-check-inline">
											<input
												className="form-check-input"
												type="radio"
												name="inlineRadioOptions"
												checked={isPatient === "1"}
												onChange={(e) => setIsPatient(e.target.value)}
												id="inlineRadio2"
												value="1"></input>
											<label className="form-check-label">Doctor</label>
										</div>
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

									<div id="register-link" className="text-center">
										New User?
										<a href="/Register" className="text-info">
											Signup
										</a>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
