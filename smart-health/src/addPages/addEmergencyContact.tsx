import * as React from 'react';
import ReactModal from 'react-modal';
import Select, { OptionTypeBase } from "react-select";
import { getAllPatients, getPatientByEmail, saveEmergencyContactDetails } from '../api';
import { EmergencyContactModel, Patient } from '../_gen/entity';
import axios, { AxiosResponse } from "axios";

export interface AddEmergencyContactProps {
    patientId: string;
    showModal: boolean;
    setModal: (showModal: boolean) => void;
}

const AddEmergencyContact: React.FunctionComponent<AddEmergencyContactProps> = ({ patientId, showModal, setModal }) => {
    const [patient, setPatient] = React.useState<Patient>(
        {
            patientId: -1,
            patientName: "",
            patientEmail: "",
            patientAddress: "",
            mobile: -1,
            password: "",
            bloodGroup: "",
            birthDate: new Date(),
            height: "",
            weight: ""
        }
    );
    const [patientEmail, setEmail] = React.useState("");
    React.useEffect(() => {
        //getAndSetPatient();
    }, []);

    const getAndSetPatient = async () => {
        const patient = await getPatientByEmail(patientEmail);
        //console.log("Patient: ", patient);
        setPatient(patient);
    };

    const handleSearch: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault();
        getAndSetPatient();
    };

    const saveEmergencyContact = async () => {
		await saveEmergencyContactDetails(patient, patientId);
	};

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		await saveEmergencyContact();
		// closes the modal after save
		setPatient({
            patientId: -1,
            patientName: "",
            patientEmail: "",
            patientAddress: "",
            mobile: -1,
            password: "",
            bloodGroup: "",
            birthDate: new Date(),
            height: "",
            weight: ""
        });
		setModal(false);
	};

    const safeExit = () => {
        setModal(false);

    }

    return (
        <React.Fragment>
            <ReactModal
                isOpen={showModal}
                ariaHideApp={false}>
                <div className="container">
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-md-11">
                                <h3 className="text-center text-info">Add Emergency Contact</h3>
                            </div>
                            <div className="col-md-1 col-md-offset-1">
                                <button onClick={() => safeExit()}>
                                    x
                                    </button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="container">
                        <div
                            className="row justify-content-center align-items-center">
                            <div className="col-md-6">
                                <div className="col-md-12">
                                    <form className="form" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="email" className="text-info">
                                                Enter Email
											</label>
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
                                                className="form-control"
                                                value={patientEmail}
                                                placeholder={"Search Name By Email"}
                                                onChange={(e) => setEmail(e.target.value)}>
                                            </input>
                                            <div>
                                                <button
                                                    className="btn btn-info btn-md"
                                                    onClick={handleSearch}>
                                                    Search
                                                </button>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                value={patient.patientName}
                                                placeholder={"Name"}
                                            />
                                        </div>
                                        <div className="form-group d-grid">
                                            <input
                                                type="submit"
                                                name="submit"
                                                className="btn btn-info btn-md"
                                                value="Add" />
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
}

export default AddEmergencyContact;