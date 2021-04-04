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
}


export default Dashboard;

function getAddAllergenNode(showModal: boolean, setModal: (x: boolean) => void): React.ReactNode {
    return (
        <ReactModal
            isOpen={showModal}
        >
            <div className="row m-auto">
                <button onClick={() => setModal(false)}>
                    close
                </button>
            </div>
            <hr />
            <div className="row">
                <AddAllergen patientId={""}/>
            </div>
        </ReactModal>
    )
}
