import * as React from 'react';
import Page from '../common/page';
export interface MedicalInsurancesProps {
    patientId: string;
}
 
const MedicalInsurances: React.FunctionComponent<MedicalInsurancesProps> = (props) => {
    return ( 
        <Page title="Medical Insurances" patientId={props.patientId} >
            <h1>
                List of Medical Insurances here ....
            </h1>
        </Page>
     );
}
 
export default MedicalInsurances;