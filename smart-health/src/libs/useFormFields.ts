import { useState } from "react";

export function useFormFields(initialState: any) {
	const [fields, setValues] = useState(initialState);

	return [
		fields,
		(event: { target: { name: string; value: string | number; }; }) => {
			setValues({
				...fields,
				[event.target.name]: event.target.value,
			});
		},
	];
}
