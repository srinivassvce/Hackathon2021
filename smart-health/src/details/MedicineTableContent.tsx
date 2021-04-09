import * as React from "react";
import {useEffect, useState} from "react";
import {PatientMedicineModel} from "../_gen/entity";
import {getMedicines} from "../api";
import Page from "../common/page";

export interface MedicinesProps {
	patientId: string;
}

export interface IMedicineTableContents {
	medicines: PatientMedicineModel[]
}

const MedicineTableContent: React.FunctionComponent<IMedicineTableContents> = (props) => {
	const {medicines} = props;
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
	);
};

export default MedicineTableContent;
