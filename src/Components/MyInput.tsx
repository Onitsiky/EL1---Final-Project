import React from "react";
import MyButton from "./MyButton";
import PersButton from "./PersButton";

const MyInput : React.FC<any> = () => {
    return(
        <div>
            <div className="container text-md-center">
                <br/>
                <h3 className="mt-md-3 text-light">Welcome !</h3>
                <h6 className="text-light">Please sign in or sign up</h6>
                <input type="text" className="mx-md-5 mt-md-4 p-md-2 rounded col-md-6 " placeholder="Email..." />
                <br/>
                <input type="password" className="mx-md-5 mt-md-3 mb-md-3 p-md-2 rounded col-md-6" placeholder="Password..."/>
            <MyButton label="Log in"/>
                <p className="text-center text-light">OR</p>
                <PersButton/>
            </div>
        </div>
    )
}


export default MyInput;