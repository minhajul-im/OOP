import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBt7fjVLTQbcoZXcfhDIng44gMidOJxSrc",
  authDomain: "movie-one-14aa4.firebaseapp.com",
  projectId: "movie-one-14aa4",
  storageBucket: "movie-one-14aa4.appspot.com",
  messagingSenderId: "730681387070",
  appId: "1:730681387070:web:c5fa237f41f6e7d94b096f",
  measurementId: "G-F874Z4GYMP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
