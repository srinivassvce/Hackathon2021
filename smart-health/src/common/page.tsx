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
			<Row>
				{showMenu ? <Col className="left" xs={2}><MenuBar/></Col> : undefined}
				<Col> {props.children}</Col>
			</Row>
		</React.Fragment>
	);
};

export default Page;
