import {initializeApp} from "firebase/app";

const Config = {
    firebaseConfig:{
        apiKey: "AIzaSyAIYFBwlIRp6TKY3h5bwLGlqy2FOKS2kH4",
        authDomain: "rulesbreakers-fb266.firebaseapp.com",
        projectId: "rulesbreakers-fb266",
        storageBucket: "rulesbreakers-fb266.appspot.com",
        messagingSenderId: "372706870275",
        appId: "1:372706870275:web:744e39e75adf03fc783a36",
        measurementId: "G-G7Q6W6B3HJ"

    }
}
export const app = initializeApp(Config.firebaseConfig);