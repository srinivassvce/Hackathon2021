import {useState} from "react";
import * as React from "react";
import {PatientMedicineModel} from "../_gen/entity";
import MedicineTableContent from "../details/MedicineTableContent";
import AddMedicine from "./addMedicine";

interface IMedicineFieldProps {
	medicines: PatientMedicineModel[];
	patientId: string;
	onSubmit: (medicine: PatientMedicineModel) => void;
}

const MedicineField: React.FunctionComponent<IMedicineFieldProps> = ({medicines, patientId, onSubmit}) => {
	const [showModal, setShowModal] = useState(false);
	const handleClick = (e) => {
		e.preventDefault();
		setShowModal(true);
	}
	return (
		<React.Fragment>
			<AddMedicine patientId={patientId} showModal={showModal} setModal={setShowModal} onSubmit={onSubmit} />
			<MedicineTableContent medicines={medicines} />
			<button className={"btn btn-success"} onClick={handleClick}>Add Medicine</button>
		</React.Fragment>
	);
};

export default MedicineField;
