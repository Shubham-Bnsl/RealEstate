import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a656b.firebaseapp.com",
  projectId: "mern-estate-a656b",
  storageBucket: "mern-estate-a656b.appspot.com",
  messagingSenderId: "506479935226",
  appId: "1:506479935226:web:8d14321f5b188f64d7d343"
};

export const app = initializeApp(firebaseConfig);