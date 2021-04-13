import * as React from "react";
import {Col, Row} from "react-bootstrap";
import Header from "./header";
import MenuBar from "./menuBar";

export interface PageProps {
	patientId: string;
	title: string;
}

const Page: React.FunctionComponent<PageProps> = (props) => {

	const [showMenu, setShowMenu] = React.useState(false);
	return (
		<React.Fragment>
			<Header currentPageTitle={props.title} patientId={props.patientId} displayMenu={setShowMenu} />
			{/*Stop dancing*/}
			<div className={"container-fluid"}>
				<div className={"row"} >
					{showMenu ? <Col className="left" xs={2.5}><MenuBar/></Col> : undefined}
					<div className={"col"}>
						{props.children}
					</div>
				</div>
			</div>

		</React.Fragment>
	);
};

export default Page;
