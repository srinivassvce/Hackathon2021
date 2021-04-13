import * as React from "react";
import {Route, Switch} from "react-router";
import {Link} from "react-router-dom";
import {Patient} from "../_gen/entity";
import Page from "../common/page";
import Allergens from "../details/allergens";
import LastVisits from "../details/lastVisits";
import Medicines from "../details/medicines";
import Dashboard from "./dashboard";
import ViewRecordRoutes from "./viewRecordRoutes";

export interface ViewRecordProps {
	doctorId?: string;
	patientId: string;
	setPatientId: (patientId: number) => void;
}

const ViewRecord: React.FunctionComponent<ViewRecordProps> = (props) => {

	const [viewPatientId, setViewPatientId] = React.useState();

	// TODO to integrate the UI with backend..
	const patients: Patient[] = [{
		patientId: 1000, patientName: "Arun",
		patientAddress: "add",
		patientEmail: "test@1",
		mobile: "123",
		password: "123",
		bloodGroup: "b+",
		birthDate: "",
		height: "",
		weight: ""
	},
		{
			patientId: 1001, patientName: "Akshay",
			patientAddress: "add",
			patientEmail: "test1@gmail.com",
			mobile: "123",
			password: "123",
			bloodGroup: "b+",
			birthDate: "",
			height: "",
			weight: ""
		}

	];

	const handleClick = (id: number) => {
		setViewPatientId(id);
		props.setPatientId && props.setPatientId(id);
	};

	const renderPatientsRows = () => {
		return (

			patients.map(
				patient =>
					(
						<th style={{color: "darkcyan"}}>
							<Link to={"/viewRecord/dashboard"}>
								<button onClick={() => handleClick(patient.patientId)}>{patient.patientName}</button>
							</Link>

						</th>
					)
			)
		);
	};

	return (
		<React.Fragment>

			<Page id={props.doctorId ? props.doctorId : props.patientId} isDoctor={props.doctorId !== undefined}
			      title="ViewRecord">
				<table className={"table table-hover table-striped"}>
					<thead className={"thead-light"}>
					<tr>
						<th style={{
							textAlign: "center",
							background: "aliceblue"
						}}>Patient Shared Records With You -
						</th>

						{renderPatientsRows()}
					</tr>
					</thead>
				</table>
				< ViewRecordRoutes doctorId={props.doctorId} patientId={props.patientId}/>
				{/*{(viewPatientId) ? <Dashboard doctorId={props.doctorId} patientId={viewPatientId} isViewRecord={true}/> :undefined}*/}
			</Page>

		</React.Fragment>
	);
};

export default ViewRecord;