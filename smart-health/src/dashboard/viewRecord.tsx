import {useEffect} from "react";
import * as React from "react";
import {FaArrowLeft} from "react-icons/fa";
import {useRouteMatch} from "react-router";
import {Link} from "react-router-dom";
import Select from "react-select";
import {SharedRecordModel} from "../_gen/entity";
import {getAllReceivedSharedRecords} from "../api";
import Page from "../common/page";
import Dashboard from "./dashboard";

export interface ViewRecordProps {
	doctorId?: string;
	patientId: string;
	setPatientId: (patientId: number) => void;
}

const ViewRecord: React.FunctionComponent<ViewRecordProps> = (props) => {

	const [viewPatientId, setViewPatientId ] = React.useState({
		                                                          patientId: undefined,
		                                                          patientName: undefined,
	                                                          });
	const [records, setSharedRecords] = React.useState<SharedRecordModel[]>(
		[]);

	useEffect(() => {
		const getSharedPatients = async () => {
			const id= props.doctorId ? props.doctorId : props.patientId;
			const sharedRecords: SharedRecordModel[] =  await getAllReceivedSharedRecords(id);
			setSharedRecords(sharedRecords);
		}
		getSharedPatients();
	}, []);


	const {isExact} = useRouteMatch();

	const getPatients = () => {
		const values = records.map(
			record => (
				{
					label: record.sharedName,
					value: record.patientId
				}
			)
		);

		return values;
	};

	const handlePatientChange = (option: any, action: any) => {
		setViewPatientId(
			{
				patientId: option.value,
				patientName: option.label
			});
	}

	const renderPatientsRows = () => {
		return (
			<th >
				<div style={{width:"25%"}}>
				<Select
					options={getPatients()}
					onChange={handlePatientChange}
					placeholder={"Select Patient"}
				/>
				</div>
			</th>
		);
	};

	function renderSecondHeader() {
		return <tr>
			<th style={{
				textAlign: "right",
				background: "aliceblue",
				width:"50%",
				fontFamily:"sans-serif"

			}}>Select Patient's Shared Record-
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
			<Page id={props.doctorId ? props.doctorId : props.patientId} isDoctor={props.doctorId !== undefined}
			      title="ViewRecord">
				<table className={"table table-hover table-striped"}>
					<thead className={"thead-light"}>
					{isExact? renderSecondHeader() : renderSecondHeaderForView()}
					</thead>
				</table>
				{(viewPatientId.patientId) ? <Dashboard doctorId={props.doctorId} patientId={viewPatientId.patientId} isViewRecord={true}/> : undefined}
			</Page>
		</React.Fragment>
	);
};

export default ViewRecord;