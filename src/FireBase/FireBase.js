import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCHJGi6bt38llPttQSRosdFKFTWSb32j-4",
  authDomain: "rithikshop-a1a79.firebaseapp.com",
  projectId: "rithikshop-a1a79",
  storageBucket: "rithikshop-a1a79.appspot.com",
  messagingSenderId: "729801570055",
  appId: "1:729801570055:web:7dc88b46189c9fbfc2b7a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth();


const db = getFirestore(app)
export {app,auth , db}