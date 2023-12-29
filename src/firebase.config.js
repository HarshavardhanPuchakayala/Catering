import { getApp,initializeApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA-SoFbwSRfL1NblBhHz-Tax7XLZAiLGEY",
  authDomain: "catering-3821a.firebaseapp.com",
  databaseURL: "https://catering-3821a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "catering-3821a",
  storageBucket: "catering-3821a.appspot.com",
  messagingSenderId: "761163729320",
  appId: "1:761163729320:web:dede96d86d9882ee31359d"
};


const app = getApps.length >0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
export {app,firestore,storage}