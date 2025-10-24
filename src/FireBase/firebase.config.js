// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZABA0H5npH8vgfbvpifI98bFfUIqVC4E",
  authDomain: "skill-swap-store.firebaseapp.com",
  projectId: "skill-swap-store",
  storageBucket: "skill-swap-store.firebasestorage.app",
  messagingSenderId: "859408025785",
  appId: "1:859408025785:web:511eb227273ecc58bc3368"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);