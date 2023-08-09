import { useEffect } from "react";

// Components
import Button from "./Button.main";

//Styles
import "./Button.style.css";

export const ButtonComponent = ({ onClick }) => {
	useEffect(() => {
		console.log("testing the console with Button");
	}, []);

	const onButtonClick = () => {
		console.log("Click en el componente del boton 😀");
		onClick();
	};

	return <Button onButtonClick={onButtonClick} />;
};
