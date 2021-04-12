import * as React from 'react';
import Page from '../common/page';
export interface MedicalHistoryProps {
    patientId: string;
}
 
const MedicalHistory: React.FunctionComponent<MedicalHistoryProps> = (props) => {
    return ( 
        <Page title="Medical History" id={props.patientId} >
            <h1>
                List of Medical History here ....
            </h1>
        </Page>
     );
}
 
export default MedicalHistory;