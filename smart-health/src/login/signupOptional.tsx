export interface signupOptionProps {
	isPatient: boolean;
}

const SignUpOptional: React.FunctionComponent<signupOptionProps> = (props) => {
	if (props.isPatient) {
		return (
			<div id="register-link" className="text-center">
				New User?
				<a href="/Register" className="text-info">
					Signup
				</a>
			</div>
		);
	} else {
		return <br></br>;
	}
};

export default SignUpOptional;
