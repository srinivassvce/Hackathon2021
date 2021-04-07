import * as React from "react";
import {Allergy} from "../_gen/entity";
import ReactModal from "react-modal";
import Select, {OptionTypeBase} from "react-select";
import {getAllAllergens, saveAllergenDetails} from "../api";

export interface AddAllergenProps {
	patientId: string;
	showModal: boolean;
	setModal: (showModal: boolean) => void;
}

const AddAllergen: React.FunctionComponent<AddAllergenProps> = ({patientId, showModal, setModal}) => {
	const [allergens, setAllergens] = React.useState<Allergy[]>([]);
	React.useEffect(() => {
		getAndSetAllergens();
	}, []);

	const getAndSetAllergens = async () => {
		const allergens = await getAllAllergens();
		setAllergens(allergens);

	};
	const [allergy, setAllergy] = React.useState<Allergy & { symptoms: string }>(
		{
			allergyId: -1,
			allergyType: "",
			allergens: "",
			symptoms: ""
		}
	);
	const [disabled, setDisabled] = React.useState(true);

	React.useEffect(
		() => {
			const isDis = allergy.allergyId < 0;
			setDisabled(isDis);
		}, [allergy]
	);

	const saveAllergen = async () => {
		await saveAllergenDetails(allergy, patientId);
	};

	const handleTypeChange = (option: any, action: any) => {
		// check if allergens exist for this type.
		const allergens = getAllergens(option.label);
		console.log(allergens);
		const allergenId = allergens.length === 1 && allergens[0].label === "" ? allergens[0].value : -1;
		setAllergy(
			{
				symptoms: "",
				allergyType: option.value,
				allergyId: allergenId,
				allergens: ""
			}
		);
	};

	const handleAllergenChange = (option: any, action: any) => {
		console.log(option);
		setAllergy(
			{
				...allergy,
				allergens: option.label,
				allergyId: option.value
			}
		);
	};

	const handleSymptomsChange = (e: { target: { name: string; value: string; }; }) => {
		const {name, value} = e.target;
		const newAllergy = {
			...allergy,
			[name]: value
		};
		setAllergy(newAllergy);
	};

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		await saveAllergen();
		// closes the modal after save
		setAllergy({
			           allergens: "",
			           allergyId: -1,
			           allergyType: "",
			           symptoms: ""
		           });
		setModal(false);
	};

	const getAllergenTypes = () => {

		const allergyTypesSet = new Set();
		allergens.forEach(
			allergen => allergyTypesSet.add(allergen.allergyType)
		);
		const values: OptionTypeBase[] = [];
		allergyTypesSet.forEach(
			type => values.push({
				                    label: type,
				                    value: type
			                    })
		);
		return values;
	};

	const getAllergens = (allergyType: string) => {
		const values = allergens.filter(
			allergen => allergen.allergyType === allergyType
		).map(
			allergen => (
				{
					label: allergen.allergens,
					value: allergen.allergyId
				}
			)
		);

		return values;
	};

	const getSelectedValue = (currentAllergen: string) => {
		if (allergy.allergyId < 0) {
			return null;
		}
		const values = allergens.find(
			allergen => allergen.allergens === currentAllergen
		);
		if (values !== undefined) {
			return ({
				value: values.allergyId,
				label: values.allergens
			});
		} else {
			return null;
		}
	};

	const safeExit = () => {
		setModal(false);
		setAllergy(
			{
				allergyId: -1,
				allergens: "",
				allergyType: "",
				symptoms: ""
			}
		)
	}

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
								<h3 className="text-center text-info">Add Allergy</h3>
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
											<Select
												options={getAllergenTypes()}
												onChange={handleTypeChange}
												placeholder={"Select Allergy type"}
											/>
										</div>
										<div className="form-group">
											<Select
												options={getAllergens(allergy.allergyType)}
												onChange={handleAllergenChange}
												value={getSelectedValue(allergy.allergens)}
												placeholder={"Select Allergen"}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="symptoms" className="text-info">
												Symptoms
											</label>
											<input
												type="text"
												name="symptoms"
												id="symptoms"
												className="form-control"
												value={allergy.symptoms}
												onChange={handleSymptomsChange}/>
										</div>
										<div className="form-group d-grid">
											<input
												type="submit"
												name="submit"
												placeholder={"Select Symptoms"}
												disabled={disabled}
												className="btn btn-info btn-md"
												value="Add"/>
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

export default AddAllergen;