import * as React from "react";
import {Dropdown} from "react-bootstrap";
import {FaBars, FaHome, FaHospitalAlt, FaPen, FaUser} from "react-icons/fa";
import NotifyMe from "react-notification-timeline";
import {Link} from "react-router-dom";
import {getDoctorName, getNotifications, getPatientName} from "../api";

export interface HeaderProps {
	id: string;
	currentPageTitle: string;
	displayMenu: (agr: boolean) => void;
	isDoctor?: boolean;
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {

	const {id, currentPageTitle, displayMenu} = props;
	const [name, setName] = React.useState("");
	React.useEffect(
		() => {
			console.log(id);
			if (id !== undefined && id !== "") {
				getAndSetName();
			}
		}, [id]
	);
	const [notifications, setNotifications] = React.useState([]);
	React.useEffect(
		() => {
			if (id !== undefined && id !== "") {
				getAndSetNotifications();
			}
		}, [id]
	);
	const [showMenu, setShowMenu] = React.useState(false);

	const getAndSetName = async () => {
		const name = props.isDoctor ? await getDoctorName(id) : await getPatientName(id);
		setName(name);
	};
	const getAndSetNotifications = async () => {
		const notifications = await getNotifications(id);
		setNotifications(notifications);
	};

	const toggleMenu = () => {
		setShowMenu(!showMenu);
		displayMenu(showMenu);
	};
	const renderNotifyMe = () => {
		if (id === null || id === undefined || id === "") {
			return null;
		} else {
			return <NotifyMe
				data={notifications}
				storageKey='notific_key'
				notific_key='timestamp'
				notific_value='update'
				heading='Notification Alerts'
				sortedByKey={false}
				showDate={true}
				size={34}
				color="yellow"
			/>;
		}
	};
	const userString = id === "" ? "Please login" : name;
	console.log(userString);
	return (
		<React.Fragment>
			<div className="bg-info container-fluid text-white">
				<div className="row">
					<div className="col-2 text-center mt-4">
						<Link className="menuItem"  to="/dashboard"><FaHome size={28} className="ml-3"></FaHome></Link>
						<a onClick={toggleMenu}> <FaBars size={28} className="m-2"></FaBars></a>
						<FaHospitalAlt className="ml-4" size={70}></FaHospitalAlt>

					</div>
					<div className="col-6 display-4 ml-5" style={{marginTop:"3px" ,textAlign:"center"}}>
						{currentPageTitle}
					</div>
					<div className="col-2" style={{paddingTop: "10px",paddingLeft:"10px" , marginTop: "2px"}}>
						{renderNotifyMe()}
					</div>
					<div className="col-1 text-right mt-3">

						{id === "" ? <a href="\">{"Please Login"}</a> :

						 <Dropdown>
							 <Dropdown.Toggle variant="success" id="dropdown-basic">
								 {!props.isDoctor ? (<FaUser className="m-2"/>) : (<FaPen className={"m-2"}/>)} {name}
							 </Dropdown.Toggle>

							 <Dropdown.Menu>
								 <Dropdown.Item>
									 {/*className="menuItem"*/}
									 <Link  to="/profile">Profile</Link>
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