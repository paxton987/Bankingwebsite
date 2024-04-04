
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
  


    let display1=document.getElementById("display1")
    let body=document.getElementById("body")
    let body1_1=document.getElementById("body_1")
   

    
  

    function showd() {
        firebase.auth().onAuthStateChanged((User) => {
            if (User) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/v8/firebase.User
              var uid = User.uid;
              const db = firebase.firestore();
              console.log("lkajzh");
              var docRef = db.collection("User").doc(User.email);
     
    
    
              docRef.get().then((doc) => {
              if (doc.exists) {
                  console.log("Document data:", doc.data());
                  display1.innerHTML=`${doc.data().account}`
                  
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
              }
              }).catch((error) => {
                  console.log("Error getting document:", error);
              });
    
              // ...
            } else {
              // User is signed out
              console.log("sjhs");
              // ...
            }
          });
    }
     showd()
     function next1(ev) {
      ev.preventDefault()
      ev.target.innerHTML = `
      <div class="text-light"  disabled>
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span role="status">Loading...</span>
    </div>`
        setTimeout(() => {
            window.location.href='login.html'
        }, 2000);
    }
    function dis() {
      setTimeout(() => {
         body1_1.style.display="none"
         body.style.display="flex"
      }, 5000);
    }
    dis()