import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCg4mZk-KEWMmeJ8KhMF1qw3EE5Ar2EC8g",
  authDomain: "reactfire-b8b73.firebaseapp.com",
  projectId: "reactfire-b8b73",
  storageBucket: "reactfire-b8b73.appspot.com",
  messagingSenderId: "78746070885",
  appId: "1:78746070885:web:96cd6855f44bb555e7bb8c",
  measurementId: "G-S7XJVZS8W6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db as default
};
