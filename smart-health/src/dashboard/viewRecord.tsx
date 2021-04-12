import * as React from "react";
import {Patient} from "../_gen/entity";
import Page from "../common/page";
import Dashboard from "./dashboard";

export interface ViewRecordProps {
	patientId: string;
}

const ViewRecord: React.FunctionComponent<ViewRecordProps> = (props) => {

	const [viewPatientId, setViewPatientId ] = React.useState(undefined);

	// TODO to integrate the UI with backend..
	const patients: Patient[] = [{patientId: 1,patientName:"Arun",
	patientAddress: "add",
	patientEmail: "test@gmail.com",
	mobile: "123",
	password: "123",
	bloodGroup: "b+",
	birthDate: "",
	height: "",
	weight: ""},
		{patientId: 2,patientName:"Akshay",
			patientAddress: "add",
			patientEmail: "test1@gmail.com",
			mobile: "123",
			password: "123",
			bloodGroup: "b+",
			birthDate: "",
			height: "",
			weight: ""}

	];

	const handleClick = (id:number)=> {
		setViewPatientId(id);
	}

	const renderPatientsRows = () => {
		return (

			patients.map(
				patient =>
					(
						<th style={{color:"darkcyan"}} >
							<button onClick={() => handleClick(patient.patientId)}>{patient.patientName}</button>
							
						</th>
					)
			)
		);
	};

	return (
		<React.Fragment>

			<Page patientId={props.patientId} title="ViewRecord">
				<table className={"table table-hover table-striped"}>
					<thead className={"thead-light"}>
					<tr>
						<th style={{textAlign: "center",
						background: "aliceblue"}}>Patient Shared Records With You - </th>

					{renderPatientsRows()}
					</tr>
					</thead>
				</table>
				{(viewPatientId) ? <Dashboard patientId={viewPatientId} isViewRecord={true}/> :undefined}
			</Page>
		</React.Fragment>
	);
}

export default ViewRecord;