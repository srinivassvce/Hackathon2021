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
	const history = useHistory();

	const validateForm = () =>
		email.length > 0 && password.length > 0 ? true : false;

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
		event,
	) => {
		event.preventDefault();

		const resp = axios
			.post(loginUrl(), { email, password })
			.then(c => {
				props.setPatientId(c.data)
				history.push("/dashboard");
			})
			.catch((err) => console.log(err));
	};

	return (
		<React.Fragment>
			<div id="login">
				<h3 className="text-center text-white pt-5">Login form</h3>
				<div className="container">
					<div
						id="login-row"
						className="row justify-content-center align-items-center">
						<div id="login-column" className="col-md-6">
							<div id="login-box" className="col-md-12">
								<form id="login-form" className="form" onSubmit={handleSubmit}>
									<h3 className="text-center text-info">Login</h3>
									<div className="form-group">
										<label htmlFor="username" className="text-info">
											Username:
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
										<label htmlFor="password" className="text-info">
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
									<div className="form-group">
										<input
											type="submit"
											name="submit"
											disabled={!validateForm()}
											className="btn btn-info btn-md"
											value="Login"></input>
									</div>
									<br></br>
									<br></br>
									<br></br>
									<div id="register-link" className="form-group">
										<a href="/Register" className="text-info">
											Register here
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
