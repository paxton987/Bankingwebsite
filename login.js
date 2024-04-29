let username=document.getElementById("username")
let email=document.getElementById("email")
let passwordd=document.getElementById("password")
let cpasswordd=document.getElementById("cpassword")
const firebaseConfig = {
  apiKey: "AIzaSyDTcwI1pvJj_TttUp3mHIusrx_BQ-li8sk",
  authDomain: "fir-class-b1b49.firebaseapp.com",
  projectId: "fir-class-b1b49",
  storageBucket: "fir-class-b1b49.appspot.com",
  messagingSenderId: "62453974277",
  appId: "1:62453974277:web:6718ce5587223f02fa236c"
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
 