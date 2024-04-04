let username=document.getElementById("username")
let email=document.getElementById("email")
let passwordd=document.getElementById("password")
let cpasswordd=document.getElementById("cpassword")
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
  function logiin(evet) {
    evet.preventDefault();
    if (email.value=="" || passwordd.value=="") {
     alert("input field cannot be empty") 
     return
    }
    evet.target.innerHTML = `
    <button class="btn-light"  disabled>
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">Loading...</span>
  </button>
  `

    firebase.auth().signInWithEmailAndPassword(email.value, passwordd.value)
  .then((userCredential) => {
    // Signed in
    
    var user = userCredential.user;
    // ...     
    alert("Login Successfully")
    console.log(userCredential);
    
    window.location.href="Dashboard.html"
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(reportError);
    alert(errorMessage)
    evet.target.innerHTML ="Login"

  });
    
  }
 