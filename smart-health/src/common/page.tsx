import * as React from "react";
import Header from "./header";

export interface PageProps {
	patientId: string;
	title: string;
}

const Page: React.FunctionComponent<PageProps> = (props) => {
	return (
		<React.Fragment>
			<Header currentPageTitle={props.title} patientId={props.patientId} />
			{props.children}
		</React.Fragment>
	);
};

export default Page;
