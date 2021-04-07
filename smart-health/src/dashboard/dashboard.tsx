import * as React from 'react';
import Tile from '../tile/tile';
import "../styles/dashboardStyles.css";
import { getAllergen, getAllergens, getDoctors, getMedicines, getImmunizations, 
    getMedicalInsurances, getLastVisits, getMedicalHistory, getEmergencyContacts } from '../api';
import Page from '../common/page';
import AddAllergen from '../addPages/addAllergen';

export interface DashboardProps {
    patientId: string;
}

const Dashboard: React.FunctionComponent<DashboardProps> = (props) => {
    const getFormattedAllergens = async (patientId: string) => {
        const allergens = await getAllergens(patientId)
        console.log(allergens);
        const lengthToDisplay = allergens.length > 3 ? 3 : allergens.length
        const formattedAllergens = [];
        for(let i =lengthToDisplay - 1 ; i>=0; i--) {
            const allergy = allergens[i];
            formattedAllergens.push(
                `${allergy.allergyType} - ${allergy.allergens} - ${allergy.symptoms}`
            )
        }
        if(lengthToDisplay < allergens.length) {
            formattedAllergens.push("(Click for more.)")
        }
        return {allergens: formattedAllergens};
    }
    const responsiveClasses = "col-12 col-sm-6 col-md-4";
    return (
        <React.Fragment>
            
            <Page patientId={props.patientId} title="Dashboard">
            <div className="container-fluid">
                <div className="row tileRow">
                    <div className={responsiveClasses}>
                        <Tile
                            label={"Allergens"}
                            onExpand={() => { }}
                            propertyName={"allergens"}
                            requestFunction={() => getFormattedAllergens(props.patientId)}
                            navigateTo={"/allergens"}
                            addEntityContent={getAddAllergenNode}
                            key="allergens"
                        />
                    </div>
                    <div className={responsiveClasses}>
                        <Tile
                            label={"Medicines"}
                            onExpand={() => { }}
                            propertyName={"medicines"}
                            requestFunction={() => getMedicines(props.patientId)}
                            key="medicines"
                        />
                    </div>
                    <div className={responsiveClasses}>
                        <Tile
                            label={"Doctors"}
                            onExpand={() => { }}
                            propertyName={"doctors"}
                            requestFunction={() => getDoctors()}
                            key="doctors"
                        />
                    </div>
                    <div className={responsiveClasses}>
                        <Tile
                            label={"Immunizations"}
                            onExpand={() => { }}
                            propertyName={"immunizations"}
                            requestFunction={() => getImmunizations()}
                            key="immunizations"
                        />
                    </div>
                    <div className={responsiveClasses}>
                        <Tile
                            label={"Medical Insurances"}
                            onExpand={() => { }}
                            propertyName={"medicalInsurances"}
                            requestFunction={() => getMedicalInsurances()}
                            key="medicalInsurances"
                        />
                    </div>
                    <div className={responsiveClasses}>
                        <Tile
                            label={"Last Visits"}
                            onExpand={() => { }}
                            propertyName={"lastVisits"}
                            requestFunction={() => getLastVisits()}
                            key="lastVisits"
                        />
                    </div>
                    <div className={responsiveClasses}>
                        <Tile
                            label={"Medical History"}
                            onExpand={() => { }}
                            propertyName={"medicalHistory"}
                            requestFunction={() => getMedicalHistory()}
                            key="medicalHistory"
                        />
                    </div>
                    <div className={responsiveClasses}>
                        <Tile
                            label={"Emergency Contacts"}
                            onExpand={() => { }}
                            propertyName={"emergencyContacts"}
                            requestFunction={() => getEmergencyContacts()}
                            key="emergencyContacts"
                        />
                    </div>
                </div>
            </div>
           </Page>
        </React.Fragment>
    );

    function getAddAllergenNode(showModal: boolean, setModal: (x: boolean) => void): React.ReactNode {
        return (
            <AddAllergen patientId={props.patientId} showModal={showModal} setModal={setModal}/>
        )
    }
}


export default Dashboard;


