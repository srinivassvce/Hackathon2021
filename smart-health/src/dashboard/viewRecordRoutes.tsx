import * as React from "react";
import {Route, Switch} from "react-router";
import {Link} from "react-router-dom";
import {Patient} from "../_gen/entity";
import Page from "../common/page";
import Allergens from "../details/allergens";
import LastVisits from "../details/lastVisits";
import Medicines from "../details/medicines";
import Dashboard from "./dashboard";

export interface ViewRecordProps {
	doctorId?: string;
	patientId: string;
	setPatientId: (patientId: number) => void;
}

const ViewRecordRoutes: React.FunctionComponent<ViewRecordProps> = (props) => {
	const {patientId, doctorId} = props;
	return (
		<Switch>
			<Route path={"/viewRecord/dashboard"}>
				<Dashboard patientId={props.patientId} />
			</Route>
			<Route path={"/viewRecord/allergens"}>
				<Allergens patientId={props.patientId} />
			</Route>
		</Switch>
	)

};

export default ViewRecordRoutes;