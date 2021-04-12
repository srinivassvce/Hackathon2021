import * as React from 'react';
import {Dropdown} from "react-bootstrap";
import {getPatientName} from "../api";
import {FaUser} from "react-icons/fa";
import logo from "../assets/healthcare.jpg"
export interface HeaderProps {
    patientId: string;
    currentPageTitle: string;
    displayMenu: (agr:boolean)=>void;
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {

    const { patientId, currentPageTitle, displayMenu} = props;
    const [name, setName] = React.useState("");
    React.useEffect(
        () => {
            console.log(patientId);
            if (patientId !== undefined && patientId !== "") {
                getAndSetName();
            }
        }, [patientId]
    )

    const [showMenu, setShowMenu] = React.useState(false);

    const getAndSetName = async ()  => {
        const name = await getPatientName(patientId);
        setName(name);
    }

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        displayMenu(showMenu);
    };

    const userString = patientId === "" ? "Please login" : name;
    console.log(userString);
    return (
        <React.Fragment>
            <div className="bg-info container-fluid text-white">
                <div className="row">
                    <div className="col-1 text-center mt-4">
                        <button onClick={toggleMenu}> = </button>
                    </div>
                    <div className="col-1">
                        <img src={logo} alt="logo for healthcare" style={{ height: "100%", width: "100%" }} />
                    </div>
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
                                 <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                 <Dropdown.Item href="/logout">Logout</Dropdown.Item>
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