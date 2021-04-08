import * as React from "react";
import {useState} from "react";
import DatePicker from "react-datepicker";
import ReactModal from "react-modal";
import Select, {OptionTypeBase} from "react-select";
import {Medicine} from "../_gen/entity";
import {getAllMedicines, saveMedicineDetails} from "../api";

export interface AddMedicineProps {
	patientId: string;
	showModal: boolean;
	setModal: (showModal: boolean) => void;
}

const AddMedicine: React.FunctionComponent<AddMedicineProps> = ({patientId, showModal, setModal}) => {
	const [medicines, setMedicines] = React.useState<Medicine[]>([]);
	console.log("Medicines " + medicines);
	React.useEffect(() => {
		getAndSetMedicines();
	}, []);

	const getAndSetMedicines = async () => {
		const medicines = await getAllMedicines();
		setMedicines(medicines);

	};
	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		await saveMedicine();
		// closes the modal after save
		setModal(false);
	};

	const saveMedicine = async () => {
		console.log(patientId);
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
		console.log("VALUES " + values);
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
		console.log(brandNames);
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
	const DateP = (props: any) => {
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
	};
	const [medicine, setMedicine] = React.useState(
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
		console.log(option);
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
		console.log(date);
		setMedicine(
			{
				...medicine,
				fromDate: date
			}
		);
	};

	const updateToDate = (date) => {
		console.log(date);
		setMedicine(
			{
				...medicine,
				toDate: date
			}
		);
	};
	const options = [
		{value: "chocolate", label: "Chocolate"},
		{value: "strawberry", label: "Strawberry"},
		{value: "vanilla", label: "Vanilla"}
	];
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
								<button onClick={() => setModal(false)}>
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
											<label htmlFor="From Date" className="text-info">
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
											<label htmlFor="To Date" className="text-info">
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