import * as React from "react";
import {Link} from "react-router-dom";

export interface TileProps {
	label: string;
	onExpand: () => void;
	requestFunction: () => Promise<any>;
	propertyName: string;
	navigateTo?: string;
	addEntityContent?: (showModal: boolean, setModal: (x: boolean) => void) => React.ReactNode;
	isAddNotAllowed?: boolean;
}

const onClick = (event: React.MouseEvent<HTMLButtonElement>, label: string, setModal: (x: boolean) => void) => {
	event.preventDefault();
	setModal(true);
};


const Tile: React.FunctionComponent<TileProps> = (props) => {
	const {propertyName, requestFunction} = props;
	const [data, setData] = React.useState([]);
	const [showModal, setShowModal] = React.useState(false);

	React.useEffect(
		() => {
			const getAndSetData = async () => {
				const result = await requestFunction();
				result === undefined ? setData([]) : setData(result[propertyName]);
			};

			getAndSetData();
		}, [propertyName, requestFunction, showModal]
	);

	const {navigateTo, addEntityContent} = props;
	return (
		<React.Fragment>
			{addEntityContent ? addEntityContent(showModal, setShowModal) : null}
			<Link to={navigateTo ? navigateTo : "/notFound"}>
				<button className="tile border border-info">
					<h4>
                        <span>
                            {props.label}
                        </span>
						<button disabled={props.isAddNotAllowed} onClick={(e) => onClick(e, props.label, setShowModal)} className="addIcon">+</button>
					</h4>
					<hr/>
					<div>
						{
							data.map(
								item => (
									<div className="item">
										{item}
									</div>
								)
							)
						}
					</div>
				</button>

			</Link>
		</React.Fragment>
	);
};

export default Tile;