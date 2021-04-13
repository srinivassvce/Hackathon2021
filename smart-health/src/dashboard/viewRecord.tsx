import * as React from "react";
import {FaArrowLeft, FaHome, FaUser} from "react-icons/fa";
import {useRouteMatch} from "react-router";
import {Link} from "react-router-dom";
import { Patient} from "../_gen/entity";
import Page from "../common/page";
import Dashboard from "./dashboard";

export interface ViewRecordProps {
	patientId: string;
}

const ViewRecord: React.FunctionComponent<ViewRecordProps> = (props) => {

	const [viewPatientId, setViewPatientId ] = React.useState(undefined);
	// const [records, setSharedRecords ] = React.useState([]);

	// TODO to integrate the UI with backend..
	const records: Patient[] = [{patientId: 1,patientName:"Arun",
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


	// useEffect(() => {
	// 	const getSharedPatients = async () => {
	// 		const sharedRecords: SharedRecordModel[] =  await getAllReceivedSharedRecords(props.patientId);
	// 		setSharedRecords(sharedRecords);
	// 		// names:await sharedRecords.forEach(record => getPatientName(record.patientId.toString()));
	// 	}
	// 	getSharedPatients();
	// }, []);


	const pathname = window.location.pathname;
	const {path, url ,isExact} = useRouteMatch();

	const handleClick = (id:number)=> {
		setViewPatientId(id);
	}

	const renderPatientsRows = () => {
		// const patients: SharedRecordModel[] = records;
		// console.log("patients are" ,patients);
		return (
			records.map(
				patient =>
					(
						<th style={{color:"darkcyan"}} >
							<button onClick={() => handleClick(patient.patientId)}>{patient.patientName}</button>
							
						</th>
					)
			)
		);
	};

	function renderSecondHeader() {
		return <tr>
			<th style={{
				textAlign: "center",
				background: "aliceblue"
			}}>Patient Shared Records With You -
			</th>

			{renderPatientsRows()}
		</tr>;
	}

	function renderSecondHeaderForView() {
		return <tr style={{
			height: "40px",
			textAlign: "center",
			background: "aliceblue"
		}}>
			<h2> <Link style={{float:"left"}} to={"/view"}> <FaArrowLeft className="m-2"/></Link>Reviewing Patient's Profile</h2>
		</tr>;
	}
	return (

		<React.Fragment>

			<Page patientId={props.patientId} title="ViewRecord">
				<table className={"table table-hover table-striped"}>
					<thead className={"thead-light"}>
					{isExact? renderSecondHeader() : renderSecondHeaderForView()}
					</thead>
				</table>
				{(viewPatientId) ? <Dashboard patientId={viewPatientId} isViewRecord={true}/> : undefined}
			</Page>
		</React.Fragment>
	);
}

export default ViewRecord;