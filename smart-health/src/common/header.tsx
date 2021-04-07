import * as React from 'react';
import {getPatientName} from "../api";
import {FaUser} from "react-icons/fa";
import logo from "../assets/healthcare.jpg"
export interface HeaderProps {
    patientId: string;
    currentPageTitle: string;
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {

    const { patientId, currentPageTitle } = props;
    const [name, setName] = React.useState("");
    React.useEffect(
        () => {
            console.log(patientId);
            if (patientId !== undefined && patientId !== "") {
                getAndSetName();
            }
        }, [patientId]
    )

    const getAndSetName = async ()  => {
        const name = await getPatientName(patientId);
        setName(name);
    }
    const userString = patientId === "" ? "Please login" : name;
    console.log(userString);
    return (
        <React.Fragment>
            <div className="bg-info container-fluid text-white jumbotron">
                <div className="row">
                    <div className="col-1">
                        <img src={logo} alt="logo for healthcare" style={{ height: "100%", width: "100%" }} />
                    </div>
                    <div className="col-9 text-center display-4">
                        {currentPageTitle}
                    </div>
                    <div className="col-2 text-right">
                        <FaUser className="m-2"/>
                        {userString}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;