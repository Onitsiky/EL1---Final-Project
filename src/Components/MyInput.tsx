import React, {useState} from "react";
import MyButton from "./MyButton";
import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword} from "firebase/auth";
import {Link, useNavigate} from "react-router-dom";
import {app} from "./Firebase_config/Config";
import "./main.css";

const MyInput : React.FC<any> = () => {
    const auth = getAuth(app);
    const navigate= useNavigate();
    const [authing, setAuthing] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const signInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then((response) => {
                console.log(response.user.uid);
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            })
    }
    const login = async () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((res) =>{
                console.log(res.user.email);
                navigate("/")
            })
            .catch((err) => {
                console.log(err);
                setAuthing(false);
            })
    }
    return(
        <div>
            <div className="container text-md-center">
                <br/>
                <h3 className="mt-md-3 text-light">Welcome !</h3>
                <h6 className="text-light">Please sign in or <Link to="/register">sign up</Link> </h6>

                <input type="text"
                       className="mx-md-5 mt-md-4 mt-sm-4 p-sm-2 p-md-2 rounded col-md-6 col-sm-11"
                       placeholder="Email..."
                       onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
                <input type="password"
                       className="mx-md-5 mt-md-3 mb-md-3 p-md-2 rounded col-md-6 col-sm-11"
                       placeholder="Password..."
                       onChange={(e) => setPassword(e.target.value)}
                />

            <MyButton label="Sign in"
                      disable={authing}
                      handleClick={() => login()}
            />
                <p className="text-center text-light">OR</p>
                <MyButton label="Continue with Google"
                          disable={authing}
                          handleClick={() => signInWithGoogle()}>
                    <i className="fab fa-google"></i>
                </MyButton>
                <MyButton label="Continue with Github">
                    <i className="fab fa-github"></i>
                </MyButton>
                <MyButton label="Continue with Facebook"
                          disable={authing} >
                    <i className="fab fa-facebook"></i>
                </MyButton>
                <br/>
                <br/>
            </div>
        </div>
    )
}


export default MyInput;