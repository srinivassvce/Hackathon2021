import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/login.css";
import Page from "./common/page";

function SignUpSuccessful() {
	return (
		<React.Fragment>
			<Page title="Successful" id={""} >
				<div id="login">
					<div className="container">
						<div
							id="login-row"
							className="row justify-content-center align-items-center">
							<div id="login-column" className="col-md-6">
								<div id="login-box" className="col-md-12">
									<h1> User Is Created!!!</h1>
									<br/>
									<div id="register-link" className="form-group">
										<a href="/" className="text-info">
											Click here to Login
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Page>
		</React.Fragment>
	);
}

export default SignUpSuccessful;
