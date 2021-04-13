import * as React from 'react';
import {useEffect, useState} from "react";
import {EmergencyContactModel} from "../_gen/entity";
import Page from '../common/page';
import { getEmergencyContacts } from '../api';
export interface EmergencyContactsProps {
    patientId: string;
	othersView: boolean;
}
 
const EmergencyContacts: React.FunctionComponent<EmergencyContactsProps> = (props) => {

    const [emergencyContacts, setEmergencyContacts] = useState<EmergencyContactModel[]>([]);

    useEffect(() => {
        const getAndSetContacts = async () => {
            const emergencyContacts: EmergencyContactModel[] =  await getEmergencyContacts(props.patientId);
            setEmergencyContacts(emergencyContacts);
        }
        getAndSetContacts();
    }, []);

    const renderEmergencyContactsRows = () => {
		return (
			<tbody>
			{emergencyContacts.map(
				contact =>
					(
						<tr>
						<th scope={"row"}>{contact.emergencyPatient.patientName}</th>
							<td>{contact.emergencyPatient.mobile}</td>
							</tr>
					)
			)}
			</tbody>
		);
	};

	function renderEmergencyConactContentArea() {
		return <div className="container">
			<div className={"row text-info display-4 m-4"}>
				Contact List
			</div>
			<table className={"table table-hover table-striped"}>
				<thead className={"thead-light"}>
				<tr>
					<th>Name</th>
					<th>Mobile</th>
				</tr>
				</thead>
				{renderEmergencyContactsRows()}
			</table>
		</div>;
	}

	return (
		<React.Fragment>
			{props.othersView ? renderEmergencyConactContentArea() :
			 <Page patientId={props.patientId} title="Emergency Contacts">
				 {renderEmergencyConactContentArea()}
			 </Page>
			}
		</React.Fragment>
     );
}
 
export default EmergencyContacts;