// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  // Put you credentials here
    apiKey: "AIzaSyBdliIPOIDTWEzyayUcq6vu5SQYXVubgdA",
    authDomain: "portfoliogu21.firebaseapp.com",
    projectId: "portfoliogu21",
    storageBucket: "portfoliogu21.appspot.com",
    messagingSenderId: "29607721665",
    appId: "1:29607721665:web:c56f3c0ffcf1877088b240"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} name the title of the Task
 * @param {string} email the description of the Task
 * @param {string} message the description of the Task
 */
export const saveTask = (name, email, message) =>
  addDoc(collection(db, "contatos"), { name, email, message });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "contatos"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "contatos", id));

export const getTask = (id) => getDoc(doc(db, "contatos", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "contatos", id), newFields);

export const getTasks = () => getDocs(collection(db, "contatos"));