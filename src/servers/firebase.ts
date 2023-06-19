import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { process } from "../env";

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId:  process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
  };

  const firestore = getFirestore(initializeApp(firebaseConfig));

  export { firestore };