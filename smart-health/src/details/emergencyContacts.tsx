import * as React from 'react';
import {useEffect, useState} from "react";
import {EmergencyContactModel} from "../_gen/entity";
import Page from '../common/page';
import { getEmergencyContacts } from '../api';
export interface EmergencyContactsProps {
    patientId: string;
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

    return ( 
        <Page title="Emergency Contacts" id={props.patientId} >
            <div className="container">
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
			</div>
        </Page>
     );
}
 
export default EmergencyContacts;