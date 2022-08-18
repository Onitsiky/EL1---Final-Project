import MyInput from "./MyInput";
import React from "react";
import '../App.css';


const Main : React.FC<any> = () => {
    return (
            <div className="position-absolute one col-lg-8 d-flex">
                <div className="one col-md-6 login">
                    <MyInput/>
                </div>
                <div className="two col-md-6 col-sm-0 col-lg-6">

                </div>
            </div>
    )
}
export default Main;