const firebaseConfig = {
    apiKey: "AIzaSyAO_m6vRNiwfNd-XqUbv9uK4wZLfQoCi0I",
    authDomain: "banking-site-29d8c.firebaseapp.com",
    projectId: "banking-site-29d8c",
    storageBucket: "banking-site-29d8c.appspot.com",
    messagingSenderId: "118289454467",
    appId: "1:118289454467:web:6dcadb75544c19e9b952b6",
    measurementId: "G-5ZH04HTLHC"
  };
  
  // Initialize Firebase
  const app =firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  function showtransaction() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/v8/firebase.User
          var uid = user.uid;
          let users = firebase.auth().currentUser;
          // db.collection('transactions').where
          db.collection(users.email).get().then((querySnapshot) => {
            
                  querySnapshot.forEach((doc) => {
                     
                      // doc.data() is never undefined for query doc snapshots
                      console.log(doc.id, " => ", doc.data());
                  });
            
             
          });
          // ...
        } else {
          // User is signed out
          // ...
        }
      });

}