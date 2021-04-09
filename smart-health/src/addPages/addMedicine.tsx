import * as React from "react";
import DatePicker from "react-datepicker";
import ReactModal from "react-modal";
import Select, {OptionTypeBase} from "react-select";
import {Medicine, MedicineType, PatientMedicineModel} from "../_gen/entity";
import {getAllMedicines, saveMedicineDetails} from "../api";

export interface AddMedicineProps {
	patientId: string;
	showModal: boolean;
	setModal: (showModal: boolean) => void;
	onSubmit: (medicine: PatientMedicineModel) => void;
}

const AddMedicine: React.FunctionComponent<AddMedicineProps> = ({patientId, showModal, setModal, onSubmit}) => {
	const [medicines, setMedicines] = React.useState<Medicine[]>([]);
	React.useEffect(() => {
		getAndSetMedicines();
	}, []);

	const getAndSetMedicines = async () => {
		const medicines = await getAllMedicines();
		setMedicines(medicines);

	};
	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (onSubmit) {
			onSubmit(medicine);
		} else {
			await savedMedicine();
		}
		// closes the modal after save
		setMedicine(
			{
				medicineId: null,
				patientId: "",
				genericName: "",
				brandName: "",
				dose: "",
				classification: "",
				manufacturer: "",
				medicineType: "",
				medicinePrice: "",
				fromDate: "",
				toDate: "",
				frequency: "",
				patientVisitId: "",
			}
		);

		setModal(false);
	};

	const saveMedicine = async () => {
		await saveMedicineDetails(medicine, patientId);
	};
	const handleChange = (e: { target: { name: string; value: string; }; }) => {
		const {name, value} = e.target;
		const newMedicine = {
			...medicine,
			fromDate: medicine.fromDate,
			toDate: medicine.toDate,
			[name]: value
		};
		setMedicine(newMedicine);
	};

	const getMedicineGenericNames = () => {

		const medicineGenericNamesSet = new Set();
		medicines.forEach(
			medicine => medicineGenericNamesSet.add(medicine.genericName)
		);
		const values: OptionTypeBase[] = [];
		medicineGenericNamesSet.forEach(
			genericName => values.push({
				                           label: genericName,
				                           value: genericName
			                           })
		);
		return values;
	};

	const getBrandNames = (genericName: string) => {
		const values = medicines.filter(
			medicine => medicine.genericName === genericName
		).map(
			medicine => (
				{
					label: medicine.brandName,
					value: medicine.medicineId
				}
			)
		);

		return values;
	};
	const handleGenericNameChange = (option: any, action: any) => {
		// get all Brand Names for the selected Generic Name.
		const brandNames = getBrandNames(option.label);
		const medicineId = brandNames.length === 1 && brandNames[0].label === "" ? option.value : null;
		setMedicine(
			{
				...medicine,
				genericName: option.value,
				brandName: "",
				medicineId: medicineId,
			}
		);
	};
	/*	const DateP = (props: any) => {
			const [startDate, setStartDate] = useState(null);
			const {onChange} = props;
			const handleChange = (date) => {
				setStartDate(date);
				onChange(date);
			};
			return (
				<DatePicker
					selected={startDate}
					placeholderText="mm/dd/yyyy"
					isClearable
					onChange={handleChange}
				/>
			);
		};*/
	const [medicine, setMedicine] = React.useState(
		{
			medicineId: -1,
			patientId: -1,
			genericName: "",
			brandName: "",
			dose: "",
			classification: "",
			manufacturer: "",
			medicineType: "" as MedicineType,
			medicinePrice: "",
			fromDate: "",
			toDate: "",
			frequency: "",
			patientVisitId: "",
		}
	);
	const [disabled, setDisabled] = React.useState(true);

	React.useEffect(
		() => {
			const isDis = medicine.medicineId === null || medicine.medicineId === undefined;
			setDisabled(isDis);
		}, [medicine]
	);

	const getMedicineType = (brandName: string) => {
		const found = medicines.find(
			medicine => medicine.brandName === brandName
		);
		return found.medicineType;

	};
	const handleBrandNameChange = (option: any, action: any) => {
		setMedicine(
			{
				...medicine,
				brandName: option.label,
				medicineId: option.value,
				medicineType: getMedicineType(option.label)
			}
		);
	};

	const updateFromDate = (date) => {
		setMedicine(
			{
				...medicine,
				fromDate: date
			}
		);
	};

	const updateToDate = (date) => {
		setMedicine(
			{
				...medicine,
				toDate: date
			}
		);
	};
	const getSelectedValue = (currentBrandName: string) => {
		const values = medicines.find(
			medicine => medicine.brandName === currentBrandName
		);
		if (values !== undefined) {
			return ({
				value: values.medicineId,
				label: values.brandName
			});
		} else {
			return null;
		}
	};
	const safeExit = () => {
		setModal(false);
		setMedicine(
			{
				medicineId: null,
				patientId: "",
				genericName: "",
				brandName: "",
				dose: "",
				classification: "",
				manufacturer: "",
				medicineType: "",
				medicinePrice: "",
				fromDate: "",
				toDate: "",
				frequency: "",
				patientVisitId: "",
			}
		);
	};
	return (
		<React.Fragment>
			<ReactModal
				isOpen={showModal}
				ariaHideApp={false}
			>
				<div className="container">
					<div className="jumbotron">
						<div className="row">
							<div className="col-md-11">
								<h3 className="text-center text-info">Add Medicine</h3>
							</div>
							<div className="col-md-1 col-md-offset-1">
								<button onClick={() => safeExit()}>
									x
								</button>

							</div>
						</div>
					</div>
					<hr/>
					<div className="container">
						<div
							className="row justify-content-center align-items-center">
							<div className="col-md-6">
								<div className="col-md-12">
									<form className="form" onSubmit={handleSubmit}>
										<div className="form-group">
											<label htmlFor="Generic Name" className="text-info">
												Generic Name :
											</label>
											<Select
												options={getMedicineGenericNames()}
												onChange={handleGenericNameChange}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="Brand Name" className="text-info">
												Brand Name :
											</label>
											<Select
												options={getBrandNames(medicine.genericName)}
												onChange={handleBrandNameChange}
												value={getSelectedValue(medicine.brandName)}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="Start Date" className="text-info">
												From Date :
											</label>
											<div>
												<DatePicker
													selected={medicine.fromDate}
													placeholderText="mm/dd/yyyy"
													isClearable
													onChange={updateFromDate}
												/>
											</div>
										</div>
										<div className="form-group">
											<label htmlFor="End Date" className="text-info">
												To Date :
											</label>
											<div>
												<DatePicker
													selected={medicine.toDate}
													placeholderText="mm/dd/yyyy"
													isClearable
													onChange={updateToDate}
												/>
											</div>
										</div>
										<div className="form-group">
											<label htmlFor="frequency" className="text-info">
												Frequency
											</label>
											<input
												type="text"
												name="frequency"
												id="frequency"
												autoFocus
												className="form-control"
												value={medicine.frequency}
												onChange={handleChange}></input>
										</div>
										<div className="form-group d-grid">
											<input
												type="submit"
												name="submit"
												disabled={disabled}
												className="btn btn-info btn-md"
												value="Add"></input>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>


				</div>

			</ReactModal>
		</React.Fragment>
	);
};

export default AddMedicine;