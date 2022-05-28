// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMZ1pE2MC_Yk5KOvoMjSTlm5DCB8Vx6_o",
  authDomain: "mods-e3b5f.firebaseapp.com",
  projectId: "mods-e3b5f",
  storageBucket: "mods-e3b5f.appspot.com",
  messagingSenderId: "770107473038",
  appId: "1:770107473038:web:6df2ecaffeae57a7f21ddf",
  measurementId: "G-C7N626FJQE",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
