import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEuTe0mcOSN8M0ZmK3x3YSsdag-DOi4_4",
  authDomain: "reactfinalcoder.firebaseapp.com",
  projectId: "reactfinalcoder",
  storageBucket: "reactfinalcoder.appspot.com",
  messagingSenderId: "65358668517",
  appId: "1:65358668517:web:7ae782aed5f5111f906a0c",
  measurementId: "G-YGJT6BCBF6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
