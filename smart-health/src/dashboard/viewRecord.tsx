import * as React from "react";
import {Patient} from "../_gen/entity";
import Page from "../common/page";
import Dashboard from "./dashboard";

export interface ViewRecordProps {
	doctorId?: string;
	patientId: string;
}

const ViewRecord: React.FunctionComponent<ViewRecordProps> = (props) => {

	const [viewPatientId, setViewPatientId ] = React.useState();

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

			<Page id={props.doctorId ? props.doctorId : props.patientId} isDoctor={props.doctorId !== undefined} title="ViewRecord">
				<table className={"table table-hover table-striped"}>
					<thead className={"thead-light"}>
					<tr>
						<th style={{textAlign: "center",
						background: "aliceblue"}}>Patient Shared Records With You - </th>

					{renderPatientsRows()}
					</tr>
					</thead>
				</table>
				{(viewPatientId) ? <Dashboard doctorId={props.doctorId} patientId={viewPatientId} isViewRecord={true}/> :undefined}
			</Page>
		</React.Fragment>
	);
}

export default ViewRecord;