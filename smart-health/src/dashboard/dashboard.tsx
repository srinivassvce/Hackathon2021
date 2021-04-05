import * as React from 'react';
import Tile from '../tile/tile';
import "../styles/dashboardStyles.css";
import { getAllergens, getMedicines } from '../api';
import Page from '../common/page';
import AddAllergen from '../addPages/addAllergen';
import ReactModal from 'react-modal';

export interface DashboardProps {
    patientId: string;
}

const Dashboard: React.FunctionComponent<DashboardProps> = (props) => {
    
  console.log(props);
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
                            requestFunction={() => getAllergens(props.patientId)}
                            navigateTo={"/allergens"}
                            addEntityContent={getAddAllergenNode}
                        />
                    </div>
                    <div className={responsiveClasses}>
                        <Tile
                            label={"Medicines"}
                            onExpand={() => { }}
                            propertyName={"medicines"}
                            requestFunction={() => getMedicines(props.patientId)}
                        />
                    </div>
                    <div className={responsiveClasses}>
                        <Tile
                            label={"Allergens"}
                            onExpand={() => { }}
                            propertyName={"allergens"}
                            requestFunction={() => getAllergens(props.patientId)}
                        />
                    </div>
                    <div className={responsiveClasses}>
                        <Tile
                            label={"Medicines"}
                            onExpand={() => { }}
                            propertyName={"medicines"}
                            requestFunction={() => getMedicines(props.patientId)}
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


