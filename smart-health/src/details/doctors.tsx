import * as React from 'react';
import Page from '../common/page';
export interface DoctorsProps {
    patientId: string;
}
 
const Doctors: React.FunctionComponent<DoctorsProps> = (props) => {
    return ( 
        <Page title="Doctors" patientId={props.patientId} >
            <h1>
                List of Doctors here ....
            </h1>
        </Page>
     );
}
 
export default Doctors;