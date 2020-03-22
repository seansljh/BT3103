import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDHSNECb1T6bgBlGRETZnc5nd-n4NuYfRw",
  authDomain: "bt3103-week8-aa029.firebaseapp.com",
  databaseURL: "https://bt3103-week8-aa029.firebaseio.com",
  projectId: "bt3103-week8-aa029",
  storageBucket: "bt3103-week8-aa029.appspot.com",
  messagingSenderId: "404580308054",
  appId: "1:404580308054:web:c2003cfae6d6332f2e17f7",
  measurementId: "G-4YEBZXGKJN"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;
