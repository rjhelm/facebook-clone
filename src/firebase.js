/* eslint-disable no-unused-vars */
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsVoByCwtaLoKWdjVUXKWhQl67QSojHag",
    authDomain: "facebook-clone-ryanjdev.firebaseapp.com",
    projectId: "facebook-clone-ryanjdev",
    storageBucket: "facebook-clone-ryanjdev.appspot.com",
    messagingSenderId: "814333921138",
    appId: "1:814333921138:web:6c4e7115bd75f1e53bffeb",
    measurementId: "G-92SEKN8FVM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;