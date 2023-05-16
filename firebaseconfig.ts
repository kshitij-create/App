import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase with your config
const firebaseConfig = {
  apiKey: "AIzaSyCZRoRxG3e258MM42wp23IJLJ0rHjQIBCg",
  authDomain: "todo-native-50321.firebaseapp.com",
  projectId: "todo-native-50321",
  storageBucket: "todo-native-50321.appspot.com",
  messagingSenderId: "811244125904",
  appId: "1:811244125904:web:ddcb87ee494d0762e5e8d5",
  measurementId: "G-LJC4S3B3CN",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
