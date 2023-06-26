import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { keys } from "../../config.js";

const firebaseConfig = {
  apiKey: keys.API_KEY_AUTH,
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
const database = getFirestore(app);
console.log("databaseBooks:", database);

export { auth, provider };
