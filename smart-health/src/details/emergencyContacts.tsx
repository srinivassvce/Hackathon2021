import * as React from 'react';
import Page from '../common/page';
export interface EmergencyContactsProps {
    patientId: string;
}
 
const EmergencyContacts: React.FunctionComponent<EmergencyContactsProps> = (props) => {
    return ( 
        <Page title="Emergency Contacts" patientId={props.patientId} >
            <h1>
                List of Emergency Contacts here ....
            </h1>
        </Page>
     );
}
 
export default EmergencyContacts;