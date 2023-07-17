// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyByCx1JpI5fbNC7JQ1DkU6zqPRlvLRBGLY",
  authDomain: "react-netflix-clone-96668.firebaseapp.com",
  projectId: "react-netflix-clone-96668",
  storageBucket: "react-netflix-clone-96668.appspot.com",
  messagingSenderId: "418576275390",
  appId: "1:418576275390:web:192a95c051c52c21d7cbef",
  measurementId: "G-3HKGS8CMGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)