import { useEffect, useState } from "react";
import * as React from "react";
import { PatientAllergyModel } from "../_gen/entity";
import { getAllergens } from "../api";
import Page from "../common/page";

export interface AllergensProps {
	patientId: string;
	othersView: boolean;
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

	function renderAllergensCotentArea() {
		return <div className="container">
			<div className={"row text-info display-4 m-4"}>
				You have a total of {allergens.length} Allergen(s).
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
		</div>;
	}

	return (

		<React.Fragment>
			{props.othersView ? renderAllergensCotentArea() :
				<Page title="Allergens" id={props.patientId}>
					{renderAllergensCotentArea()}
				</Page>
			}
		</React.Fragment>
	);
};

export default Allergens;