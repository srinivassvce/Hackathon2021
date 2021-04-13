import {useEffect, useState} from "react";
import * as React from 'react';
import {PatientAllergyModel, PatientVisitModel} from "../_gen/entity";
import {getAllergens, getPatientVisits} from "../api";
import Page from '../common/page';
import Visit from "./visit";
export interface LastVisitsProps {
    patientId: string;
  othersView: boolean;
}
 
const LastVisits: React.FunctionComponent<LastVisitsProps> = (props: LastVisitsProps) => {
  const [patientVisits, setPatientVisits] = useState<PatientVisitModel[]>([]);

  useEffect(
    () => {
      const getAndSetPatientVisits = async () => {
        const patientVisits: PatientVisitModel [] = await getPatientVisits(props.patientId);
        setPatientVisits(patientVisits);
      };
      getAndSetPatientVisits();
    }, []
  );

  const renderAllergensRows = () => {
    return (
      <tbody>
      {patientVisits.map(
        visit =>
          (
            <tr>
              <th scope={"row"}>{visit.allergyType}</th>
              <td>{visit.allergens}</td>
              <td>{visit.symptoms}</td>
            </tr>
          )
      )}
      </tbody>
    );
  };

  function renderLastVisitsContentArea() {
    return <div className="container">
      <div className={"row text-info display-4 m-4"}>
        You have a total of {patientVisits.length} Patient visits.
      </div>
      <div className={"container-fluid"}>
        {
          patientVisits.map(
            (visit, index) => (
              <React.Fragment>
                <div className={"row"}>
                  <Visit visit={visit} id={index}/>
                </div>
                <hr/>
              </React.Fragment>
            )
          )
        }
      </div>

    </div>;
  }

  return (
    <React.Fragment>
    {props.othersView ? renderLastVisitsContentArea() :
           <Page patientId={props.patientId} title="Visits">
             {renderLastVisitsContentArea()}
           </Page>
    }
</React.Fragment>
  );
}
 
export default LastVisits;