export interface signupOptionProps {
	Actor: string;
}

const SignUpOptional: React.FunctionComponent<signupOptionProps> = (props) => {
	if (props.Actor === "Patient") {
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
