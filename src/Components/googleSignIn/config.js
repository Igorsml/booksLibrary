import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNKU6f9J3X7q4b98vY1Pcf_dVDfKUW13Y",
  authDomain: "bookslibrary-49ee1.firebaseapp.com",
  projectId: "bookslibrary-49ee1",
  storageBucket: "bookslibrary-49ee1.appspot.com",
  messagingSenderId: "598182942800",
  appId: "1:598182942800:web:e42cc0694451fff001d955",
  measurementId: "G-00V8XMNZCX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
