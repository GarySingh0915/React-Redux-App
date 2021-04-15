import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCewitGn8ok81skKqHXOSyJL_0OdCUuAsI",
    authDomain: "net-ninja-mariop-b0222.firebaseapp.com",
    databaseURL: "https://net-ninja-mariop-b0222-default-rtdb.firebaseio.com",
    projectId: "net-ninja-mariop-b0222",
    storageBucket: "net-ninja-mariop-b0222.appspot.com",
    messagingSenderId: "743702062568",
    appId: "1:743702062568:web:14cdc14828bc3b949df05d",
    measurementId: "G-2JZ9T7QV5C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;