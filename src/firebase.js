/* eslint-disable no-unused-vars */
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1Cy-UsDG7KF0PPA-NkjhRYfQTeKgZ4I4",
  authDomain: "facebook-clone-eb6cf.firebaseapp.com",
  databaseURL: "https://facebook-clone-eb6cf-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-eb6cf",
  storageBucket: "facebook-clone-eb6cf.appspot.com",
  messagingSenderId: "837216700544",
  appId: "1:837216700544:web:617465b7b90822514abe65",
  measurementId: "G-F9QYGQ2YH2"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;