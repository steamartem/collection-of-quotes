import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  push,
  update,
  get,
  remove,
  query,
  orderByChild,
  equalTo
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAn6r12-XrfIdzyZdiSlL1FWDbh-jpk0sw",
  authDomain: "quotes-app-cc701.firebaseapp.com",
  databaseURL: "https://quotes-app-cc701-default-rtdb.firebaseio.com",
  projectId: "quotes-app-cc701",
  storageBucket: "quotes-app-cc701.firebasestorage.app",
  messagingSenderId: "684507936401",
  appId: "1:684507936401:web:b132ceea8f05231bdbb130",
  measurementId: "G-RDQ460XZ93"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db, ref, push, update, get, remove, query, orderByChild, equalTo };
