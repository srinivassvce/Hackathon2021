import * as React from 'react';
import Page from '../common/page';
export interface LastVisitsProps {
    patientId: string;
}
 
const LastVisits: React.FunctionComponent<LastVisitsProps> = (props) => {
    return ( 
        <Page title="Last Visits" patientId={props.patientId} >
            <h1>
            List of Last Visits here ....
            </h1>
        </Page>
     );
}
 
export default LastVisits;