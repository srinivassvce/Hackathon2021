import * as React from "react";
import {Dropdown} from "react-bootstrap";
import {FaUser} from "react-icons/fa";
import NotifyMe from "react-notification-timeline";
import {Link} from "react-router-dom";
import {getNotifications, getPatientName} from "../api";
import logo from "../assets/healthcare.jpg";

export interface HeaderProps {
	patientId: string;
	currentPageTitle: string;
	displayMenu: (agr: boolean) => void;
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {

	const {patientId, currentPageTitle, displayMenu} = props;
	const [name, setName] = React.useState("");
	React.useEffect(
		() => {
			if (patientId !== undefined && patientId !== "") {
				getAndSetName();
			}
		}, [patientId]
	);
	const [notifications, setNotifications] = React.useState("");
	React.useEffect(
		() => {
			if (patientId !== undefined && patientId !== "") {
				getAndSetNotifications();
			}
		}, [patientId]
	);
	const [showMenu, setShowMenu] = React.useState(false);

	const getAndSetName = async () => {
		const name = await getPatientName(patientId);
		setName(name);
	};

	const getAndSetNotifications= async () => {
		const notifications = await getNotifications(patientId);
		setNotifications(notifications);
	};

	const toggleMenu = () => {
		setShowMenu(!showMenu);
		displayMenu(showMenu);
	};

	const userString = patientId === "" ? "Please login" : name;
	console.log(userString);
	const data = [
		{
			"update": "70 new employees are shifted",
			"timestamp": 1596119688264
		},
		{
			"update": "Time to Take a Break, TADA!!!",
			"timestamp": 1596119686811
		}
	];
	return (
		<React.Fragment>
			<div className="bg-info container-fluid text-white">
				<div className="row">
					<div className="col-1 text-center mt-4">
						<button onClick={toggleMenu}> =</button>
					</div>
					<div className="col-1">
						<img src={logo} alt="logo for healthcare" style={{height: "100%", width: "100%"}}/>
					</div>
					<NotifyMe
						data={notifications}
						storageKey='notific_key'
						notific_key='timestamp'
						notific_value='update'
						heading='Notification Alerts'
						sortedByKey={false}
						showDate={true}
						size={64}
						color="yellow"
					/>
					<div className="col-8 text-center display-4">
						{currentPageTitle}
					</div>
					<div className="col-2 text-right mt-3">

						{patientId === "" ? <a href="\">{"Please Login"}</a> :

						 <Dropdown>
							 <Dropdown.Toggle variant="success" id="dropdown-basic">
								 <FaUser className="m-2"/> {name}
							 </Dropdown.Toggle>

							 <Dropdown.Menu>
								 <Dropdown.Item>
									 <Link className="menuItem" to="/profile">Profile</Link>
								 </Dropdown.Item>
								 <Dropdown.Item href="/">Logout</Dropdown.Item>
							 </Dropdown.Menu>
						 </Dropdown>
						}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Header;