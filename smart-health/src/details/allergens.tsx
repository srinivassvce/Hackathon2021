import {useEffect, useState} from "react";
import * as React from "react";
import {PatientAllergyModel} from "../_gen/entity";
import {getAllergens} from "../api";
import Page from "../common/page";

export interface AllergensProps {
	patientId: string;
}

const Allergens: React.FunctionComponent<AllergensProps> = (props) => {
	const [allergens, setAllergens] = useState<PatientAllergyModel[]>([]);

	useEffect(
		() => {
			const getAndSetAllergens = async () => {
				const allergens: PatientAllergyModel[] = await getAllergens(props.patientId);
				setAllergens(allergens);
			};
			getAndSetAllergens();
		}, []
	);

	const renderAllergensRows = () => {
		return (
			<tbody>
			{allergens.map(
				allergy =>
					(
						<tr>
						<th scope={"row"}>{allergy.allergyType}</th>
							<td>{allergy.allergens}</td>
							<td>{allergy.symptoms}</td>
							</tr>
					)
			)}
			</tbody>
		);
	};
	return (
		<Page title="Allergens" patientId={props.patientId}>
			<div className="container">
				<div className={"row text-info display-4 m-4"}>
					You have a total of {allergens.length} allergens.
				</div>
				<table className={"table table-hover table-striped"}>
					<thead className={"thead-light"}>
					<tr>
						<th>Type</th>
						<th>Name</th>
						<th>Symptoms</th>
					</tr>
					</thead>
					{renderAllergensRows()}
				</table>
			</div>
		</Page>
	);
};

export default Allergens;