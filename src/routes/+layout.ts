import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";
import { readable } from "svelte/store";
const firebaseConfig = {
  apiKey: "AIzaSyDGm3C-boZmhjF1E1OEqDmRktLbsDdYrxg",
  authDomain: "axel-rock.firebaseapp.com",
  projectId: "axel-rock",
  storageBucket: "axel-rock.appspot.com",
  messagingSenderId: "223150805634",
  appId: "1:223150805634:web:cdc9425283d5b499311a9b"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

const user = signInAnonymously(auth)

export const prerender = false;

export const load = async () => {
  return {
    db,
    user
  }
}