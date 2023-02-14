// Para unir el codigo de vuejs con firebase.
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyDMrm_CNXZZwKBz9sCKThcxRNAfULN1g",
  authDomain: "mauriciogprog.firebaseapp.com",
  projectId: "mauriciogprog",
  storageBucket: "mauriciogprog.appspot.com",
  messagingSenderId: "461228666756",
  appId: "1:461228666756:web:d2b8c990c9b0b3f155b7d1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
  timestamp
};
export default firebaseApp.firestore();