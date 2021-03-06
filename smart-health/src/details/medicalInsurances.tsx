import * as React from "react";
import {useEffect, useState} from "react";
import {PatientInsuranceModel} from "../_gen/entity";
import {getMedicalInsurances} from "../api";
import Page from "../common/page";

export interface MedicalInsurancesProps {
	patientId: string;
	othersView: boolean;
}

const MedicalInsurances: React.FunctionComponent<MedicalInsurancesProps> = (props) => {
	const [medicalInsuraces, setMedicalInsurances] = useState<PatientInsuranceModel[]>([]);

	useEffect(
		() => {
			const getAndSetInsurances = async () => {
				const insurances: PatientInsuranceModel[] = await getMedicalInsurances(props.patientId);
				setMedicalInsurances(insurances);
			};
			getAndSetInsurances();
		}, []
	);

	const renderInsuranceRows = () => {
		return (
			<tbody>
			{medicalInsuraces.map(
				insurance =>
					(
						<tr>
							<th scope={"row"}>{insurance.insuranceCompany}</th>
							<td>{insurance.tpa}</td>
							<td>{insurance.sumInsured}</td>
						</tr>
					)
			)}
			</tbody>
		);
	};

	function renderMedicalInsuranceContent() {
		return <div className="container">
			<div className={"row text-info display-4 m-4"}>
				You have a total of {medicalInsuraces.length} Medical Insurance(s).
			</div>
			<table className={"table table-hover table-striped"}>
				<thead className={"thead-light"}>
				<tr>
					<th>Insurance Company</th>
					<th>TPA</th>
					<th>Sum Insured</th>
				</tr>
				</thead>
				{renderInsuranceRows()}
			</table>
		</div>;
	}

	return (
		<React.Fragment>
		{props.othersView ? renderMedicalInsuranceContent() :
		 <Page title="Medical Insurance" id={props.patientId}>
			       {renderMedicalInsuranceContent()}
		       </Page>
		}
</React.Fragment>
	);
};

export default MedicalInsurances;