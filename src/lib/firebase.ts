import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc4v2w3drOK_1nRuxsgUH-edeMC-Wniu0",
  authDomain: "pipsatm2.firebaseapp.com",
  projectId: "pipsatm2",
  storageBucket: "pipsatm2.firebasestorage.app",
  messagingSenderId: "843170647459",
  appId: "1:843170647459:web:2268f166f93c9fb18f1e16",
  measurementId: "G-7T74B9K0RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Authentication helpers
const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const register = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

export { app, auth, db, login, register, logout };