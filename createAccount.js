// const login = require("surge/lib/middleware/login")

let username=document.getElementById("username")
let inp =document.getElementById("inp")
let inp2 =document.getElementById("inp2")
let inp3 =document.getElementById("inp3")
let inp4 =document.getElementById("inp4")
let body1=document.getElementById("body1")
let con=document.getElementById("con")  
let display2=document.getElementById("display1")  
let body13=document.getElementById("body13")  
let email=document.getElementById("email")
let npasswordd=document.getElementById("npassword")
let cpasswordd=document.getElementById("cpassword")
let gennumber=''
let display1=document.getElementById("display")
let inputtypecheck=document.getElementById("inputtypecheck")
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
  

  
  function generate1() {
  
    for (let index = 0; index < 1; index++) {
        let rando =Math.floor(Math.random()*10000000000)
         gennumber+=rando

         console.log(gennumber);
     }
  }
  generate1()
  function  typ() {
    if (inp.value.length==1) {
        inp2.focus()
    }if (inp2.value.length==1) {
        inp3.focus()
    }if (inp3.value.length==1) {
        inp4.focus()
        
    }
}
function CreateAccount(keys) {
  keys.preventDefault()

  if (username.value =="" || email.value=="" || npasswordd.value=="" || cpasswordd.value=="")  { 
    alert("Input field cannot be empity, please fill all the input")
    return
  }else{
   
  }
  if (npasswordd.value != cpasswordd.value) {
    alert("Password Does Not Match")
    return
  }else{
   
  }
  if (inputtypecheck.checked == false) {
    alert("Agree wiith Terms and Conditions")
    return      
  }else{
   
  }
  keys.target.innerHTML = `
  <button class="btn-light" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>
`
 setTimeout(() => {
 
  body1.style.display="none"
  body13.style.display="flex"
 }, 3000);
 
 
  
}

function Done(ev) {
 
  ev.preventDefault();
 if (inp.value=="" || inp2=="" || inp3=="" || inp4=="") {
      alert("Please set a pin")
      body13.style.display="flex"
     
     return
      
 }else{
  ev.target.innerHTML = `
  <div class="btn-light" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</div>
`
 }
 firebase.auth().createUserWithEmailAndPassword(email.value, npasswordd.value)
  .then((userCredential) => {
   
   
    // Signed in 
    var user = userCredential.user;
    const db = firebase.firestore();
    // Add a new document in collection "cities"
db.collection("User").doc(user.email).set({
  name: username.value,
  Email: email.value,
  account: gennumber,
  contry:con.value,
  pin:inp.value+inp2.value+inp3.value+inp4.value,
  amount: 2000,
 

  
})
.then(() => {
  console.log("Document successfully written!");
  alert("Regitration successfulluy")
    console.log(userCredential);
    window.location.href="createAccount.html"
   
})
.catch((error) => {
  console.error("Error writing document: ", error);
 
});
    // ...
    

   
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    alert(errorMessage)
    ev.target.innerHTML="Done"
    generate1()
  
  });

}



