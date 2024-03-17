// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9h3rIPLLLC7_7u7SZjMFCfHf91iSLtnA",
    authDomain: "expopractice-eaa24.firebaseapp.com",
    projectId: "expopractice-eaa24",
    storageBucket: "expopractice-eaa24.appspot.com",
    messagingSenderId: "229227179434",
    appId: "1:229227179434:web:935afe93fb71179fa50fd3",
    measurementId: "G-JBW9XPP9VL"
  };

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP, {
 persistence: getReactNativePersistence(AsyncStorage)
});
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);