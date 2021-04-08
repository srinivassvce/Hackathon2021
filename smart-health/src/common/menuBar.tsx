import * as React from "react";
import {Container, Nav} from "react-bootstrap";
import "../styles/menubarStyles.css";

export interface MenubarProps {
}

const MenuBar: React.FunctionComponent<MenubarProps> = (props) => {

	return (
		<React.Fragment>
			<Container className="border-right border-info" style={{height:"140%"}}>
			<Nav defaultActiveKey="/home" className="flex-column">
				<div style={{paddingLeft:"10px"}}>
				<Nav.Link className="menuItem" href="/home">Share Health Records</Nav.Link>
				<Nav.Link className="menuItem" eventKey="link-1">View Health Records</Nav.Link>
				<Nav.Link className="menuItem" eventKey="link-2">Upload Reports</Nav.Link>
				<Nav.Link className="menuItem" eventKey="link-2">Search Alternate Medicine</Nav.Link>
					<hr></hr>
				<Nav.Link className="menuItem" eventKey="disabled" disabled>
					About Us
				</Nav.Link>
				<Nav.Link className="menuItem" eventKey="disabled" disabled>
					Contact Us
				</Nav.Link>
				</div>
			</Nav>
			</Container>
		</React.Fragment>
	);

}

export default MenuBar;
