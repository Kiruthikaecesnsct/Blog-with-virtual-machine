import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDPC5TTIg_cPEZrVzQzLtTHB23hflY9Z_0",
    authDomain: "blog-a7553.firebaseapp.com",
    projectId: "blog-a7553",
    storageBucket: "blog-a7553.appspot.com",
    messagingSenderId: "444282961750",
    appId: "1:444282961750:web:bbc4dd9f50fc4407f860f7",
    measurementId: "G-VC6HR72XR7"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth()
const db=getFirestore(app)
export{db};
export {auth};
export default app;