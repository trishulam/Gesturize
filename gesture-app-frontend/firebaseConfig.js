// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

// import { getAuth } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx8MU7ZU72Llp4GyI3Au-VsvsGxpWpf-0",
  authDomain: "gesturise-58234.firebaseapp.com",
  projectId: "gesturise-58234",
  storageBucket: "gesturise-58234.appspot.com",
  messagingSenderId: "752595507885",
  appId: "1:752595507885:web:82242bfeeb4fa955490424",
  measurementId: "G-1HKH9FQW1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const auth = getAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});