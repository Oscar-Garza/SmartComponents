import [FTName] from "./[FTName].main";
import { useEffect } from "react";

//Styles
import "./[FTName].style.css";

export const [FTName]Component = () => {
    useEffect(() => {
        console.log("testing the console with [FTName]");
    }, []);

    return <[FTName] />;
};
