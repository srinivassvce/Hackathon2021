import * as React from "react";
import {Container, Nav} from "react-bootstrap";
import "../styles/menubarStyles.css";
import {Link} from "react-router-dom";

export interface MenubarProps {
}

const MenuBar: React.FunctionComponent<MenubarProps> = (props) => {

	return (
		<React.Fragment>
			<Container className="border-right border-info" style={{height:"140%"}} >
			<Nav defaultActiveKey="/home" className="flex-column">

				<div style={{paddingLeft:"10px" ,marginTop:"20px"}}>
					<br/>
					{/*<Link className="menuItem" to="/dashboard">Home</Link>*/}
					{/*<hr></hr>*/}
				<Link className="menuItem" to="/share">Share Health Records</Link><br/>
				<Link className="menuItem" to="/view">View Health Records</Link><br/>
				<Link className="menuItem" to="/dashboard" >Upload Reports</Link><br/>
				<Link className="menuItem" to="/dashboard">Search Alternate Medicine</Link><br/>
					<hr></hr>
				<Nav.Link className="menuItem"  eventKey="disabled" disabled>
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
