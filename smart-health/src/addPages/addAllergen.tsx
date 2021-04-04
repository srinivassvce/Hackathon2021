import * as React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Page from '../common/page';

export interface AddAllergenProps {
    patientId: string;
}
 
const AddAllergen: React.FunctionComponent<AddAllergenProps> = ({patientId}) => {
    return ( 
        <div>
            All allergen modal should appear in this area.
        </div>
     );
}
 
export default AddAllergen;