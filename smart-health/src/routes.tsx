import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Dashboard from './dashboard/dashboard';
import Allergens from './details/allergens';
import Header from './common/header';
import Login from './login/login';
import Register from './login/register';
import SignUpSuccessful from './signupsuccessful';

export interface RoutesProps {

}

const Routes: React.FunctionComponent<RoutesProps> = () => {
    const [patientId, setPatientId] = React.useState("");
    const updatePatientId = (patientId: string) => {
        console.log("Upating patient id");
        console.log(patientId);
        setPatientId(patientId);
    }
    return (
        <React.Fragment>
            <Switch>
                <Redirect from="/old-path" to="/" />
                <Route path="/" exact>
                    <Login setPatientId={updatePatientId} />
                </Route>
                <Route path="/dashboard"> <Dashboard patientId={patientId} /> </Route>
                <Route path="/allergens"> <Allergens patientId={patientId} /></Route>
                <Route path="/notFound"> <Login setPatientId={() => patientId} /></Route>
                <Route exact path="/"><Login setPatientId={updatePatientId} /> </Route>
                
                <Route path="/register" component={Register} />
                <Route path="/signupsuccessful" component={SignUpSuccessful} />
            </Switch>
        </React.Fragment>

    );
}

export default Routes;
