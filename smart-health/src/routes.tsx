import {useState} from "react";
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Dashboard from './dashboard/dashboard';
import ShareHealthRecord from './dashboard/shareHealthRecord';
import ViewRecord from "./dashboard/viewRecord";
import Allergens from './details/allergens';
import Doctors from './details/doctors';
import EmergencyContacts from './details/emergencyContacts';
import Immunizations from './details/Immunizations';
import LastVisits from './details/lastVisits';
import MedicalHistory from './details/medicalHistory';
import MedicalInsurances from './details/medicalInsurances';
import Medicines from './details/medicines';
import UploadPatientReports from './details/uploadPatientReports';
import Login from './login/login';
import Profile from "./login/profile";
import Register from './login/register';
import SignUpSuccessful from './signupsuccessful';

export interface RoutesProps {

}

const Routes: React.FunctionComponent<RoutesProps> = () => {
    const [patientId, setPatientId] = React.useState<number>();
    const updatePatientId = (patientId: number) => {
        setPatientId(patientId);
    }
    const [isDoctor, setIsDoctor] = useState(false);
    const updateDoctorId = (docId: string) => {
        setDoctorId(docId);
        setIsDoctor(true);
    }
    const [doctorId, setDoctorId] = React.useState("");

    return (
        <React.Fragment>
            <Switch>
                <Redirect from="/old-path" to="/" />
                <Route path="/" exact>
                    <Login setPatientId={updatePatientId} setDoctorId={updateDoctorId}/>
                </Route>
                <Route path="/dashboard"> <Dashboard isViewRecord={false} patientId={patientId} /> </Route>
                <Route path="/profile"> <Profile patientId={patientId}/> </Route>
                <Route path="/view"> <ViewRecord patientId={patientId} doctorId={doctorId}/> </Route>
                <Route path="/share"> <ShareHealthRecord patientId={patientId}/> </Route>
                {/*<Route path="/allergens"> <Allergens patientId={patientId} /></Route>*/}
                {/*<Route path="/medicines"> <Medicines patientId={patientId} /></Route>*/}
                {/*<Route path="/doctors"> <Doctors patientId={patientId} /></Route>*/}
                {/*<Route path="/immunizations"> <Immunizations patientId={patientId} /></Route>*/}
                {/*<Route path="/insurances"> <MedicalInsurances patientId={patientId} /></Route>*/}
                {/*<Route path="/visits"> <LastVisits patientId={patientId} /></Route>*/}
                {/*<Route path="/history"> <MedicalHistory patientId={patientId} /></Route>*/}
                {/*<Route path="/contacts"> <EmergencyContacts patientId={patientId} /></Route>*/}
                <Route path="/notFound"> <Login setPatientId={() => patientId} /></Route>
                <Route exact path="/"><Login setPatientId={updatePatientId} /> </Route>
                
                <Route path="/register" component={Register} />
                <Route path="/signupsuccessful" component={SignUpSuccessful} />
            </Switch>
        </React.Fragment>

    );
}

export default Routes;
