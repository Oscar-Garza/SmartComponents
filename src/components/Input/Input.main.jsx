import "./Input.style.css";

import { Input } from "antd";

const InputMain = ({ inputValue, onInputChange }) => {
	return (
		<div className="container">
			<Input value={inputValue} onChange={onInputChange} />
		</div>
	);
};

export default InputMain;
