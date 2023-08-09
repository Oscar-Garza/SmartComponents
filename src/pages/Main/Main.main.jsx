import "./Main.style.css";

// Components
import { ButtonComponent } from "../../components/Button";
import { InputComponent } from "../../components/Input";

const MainMain = ({ popMessage, onBtnClick, inputValue, onInputChange }) => {
	return (
		<div className="container">
			{popMessage}
			<InputComponent value={inputValue} onChange={onInputChange} />
			<ButtonComponent onClick={onBtnClick} />
		</div>
	);
};

export default MainMain;
