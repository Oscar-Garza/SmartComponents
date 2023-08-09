import Main from "./Main.main";
import { useEffect, useState } from "react";

//Styles
import "./Main.style.css";

// Libraries
import { message } from "antd";

export const MainComponent = () => {
	useEffect(() => {
		console.log("testing the console with Main");
	}, []);

	const [inputVal, setInputVal] = useState("");

	const [messageApi, contextHolder] = message.useMessage();

	const displayMessage = () => {
		messageApi.info(inputVal);
	};

	const onInputChange = (event) => {
		setInputVal(event.target.value);
	};

	return (
		<Main
			popMessage={contextHolder}
			onBtnClick={displayMessage}
			onInputChange={onInputChange}
			inputValue={inputVal}
		/>
	);
};
