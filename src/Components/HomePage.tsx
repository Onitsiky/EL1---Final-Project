import MyButton from "./MyButton";
import {getAuth, signOut} from "firebase/auth";
import {app} from "./Firebase_config/Config";

const HomePage : React.FC = () => {
    const auth = getAuth(app);
    return(
        <div>
            <h1 className="text-light">Home Page</h1>
            <MyButton label="Sign out" handleClick={() => signOut(auth)}/>
        </div>
    )
}
export default HomePage;