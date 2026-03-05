
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAof4JWx8RXCQfN0TIS6DayEyqoANc3VI0",
  authDomain: "poorvikholidaysben.firebaseapp.com",
  projectId: "poorvikholidaysben",
  storageBucket: "poorvikholidaysben.firebasestorage.app",
  messagingSenderId: "750923068744",
  appId: "1:750923068744:web:d61c048bf864cdffd86f7d",
  measurementId: "G-423ZHTS510"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged
};
