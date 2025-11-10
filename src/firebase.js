// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCL3nmvDtX7QO-xqVCVQg3vGVD2weVhgpM",
  authDomain: "barterbite-c735d.firebaseapp.com",
  projectId: "barterbite-c735d",
  storageBucket: "barterbite-c735d.firebasestorage.app",
  messagingSenderId: "77392068948",
  appId: "1:77392068948:web:036761985e672f80f708c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
