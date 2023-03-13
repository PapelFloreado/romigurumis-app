// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlVz1F5oSuYguXv3DZrwiYgV71iJxjH8A",
  authDomain: "romigurumis-app.firebaseapp.com",
  projectId: "romigurumis-app",
  storageBucket: "romigurumis-app.appspot.com",
  messagingSenderId: "1000964735868",
  appId: "1:1000964735868:web:6ecd7f76c0d655acb4daf9",
  measurementId: "G-MEN7PEL8L1"
};      

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const auth = getAuth(app)
/* const analytics = getAnalytics(app); */


export default db