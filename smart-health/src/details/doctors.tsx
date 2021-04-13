import * as React from "react";
import {useEffect, useState} from "react";
import {DoctorModel, HealthCareProviderModel} from "../_gen/entity";
import {getDoctors} from "../api";
import Page from "../common/page";

export interface DoctorsProps {
	patientId: string;
	othersView: boolean;
}

const Doctors: React.FunctionComponent<DoctorsProps> = (props) => {
	const [doctors, setDoctors] = useState<DoctorModel[]>([]);

	useEffect(
		() => {
			const getAndSetDoctors = async () => {
				const doctors: DoctorModel[] = await getDoctors(props.patientId);
				setDoctors(doctors);
			};
			getAndSetDoctors();
		}, []
	);

	const renderHcpNames = (hcps: HealthCareProviderModel[]) => {
		return (<ul>{hcps.map(hcp => (<li>{hcp.hcpName}</li>))}</ul>);
	};
	const renderDoctorsRows = () => {
		return (
			<tbody>
			{doctors.map(
				doctor =>
					(
						<tr>
							<th scope={"row"}>{doctor.doctorName}</th>
							<td>{doctor.specialization}</td>
							<td>{renderHcpNames(doctor.healthCareProviders)}</td>
							<td>{doctor.doctorEmail}</td>
						</tr>
					)
			)}
			</tbody>
		);
	};

	function renderDoctorsContentArea() {
		return <div className="container">
			<div className={"row text-info display-4 m-4"}>
				Doctors {(doctors.length)}
			</div>
			<table className={"table table-hover table-striped"}>
				<thead className={"thead-light"}>
				<tr>
					<th>Name</th>
					<th>Specialization</th>
					<th>HealthCareProviders</th>
					<th>Email</th>
				</tr>
				</thead>
				{renderDoctorsRows()}
			</table>
		</div>;
	}

	return (
		<React.Fragment>
		{props.othersView ? renderDoctorsContentArea() :
		       <Page patientId={props.patientId} title="Doctors">
			       {renderDoctorsContentArea()}
		       </Page>
		}
</React.Fragment>
	);
};

export default Doctors;