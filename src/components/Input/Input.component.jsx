import { useEffect } from "react";

import Input from "./Input.main";

//Styles
import "./Input.style.css";

export const InputComponent = ({ onChange = () => {}, value }) => {
	useEffect(() => {
		console.log("testing the console with Input");
	}, []);

	const onInputChange = (event) => {
		onChange(event);
	};

	return <Input inputValue={value} onInputChange={onInputChange} />;
};
