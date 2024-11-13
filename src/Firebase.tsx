import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyC6vcFY32b_RTkj0P9CnYHuACYd86Ghkn0",
  authDomain: "portfolio-cebf7.firebaseapp.com",
  projectId: "portfolio-cebf7",
  storageBucket: "portfolio-cebf7.firebasestorage.app",
  messagingSenderId: "537854864894",
  appId: "1:537854864894:web:9efccdefe69c4ee32c24af",
  measurementId: "G-68SGEB67DD",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
