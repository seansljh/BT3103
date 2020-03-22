import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyDHSNECb1T6bgBlGRETZnc5nd-n4NuYfRw",
    authDomain: "bt3103-week8-aa029.firebaseapp.com",
    databaseURL: "https://bt3103-week8-aa029.firebaseio.com",
    projectId: "bt3103-week8-aa029"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;