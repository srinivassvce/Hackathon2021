import * as React from "react";
import {useEffect, useState} from "react";
import {PatientImmunizationModel} from "../_gen/entity";
import {getImmunizations} from "../api";
import Page from "../common/page";

export interface ImmunizationsProps {
	patientId: string;
	othersView: boolean;
}

const Immunizations: React.FunctionComponent<ImmunizationsProps> = (props) => {
	const [immunizations, setImmunizations] = useState<PatientImmunizationModel[]>([]);

	useEffect(
		() => {
			const getAndSetImmunizations = async () => {
				const immunizations: PatientImmunizationModel[] = await getImmunizations(props.patientId);
				setImmunizations(immunizations);
			};
			getAndSetImmunizations();
		}, []
	);

	const renderImmunizationRows = () => {
		return (
			<tbody>
			{immunizations.map(
				immunization =>
					(
						<tr>
							<th scope={"row"}>{immunization.vaccineName}</th>
							<td>{new Date(immunization.vaccineDate).toDateString()}</td>
						</tr>
					)
			)}
			</tbody>
		);
	};

	function renderImmunizationsContentArea() {
		return <div className="container">
			<div className={"row text-info display-4 m-4"}>
				You have a total of {immunizations.length} Immunizations.
			</div>
			<table className={"table table-hover table-striped"}>
				<thead className={"thead-light"}>
				<tr>
					<th>Vaccine Name</th>
					<th>Vaccine Date</th>
				</tr>
				</thead>
				{renderImmunizationRows()}
			</table>
		</div>;
	}

	return (
		<React.Fragment>
		{props.othersView ? renderImmunizationsContentArea() :
		       <Page patientId={props.patientId} title="Immunizations">
			       {renderImmunizationsContentArea()}
		       </Page>
		}
</React.Fragment>
	);
};

export default Immunizations;