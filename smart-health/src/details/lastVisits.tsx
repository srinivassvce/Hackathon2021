import * as React from 'react';
import Page from '../common/page';
export interface LastVisitsProps {
    patientId: string;
}
 
const LastVisits: React.FunctionComponent<LastVisitsProps> = (props: LastVisitsProps) => {
    return ( 
        <Page title="Last Visits" patientId={props.patientId} >
            <div className={"container"} >

            </div>
        </Page>
     );
}
 
export default LastVisits;