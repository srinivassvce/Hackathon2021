import * as React from "react";
import {useEffect, useState} from "react";
import {PatientMedicineModel} from "../_gen/entity";
import {getMedicines} from "../api";
import Page from "../common/page";

export interface MedicinesProps {
	patientId: string;
}

export interface MedicinesProps {
	patientId: string;
}

const Medicines: React.FunctionComponent<MedicinesProps> = (props) => {
	const [medicines, setMedicines] = useState<PatientMedicineModel[]>([]);

	useEffect(
		() => {
			const getAndSetMedicines = async () => {
				const medicines: PatientMedicineModel[] = await getMedicines(props.patientId);
				setMedicines(medicines);
			};
			getAndSetMedicines();
		}, []
	);

	const renderMedicinesRows = () => {
		return (
			<tbody>
			{medicines.map(
				medicine =>
					(
						<tr>
							<th scope={"row"}>{medicine.brandName}</th>
							<td>{medicine.genericName}</td>
							<td>{medicine.frequency}</td>
							<td>{new Date(medicine.fromDate).toDateString()}</td>
							<td>{new Date(medicine.toDate).toDateString()}</td>
						</tr>
					)
			)}
			</tbody>
		);
	};
	return (
		<Page title="Medicines" patientId={props.patientId}>
			<div className="container">
				<div className={"row text-info display-4 m-4"}>
					You have a total of {medicines.length} medications.
				</div>
				<table className={"table table-hover table-striped"}>
					<thead className={"thead-light"}>
					<tr>
						<th>Brand Name</th>
						<th>Generic Name</th>
						<th>Frequency</th>
						<th>Start Date</th>
						<th>End Date</th>
					</tr>
					</thead>
					{renderMedicinesRows()}
				</table>
			</div>
		</Page>
	);
};

export default Medicines;