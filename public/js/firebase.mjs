 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

 const firebaseConfig = {
   apiKey: "AIzaSyDFy1JkMvPEXEKPf5tVJIjqDH472UZXzig",
   authDomain: "first-class-anas.firebaseapp.com",
   projectId: "first-class-anas",
   storageBucket: "first-class-anas.appspot.com",
   messagingSenderId: "839266093653",
   appId: "1:839266093653:web:836c2e1b683e28dbeca2dc",
   measurementId: "G-NWNWGTC7XC"
 };

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);