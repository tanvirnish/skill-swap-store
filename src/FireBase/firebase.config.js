
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZABA0H5npH8vgfbvpifI98bFfUIqVC4E",
  authDomain: "skill-swap-store.firebaseapp.com",
  projectId: "skill-swap-store",
  storageBucket: "skill-swap-store.firebasestorage.app",
  messagingSenderId: "859408025785",
  appId: "1:859408025785:web:511eb227273ecc58bc3368"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
