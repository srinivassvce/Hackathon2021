import * as React from "react";
import Page from "../common/page";

export interface profileProps {
	patientId: string;
}

const Profile: React.FunctionComponent<profileProps> = (props) => {
	return (
		<Page patientId={props.patientId} title="Profile">


		</Page>
	);

}

export default Profile;