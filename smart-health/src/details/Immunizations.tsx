import * as React from 'react';
import Page from '../common/page';
export interface ImmunizationsProps {
    patientId: string;
}
 
const Immunizations: React.FunctionComponent<ImmunizationsProps> = (props) => {
    return ( 
        <Page title="Immunizations" patientId={props.patientId} >
            <h1>
                List of Immunizations here ....
            </h1>
        </Page>
     );
}
 
export default Immunizations;