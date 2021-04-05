import * as React from 'react';
import { PatientAllergyModel } from "../_gen/entity";
import { propTypes } from 'react-bootstrap/esm/Image';
import ReactModal from 'react-modal';
import Page from '../common/page';
import Select, { OptionsType, OptionTypeBase } from "react-select";
import { getAllAllergens, getAllergen, saveAllergenDetails } from '../api';

export interface AddAllergenProps {
    patientId: string;
    showModal: boolean;
    setModal: (showModal: boolean) => void;
}

const AddAllergen: React.FunctionComponent<AddAllergenProps> = ({ patientId, showModal, setModal }) => {
    const [allergens, setAllergens] = React.useState([]);
    React.useEffect(() => { getAndSetAllergens() }, [])

    const getAndSetAllergens = async () => {
        const allergens = await getAllAllergens();
        setAllergens(allergens);

    }
    const [allergy, setAllergy] = React.useState(
        {
            allergyId: 0,
            allergyType: "",
            allergens: "",
            symptoms: ""
        }
    )
    const saveAllergen = () => {
        saveAllergenDetails(allergy, patientId);
    }

    const handleTypeChange = (option: any, action: any) => {
        console.log(option);
        setAllergy(
            {
                ...allergy,
                allergyType: option.value,
                allergens: ""
            }

        )
    }

    const handleAllergenChange = (option: any, action: any) => {
        console.log(option);
        setAllergy(
            {
                ...allergy,
                allergens: option.label,
                allergyId: option.value
            }
        )

    }

    const getAllergyId = (allergyType: string) => {
        const allergen = allergens.find(
            allergen => allergen.allergyType === allergyType
        );
        return allergen ? allergen.allergyId : "";
    }

    const handleChange = ({target}) => {
        const {name, value} =  target;
        const newAllergy = {
            ...allergy,
            [name]: value
        }
        setAllergy(newAllergy);

        const allergens = getAllergens();
        if (allergens.length === 0) {
            setAllergy(
                {
                    ...allergy,
                    allergyId: getAllergyId(allergy.allergyType)
                }
            )
        }
    }

    const handleSubmit = () => {
        console.log("submit");
    }

    const getAllergenTypes = () => {
        console.log("Get allergens");

        const allergyTypesSet = new Set();
        allergens.forEach(
            allergen => allergyTypesSet.add(allergen.allergyType)
        )
        const values: OptionTypeBase[] = [];
        allergyTypesSet.forEach(
            type => values.push({
                label: type,
                value: type
            })
        );
        return values;
    }

    // const isAllergenSelected = async (obj, objArr) => {
    //     console.log(obj);
    //     console.log(objArr);
    //     const allergenFromServer = await getAllergen(obj.value);
    //     return (allergenFromServer.allergenType === allergy.allergyType)
    // }

    const getAllergens = () => {
        const values = allergens.filter(
            allergen => allergen.allergyType === allergy.allergyType
        ).map(
            allergen => (
                {
                    label: allergen.allergens,
                    value: allergen.allergyId
                }
            )
        )
        console.log(values);
        return values;
    }

    return (
        <React.Fragment>
            <ReactModal
                isOpen={showModal}
                ariaHideApp={false}
            >
                <div className="container">
                    <div className="row jumbotron">
                        <div className="row">
                            <div className="col-2">
                                <button onClick={() => setModal(false)}>
                                    x
                                </button>

                            </div>
                            <div className="col-8">
                                <h3 className="text-center text-info">Add Allergen</h3>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="container">
                        <div
                            id="login-row"
                            className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form" className="form" onSubmit={handleSubmit}>

                                        <div className="form-group">
                                            <Select
                                                options={getAllergenTypes()}
                                                onChange={handleTypeChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <Select
                                                options={getAllergens()}
                                                onChange={handleAllergenChange}
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
                                                autoFocus
                                                className="form-control"
                                                value={allergy.symptoms}
                                                onChange={handleChange}></input>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer container">
                        <button className="btn btn-info" onClick={saveAllergen}>Add</button>
                    </div>
                </div>

            </ReactModal>
        </React.Fragment>
    );
}

export default AddAllergen;