import React, {useState} from "react";
import MyButton from "./MyButton";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "./Firebase_config/Config";
import {Link, useNavigate} from "react-router-dom";

type IRegister = {
}

const Register : React.FC<IRegister> = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');

    const signUp = async () =>{
        if(confirm === password){
            createUserWithEmailAndPassword(auth, email, password)
                .then((res) => {
                    console.log(res.user.uid)
                    navigate("/login");
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }
        else {
            alert("Password must be the same ")
        }
    }
    return(
        <div>
            <div className="container text-light text-md-center">
                <br/>
                <h3 >Create a new account </h3>
                <span className="text-md-start">Enter your email address </span>
                <br/>
                <input type="email"
                       className="mx-md-5 mb-3 mt-md-4 mt-sm-4 p-sm-2 p-md-2 rounded col-md-6 col-sm-11"
                       placeholder="Email address..."
                       onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
                <span>Create a new password</span>
                <br/>
                <input type="password"
                       className="mx-md-5 mb-3 mt-md-4 mt-sm-4 p-sm-2 p-md-2 rounded col-md-6 col-sm-11"
                       placeholder="Password..."
                       onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <span>Confirm your password</span>
                <br/>
                <input type="password"
                        className="mx-md-5 mb-3 mt-md-4 mt-sm-4 p-sm-2 p-md-2 rounded col-md-6 col-sm-11"
                        placeholder="Confirm password..."
                       onChange={(e) => setConfirm(e.target.value)}
                />
                <MyButton label="Sign up" handleClick={() => signUp()}/>
                <br/>
                <small>
                    <p>Already have an account ? <Link to="/login">Login</Link> </p>
                </small>
            </div>
        </div>
    )
}

export default Register;