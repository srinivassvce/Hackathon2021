import * as React from 'react';
import {Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {getDoctorName, getPatientName} from "../api";
import {FaPen, FaBars, FaHome, FaHospitalAlt, FaUser} from "react-icons/fa";
export interface HeaderProps {
    id: string;
    currentPageTitle: string;
    displayMenu: (agr:boolean)=>void;
    isDoctor?: boolean;
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {

    const { id, currentPageTitle, displayMenu} = props;
    const [name, setName] = React.useState("");
    React.useEffect(
        () => {
            console.log(id);
            if (id !== undefined && id !== "") {
                getAndSetName();
            }
        }, [id]
    )

    const [showMenu, setShowMenu] = React.useState(false);

    const getAndSetName = async ()  => {
        const name = props.isDoctor ? await getDoctorName(id) : await getPatientName(id);
        setName(name);
    }

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        displayMenu(showMenu);
    };

    const userString = id === "" ? "Please login" : name;
    console.log(userString);
    return (
        <React.Fragment>
            <div className="bg-info container-fluid text-white">
                <div className="row">
                    <div className="col-1 text-center mt-4">
                        <Link className="menuItem" to="/dashboard"><FaHome size={28} className="ml-3"></FaHome></Link>
                        <a onClick={toggleMenu} > <FaBars size={28} className="m-2"></FaBars></a>

                    </div>
                    <div className="col-1">
                        {/*<img src={logo} alt="logo for healthcare" style={{ height: "100%", width: "100%" }} />*/}
                        <FaHospitalAlt size={70}></FaHospitalAlt>
                    </div>
                    <div className="col-8 text-center display-4">
                        {currentPageTitle}
                    </div>
                    <div className="col-2 text-right mt-3">

                        {id === "" ? <a href="\">{"Please Login"}</a> :

                         <Dropdown>
                             <Dropdown.Toggle variant="success" id="dropdown-basic">
                                 {!props.isDoctor ? (<FaUser className="m-2"/>) : (<FaPen className={"m-2"}/>) } {name}
                             </Dropdown.Toggle>

                             <Dropdown.Menu>
                                 <Dropdown.Item >
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
}

export default Header;