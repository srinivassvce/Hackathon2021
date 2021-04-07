import * as React from 'react';
import Page from '../common/page';
export interface MedicinesProps {
    patientId: string;
}
 
const Medicines: React.FunctionComponent<MedicinesProps> = (props) => {
    return ( 
        <Page title="Medicines" patientId={props.patientId} >
            <h1>
                List of Medications here ....
            </h1>
        </Page>
     );
}
 
export default Medicines;