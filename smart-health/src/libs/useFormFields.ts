import { SyntheticEvent, useState } from "react";

export function useFormFields(initialState: any) {
	const [fields, setValues] = useState(initialState);

	return [
		fields,
		(event) => {
			setValues({
				...fields,
				[event.target.name]: event.target.value,
			});
		},
	];
}
