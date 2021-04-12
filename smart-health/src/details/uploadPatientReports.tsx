import React, { Component } from "react";
import {saveMedicineDetails, saveUploadPatientReport} from "../api";
import Page from "../common/page";
import { useFormFields } from "../libs/useFormFields";
import { useHistory } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export interface UploadPatientReportsProps {
	patientId: string;
}

const UploadPatientReports: React.FunctionComponent<UploadPatientReportsProps> = (
	props,
) => {
	const [file, setFile] = React.useState("");
	const [fields, handleFieldChange] = useFormFields({
		hospitalName: "",
		reportName: "",

	});
	const [date,setDate]=React.useState("");
	const history = useHistory();

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
		event,

	) => {
		 await uploadPatientReport();
		event.preventDefault();
	};

	const uploadPatientReport = async () => {
		await saveUploadPatientReport(props.patientId,fields.hospitalName,fields.reportName,date,file);
	};
	const handleUpload: React.FormEventHandler<HTMLFormElement> = (event) => {
		setFile(event.target.files[0]);
	};
	const updateFromDate = (date) => {
		setDate(date

		);
	};
	return (
		<React.Fragment>
			<Page title="Patient Report" patientId={props.patientId}>
				<div id="login">
					<div className="container">
						<div
							id="login-row"
							className="row justify-content-center align-items-center">
							<div id="login-column" className="col-md-6">
								<div id="login-box" className="col-md-12">
									<form
										id="login-form"
										className="form"
										onSubmit={handleSubmit}>
										<div className="form-group">
											<label htmlFor="hospitalName" className="text-secondary">
												Hospital:
											</label>
											<input
												type="text"
												name="hospitalName"
												value={fields.hospitalName}
												autoFocus
												className="form-control input-lg"
												onChange={handleFieldChange}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="reportName" className="text-secondary">
												Report Name:
											</label>
											<input
												type="text"
												name="reportName"
												value={fields.reportName}
												autoFocus
												className="form-control input-lg"
												onChange={handleFieldChange}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="date" className="text-info">
												Report Date :
											</label>
											<div>
												<DatePicker
													selected={date}
													placeholderText="mm/dd/yyyy"
													isClearable
													onChange={updateFromDate}
												/>
											</div>
										</div>
										<div className="form-group">
											<input type="file" onChange={() => handleUpload}></input>
										</div>
										<div className="text-center">
											<input
												type="submit"
												name="submit"
												className="btn btn-primary"
												value="Submit"></input>
										</div>
										<br></br>
										<br></br>
										<br></br>
										<br></br>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Page>
		</React.Fragment>
	);
};

export default UploadPatientReports;
