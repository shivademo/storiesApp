import firebase from 'firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
     
    apiKey: "AIzaSyCJkL082XXFC-HKSmh11aUNy1uvRDNgfzg",
    authDomain: "readsbooks-57acd.firebaseapp.com",
    databaseURL: "https://readsbooks-57acd.firebaseio.com",
    projectId: "readsbooks-57acd",
    storageBucket: "readsbooks-57acd.appspot.com",
    messagingSenderId: "876748706785",
    appId: "1:876748706785:web:17f152849b48dd87efb8a0"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
