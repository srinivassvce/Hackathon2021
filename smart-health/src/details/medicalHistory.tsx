import * as React from "react";
import {useEffect, useState} from "react";
import {MedicalHistoryModel} from "../_gen/entity";
import {getMedicalHistory} from "../api";
import Page from "../common/page";

export interface MedicalHistoryProps {
	patientId: string;
}

const MedicalHistory: React.FunctionComponent<MedicalHistoryProps> = (props) => {
	const [medicalHistories, setMedicalHistories] = useState<MedicalHistoryModel[]>([]);

	useEffect(
		() => {
			const getAndSetMedicalHistories = async () => {
				const medicalHistories: MedicalHistoryModel[] = await getMedicalHistory(props.patientId);
				setMedicalHistories(medicalHistories);
			};
			getAndSetMedicalHistories();
		}, []
	);

	const renderMedicalHistories = () => {
		return (
			<tbody>
			{medicalHistories.map(
				medicalHistory =>
					(
						<tr>
							<th scope={"row"}>{new Date(medicalHistory.visitedDate).toDateString()}</th>
							<td>{medicalHistory.diagnoseNotes}</td>
							<td>{medicalHistory.surgicalNotes}</td>
							<td>{medicalHistory.additionalTests}</td>
						</tr>
					)
			)}
			</tbody>
		);
	};
	return (
		<Page title="Medical History" id={props.patientId}>
			<div className="container">
				<div className={"row text-info display-4 m-4"}>

				</div>
				<table className={"table table-hover table-striped"}>
					<thead className={"thead-light"}>
					<tr>
						<th>Visited Date</th>
						<th>Diagnose History</th>
						<th>Surgical History</th>
						<th>Lab Tests History</th>
					</tr>
					</thead>
					{renderMedicalHistories()}
				</table>
			</div>
		</Page>
	);
};

export default MedicalHistory;