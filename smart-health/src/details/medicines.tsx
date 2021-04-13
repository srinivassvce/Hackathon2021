import * as React from "react";
import {useEffect, useState} from "react";
import {PatientMedicineModel} from "../_gen/entity";
import {getMedicines} from "../api";
import Page from "../common/page";
import MedicineTableContent from "./MedicineTableContent";

export interface MedicinesProps {
	patientId: string;
	othersView: boolean;
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

	function renderMedicinesContentArea() {
		return <div className="container">
			<div className={"row text-info display-4 m-4"}>
				You have a total of {medicines.length} medications.
			</div>
			<MedicineTableContent medicines={medicines}/>
		</div>;
	}

	return (
		<React.Fragment>
		{props.othersView ? renderMedicinesContentArea() :
		       <Page patientId={props.patientId} title="Medicines">
			       {renderMedicinesContentArea()}
		       </Page>
		}
</React.Fragment>
	);
};

export default Medicines;