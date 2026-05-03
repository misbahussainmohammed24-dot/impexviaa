// lib/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2bMtAUPTTV_eDzGYtEEn4WSkXM0Q35A0",
  authDomain: "impexviaa-64a47.firebaseapp.com",
  projectId: "impexviaa-64a47",
  storageBucket: "impexviaa-64a47.appspot.com", // ✅ FIXED
  messagingSenderId: "542449134962",
  appId: "1:542449134962:web:64767e879ba3088eadc1eb",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);