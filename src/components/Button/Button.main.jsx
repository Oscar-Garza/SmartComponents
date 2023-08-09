import "./Button.style.css";

// Libraries
import { Button } from "antd";

const ButtonMain = ({ onButtonClick }) => {
	return (
		<div className="container">
			<Button onClick={onButtonClick} className="button">Clickeame :D</Button>
		</div>
	);
};

export default ButtonMain;
