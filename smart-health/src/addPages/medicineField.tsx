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
			<div className={"row"}>
				<div className={"col-md-3"}>
					<label htmlFor="medicines" className="text-info">
						Medicines
					</label>
				</div>
				<div className={"col-md-8"}>
					<button className={"btn btn-success btn-block"} onClick={handleClick}>Add Medicine</button>
				</div>
			</div>

			<AddMedicine patientId={patientId} showModal={showModal} setModal={setShowModal} onSubmit={onSubmit} />
			<div className={"row"} style={{marginTop: "10px"}}>
				<MedicineTableContent medicines={medicines} />
			</div>
		</React.Fragment>
	);
};

export default MedicineField;
