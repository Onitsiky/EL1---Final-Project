import React, {useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {app} from "./Firebase_config/Config";

const AuthRoutes : React.FC<any> = (props) => {
    const { children } = props;
    const auth = getAuth(app);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        AuthCheck();
        return () => AuthCheck();
    },[auth])

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if(user){
            setLoading(false);
            navigate("/");
        }
        else {
            navigate("/login");
            console.log("Unauthorized !");
            setLoading(true);

        }
    })
    if (loading) return <p>Loading ...</p>

    return(
        <>
            {children}
        </>
    )
}
export default AuthRoutes;