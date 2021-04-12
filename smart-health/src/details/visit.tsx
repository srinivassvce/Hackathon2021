import {useContext, useState} from "react";
import * as React from "react";
import {Accordion, AccordionContext, Button, useAccordionToggle} from "react-bootstrap";
import Card from "react-bootstrap/Card"
import {FaMinus, FaPlus} from "react-icons/all";
import {PatientMedicineModel, PatientVisitModel} from "../_gen/entity";
import {ArrowDown, ArrowLeft, ArrowRight, Plus} from "react-bootstrap-icons";
import MenuBar from "../common/menuBar";
import MedicineTableContent from "./MedicineTableContent";

function ContextAwareToggle({ children, eventKey, callback }) {
	const currentEventKey = useContext(AccordionContext);

	const decoratedOnClick = useAccordionToggle(
		eventKey,
		() => callback && callback(eventKey),
	);

	const isCurrentEventKey = currentEventKey === eventKey;

	const getIcon = () => {
		return (
			isCurrentEventKey ? <FaMinus /> : <FaPlus />
		);
	}
	return (
		<div onClick={decoratedOnClick}>
			<div className={"row text-center"}>
				<div className={"col-md-11"}>
					{children}
				</div>
				<div className={"col-md-1"}>
					{getIcon()}
				</div>
			</div>
		</div>
	);
}

interface IVisitProps {
	visit: PatientVisitModel;
	id: string;
}

const formatDate = (dateNumber: number) => {
	const date = new Date(dateNumber);
	return date.toDateString();
};

const formatTime = (dateNumber: number) => {
	const date = new Date(dateNumber);
	return date.toLocaleTimeString();
};

const renderMedicines = (medicines: PatientMedicineModel[], id: string) => {
	return (
		/**/
		<Accordion defaultActiveKey="1" style={{width: "100%"}}>
			<Card>
				<Card.Header>
					<ContextAwareToggle eventKey="0" callback={() => {}}>
						Medicines ({medicines.length})
					</ContextAwareToggle>
				</Card.Header>
				<Accordion.Collapse eventKey="0">
					<Card.Body>
						<div>
							<div className={"medicine-details"}>
								<div id={`#medicine-${id}`} data-parent={`visit-${id}-accordion`}>
									<MedicineTableContent medicines={medicines} />
								</div>
							</div>
						</div>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	)
}

const Visit = (props: IVisitProps) => {
	const {visit, id} = props;
	return (
		<React.Fragment>
			<div className={"container"}>
				<div className={"row"}>
					Visited <strong>{visit.doctor.doctorName}
				</strong> at <strong>
					{visit.healthCareProvider.hcpName}
				</strong> on <strong>
					{formatDate(visit.visitDateTime)}</strong> at <strong>{formatTime(visit.visitDateTime)}</strong>
				</div>
				<div className={"row"}>
					The next visit is on <strong>
					{formatDate(visit.nextVisitDateTime)}
				</strong> at <strong>{formatTime(visit.nextVisitDateTime)}
				</strong>
				</div>
				<div className={"row"}>
					{renderMedicines(visit.medicines, id)}
				</div>
			</div>
		</React.Fragment>
	);
};
export default Visit;
