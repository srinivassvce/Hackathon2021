import * as React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Page from '../common/page';
export interface AllergensProps {
    patientId: string;
}
 
const Allergens: React.FunctionComponent<AllergensProps> = (props) => {
    return ( 
        <Page title="Allergens" patientId={props.patientId} >
            <h1>
                Yet to be implemented
            </h1>
        </Page>
     );
}
 
export default Allergens;