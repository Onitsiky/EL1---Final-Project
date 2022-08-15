import React from "react";
import './main.css';
import MyButton from "./MyButton";

const PersButton : React.FC<any> = () => {
    return(
        <>
            <MyButton label="Continue with Google">
                <i className="fab fa-google"></i>
            </MyButton>
            <MyButton label="Continue with Github">
                <i className="fab fa-github"></i>
            </MyButton>
            <MyButton label="Continue with Facebook">
                <i className="fab fa-facebook"></i>
            </MyButton>
            <br/>
        </>
    )
}
export default PersButton;