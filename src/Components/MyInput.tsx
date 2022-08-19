import React, {useState} from "react";
import MyButton from "./MyButton";
import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword,GithubAuthProvider ,FacebookAuthProvider}
    from "firebase/auth";
import {Link, useNavigate} from "react-router-dom";
import {app} from "./Firebase_config/Config";
import "./main.css";
import "../App.css";


type IMyInput = {
}

const MyInput : React.FC<IMyInput> = () => {
    const auth = getAuth(app);
    const navigate= useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<any>();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const signInWithGoogle = async () => {
        setLoading(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then((response) => {
                console.log(response.user.uid);
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
            .finally(()=> {
                setLoading(false);
            })
    }
    const login = async () => {
        setLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((res) =>{
                console.log(res.user.email);
                navigate("/")
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
            .finally(()=> {
                setLoading(false);
            })
    }
    const signInWithGihtub = () => {
        setLoading(true);

        signInWithPopup(auth, new GithubAuthProvider())
            .then((res) => {
                const credential = GithubAuthProvider.credentialFromResult(res);
                const accesstoken = credential?.accessToken;
                console.log(accesstoken)
                navigate("/");

            })
            .catch((err) => {
                console.log(err.message);
                setLoading(false);
            })
            .finally(()=> {
                setLoading(false);
            })
    }
    const signInWithFacebook = () => {
        setLoading(true);

        signInWithPopup(auth, new FacebookAuthProvider())
            .then((res) => {
                const credential = FacebookAuthProvider.credentialFromResult(res);
                const accesstoken = credential?.accessToken;
                console.log(accesstoken)
                navigate("/");
            })
            .catch((err) => {
                console.log(err.message);
                setLoading(false);
            })
            .finally(()=> {
                setLoading(false);
            })
    }

    return(
        <>
            {
                loading ?
                    <div className="load">
                        <p className="btn-shine">LOADING...</p>
                    </div>
                    :
                    <div className="position-absolute one col-lg-8 d-flex">
                        <div className="one col-md-6 login">
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
                                              handleClick={() => login()}
                                              handleClass="btn btn-light col-md-6 col-sm-12"
                                    />
                                    <p className="text-center text-light">OR</p>
                                    <MyButton label="Continue with Google"
                                              handleClick={() => signInWithGoogle()}
                                              handleClass="btn btn-light col-md-6 col-sm-12"
                                    >
                                        <i className="fab fa-google"></i>
                                    </MyButton>
                                    <MyButton label="Continue with Github"
                                              handleClass="btn btn-light col-md-6 col-sm-12"
                                              handleClick={() => signInWithGihtub()}
                                    >
                                        <i className="fab fa-github"></i>
                                    </MyButton>
                                    <MyButton label="Continue with Facebook"
                                              handleClass="btn btn-light col-md-6 col-sm-12"
                                              handleClick={() => signInWithFacebook()}
                                    >
                                        <i className="fab fa-facebook"></i>
                                    </MyButton>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className="two col-md-6 col-sm-0 col-lg-6">
                            <div className="illustration-editor">
                                <div className="code-blocks">
                                    <div className="code code-css ms-5 mt-md-5">
                                        <header>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.9999 6.675L13.1999 6.075C12.9999 5.975 12.8999 5.775 12.9999 5.675L13.8999 3.975C14.4999 2.775 13.1999 1.475 11.9999 2.075L10.2999 2.975C10.1999 3.075 9.9999 2.975 9.8999 2.775L9.2999 0.975C8.8999 -0.325 7.0999 -0.325 6.6999 0.975L6.0999 2.775C5.9999 2.975 5.7999 3.075 5.6999 2.975L3.9999 2.075C2.7999 1.475 1.4999 2.775 2.0999 3.975L2.9999 5.675C3.0999 5.775 2.9999 5.975 2.7999 6.075L0.999902 6.675C-0.300098 7.075 -0.300098 8.975 0.999902 9.375L2.7999 9.975C2.9999 9.975 3.0999 10.175 2.9999 10.275L2.0999 11.975C1.4999 13.175 2.7999 14.475 3.9999 13.875L5.6999 12.975C5.8999 12.875 6.0999 12.975 6.0999 13.175L6.6999 14.975C7.0999 16.275 8.9999 16.275 9.3999 14.975L9.9999 13.175C10.0999 12.975 10.2999 12.875 10.3999 12.975L12.0999 13.875C13.2999 14.475 14.5999 13.175 13.9999 11.975L12.9999 10.275C12.8999 10.075 12.9999 9.875 13.1999 9.875L14.9999 9.275C16.2999 8.875 16.2999 7.075 14.9999 6.675ZM7.9999 10.375C6.6999 10.375 5.5999 9.275 5.5999 7.975C5.5999 6.675 6.6999 5.575 7.9999 5.575C9.2999 5.575 10.3999 6.675 10.3999 7.975C10.3999 9.275 9.2999 10.375 7.9999 10.375Z"
                                                    fill="#4C4F5A"/>
                                            </svg>
                                            <h1>HTML</h1>
                                            <svg width="16" height="8" viewBox="0 0 16 8" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.7089 7.65105L14.8704 2.02908C15.1112 1.80937 15.2528 1.51212 15.2528 1.18902C15.2528 0.865913 15.1112 0.56866 14.8704 0.348951C14.6296 0.129241 14.3038 0 13.9497 0C13.5956 0 13.2698 0.129241 13.029 0.348951L7.75989 5.1567L2.49077 0.348951C2.24998 0.129241 1.9242 0 1.57009 0C1.21598 0 0.890202 0.129241 0.649409 0.336026C0.380287 0.568659 0.252808 0.878837 0.252808 1.18902C0.252808 1.48627 0.380286 1.78352 0.621079 2.02908C2.23581 3.51535 6.42844 7.3538 6.71173 7.6252L6.74006 7.65105C7.24998 8.11632 8.19898 8.11632 8.7089 7.65105Z"
                                                    fill="#4C4F5A"/>
                                            </svg>
                                        </header>
                                        <div className="code-content">
                                            <code>
                                                <p className="line-1"><span className="c-y">{"<div>"}</span>
                                                </p><br />
                                                <p className="line-2"><span className="c-p">Hello welcome to my page.</span></p><br />
                                                <p className="line-3"><span className="c-o">Onitsiky !</span></p><br />
                                                <p className="line-4"><span className="c-y">{"</div>"}</span></p><br />
                                            </code>
                                        </div>
                                    </div>
                                    <div className="code code-css second">
                                        <header>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.9999 6.675L13.1999 6.075C12.9999 5.975 12.8999 5.775 12.9999 5.675L13.8999 3.975C14.4999 2.775 13.1999 1.475 11.9999 2.075L10.2999 2.975C10.1999 3.075 9.9999 2.975 9.8999 2.775L9.2999 0.975C8.8999 -0.325 7.0999 -0.325 6.6999 0.975L6.0999 2.775C5.9999 2.975 5.7999 3.075 5.6999 2.975L3.9999 2.075C2.7999 1.475 1.4999 2.775 2.0999 3.975L2.9999 5.675C3.0999 5.775 2.9999 5.975 2.7999 6.075L0.999902 6.675C-0.300098 7.075 -0.300098 8.975 0.999902 9.375L2.7999 9.975C2.9999 9.975 3.0999 10.175 2.9999 10.275L2.0999 11.975C1.4999 13.175 2.7999 14.475 3.9999 13.875L5.6999 12.975C5.8999 12.875 6.0999 12.975 6.0999 13.175L6.6999 14.975C7.0999 16.275 8.9999 16.275 9.3999 14.975L9.9999 13.175C10.0999 12.975 10.2999 12.875 10.3999 12.975L12.0999 13.875C13.2999 14.475 14.5999 13.175 13.9999 11.975L12.9999 10.275C12.8999 10.075 12.9999 9.875 13.1999 9.875L14.9999 9.275C16.2999 8.875 16.2999 7.075 14.9999 6.675ZM7.9999 10.375C6.6999 10.375 5.5999 9.275 5.5999 7.975C5.5999 6.675 6.6999 5.575 7.9999 5.575C9.2999 5.575 10.3999 6.675 10.3999 7.975C10.3999 9.275 9.2999 10.375 7.9999 10.375Z"
                                                    fill="#4C4F5A"/>
                                            </svg>
                                            <h1>CSS</h1>
                                            <svg width="16" height="8" viewBox="0 0 16 8" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.7089 7.65105L14.8704 2.02908C15.1112 1.80937 15.2528 1.51212 15.2528 1.18902C15.2528 0.865913 15.1112 0.56866 14.8704 0.348951C14.6296 0.129241 14.3038 0 13.9497 0C13.5956 0 13.2698 0.129241 13.029 0.348951L7.75989 5.1567L2.49077 0.348951C2.24998 0.129241 1.9242 0 1.57009 0C1.21598 0 0.890202 0.129241 0.649409 0.336026C0.380287 0.568659 0.252808 0.878837 0.252808 1.18902C0.252808 1.48627 0.380286 1.78352 0.621079 2.02908C2.23581 3.51535 6.42844 7.3538 6.71173 7.6252L6.74006 7.65105C7.24998 8.11632 8.19898 8.11632 8.7089 7.65105Z"
                                                    fill="#4C4F5A"/>
                                            </svg>
                                        </header>
                                        <div className="code-content">
                                            <code>
                                                <p className="line-1"><span className="c-y">.react</span>
                                                </p><br />
                                                <p className="line-2"><span className="c-p">background</span><span>:</span> <span className="c-y">linear-gradient</span>( </p><br />
                                                <p className="line-3"><span className="c-o">-119deg</span>,</p><br />
                                                <p className="line-4"><span className="c-y">$gray</span> <span className="c-o">0%</span>)</p><br />
                                            </code>
                                        </div>
                                    </div>
                                </div>
                                <div className="editor-block"></div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}


export default MyInput;