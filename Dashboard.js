
let body5=document.getElementById("body5")
let email1=document.getElementById("email1")
let password1=document.getElementById("password1")
let body6=document.getElementById("body6")
let card=document.getElementById("card")
let contain1=document.getElementById("contain")
let showa=document.getElementById("showa")
let Fulln=document.getElementById("fulln")
let em=document.getElementById("em")
let coun=document.getElementById("coun")
let pins=document.getElementById("pins")
let accnum2=document.getElementById("accnum2")
let shown1=document.getElementById("shown1")
let shown=document.getElementById("shown")
let loder=document.getElementById("loder")
let loder1=document.getElementById("loder1")
let body6_1=document.getElementById("body6_1")
let ssss=document.getElementById("ssss")
let eye=document.getElementById("eye")
let displaay1=document.getElementById("displaay1")
let numberss=document.getElementById("numberss")
// localStorage.getItem("savedat", JSON.stringify(doc.data()))
let airtime1=document.getElementById("airtime1")
let airtime5=document.getElementById("airtime5")
let showimg1=document.getElementById("showimg1")
let showimg=document.getElementById("showimg")
let showimg2=document.getElementById("showimg2")
let showimg3=document.getElementById("showimg3")
// let discription=document.getElementById("discription")
let iss=document.getElementById("airtime1")
let modal=document.getElementById("modal")
let username1=document.getElementById("username1")
let body7_2=document.getElementById("body7_2")
let inp=document.getElementById("inp")
let inp1=document.getElementById("inp1")
let body7=document.getElementById("body7")
let inp2=document.getElementById("inp2")
let inp_2=document.getElementById("inp_2")
let useracc=document.getElementById("useracc")
let discription=document.getElementById("discription")
let inp3=document.getElementById("inp3")
let inp_3=document.getElementById("inp_3")
let dist=document.getElementById("dist")
let amount1=document.getElementById("amount1")
let password=document.getElementById("password")
let inp4=document.getElementById("inp4")
let inp_4=document.getElementById("inp_4")
let airacc=document.getElementById("airacc")
let body7_1=document.getElementById("body7_1")
let amount_1=document.getElementById("amount_1")
let date2=document.getElementById("date2")
let category=document.getElementById("category")



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
  const db = firebase.firestore();


  function loding() {
   setTimeout(() => {
    // body1.style.display="flex"
    loder.style.display="none"
   }, 3000);
 
   

   
  }
  loding()
function transferpage() {
    body5.style.display="none"
    body7.style.display="none"
    body6.style.display="flex" 
    contain1.style.left="-200%"
  
    
    
}
function showbut() {
    contain1.style.left="0%"
}
function home() {
    body5.style.display="flex"
    body6.style.display="none"
    body7.style.display="none"

    contain1.style.left="-200%"
   
}
function airtime9() {
    body5.style.display="none"
    body6.style.display="none"
    body7.style.display="flex"

    contain1.style.left="-200%"
   
}


function eyes() {
    if (numberss.style.visibility === "hidden") {
        numberss.style.visibility = "visible"
        
    } else {
        numberss.style.visibility = "hidden"
        eye.innerText = "material-symbols-outlined"
    }
}
function showd() {
    firebase.auth().onAuthStateChanged((User) => {
        if (User) {
        
          var uid = User.uid;
          const db = firebase.firestore();
         var docRef = db.collection("User").doc(User.email);
         
            docRef.get().then((doc) => {
          if (doc.exists) {
            newUser=doc.data()
            //   localStorage.setItem("savedat", JSON.stringify(doc.data()));
              display1.innerHTML=`${doc.data().account}`
              airacc.innerHTML=`${doc.data().amount}`
              numberss.innerHTML=`${doc.data().amount}`
            //   numberss.innerHTML=`${doc.data().amount}`
              showa.innerHTML=`${doc.data().account}`
              shown.innerHTML=`${doc.data().name}`
              accnum2.innerHTML=`${doc.data().account}`
              pins.innerHTML=`${doc.data().pin}`
              em.innerHTML=`${doc.data().email}`
              coun.innerHTML=`${doc.data().contry}`
              console.log("Document data:", doc.data());
              console.log(Math.random());

          } else {
            //   doc.data() will be undefined in this case
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
             
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/v8/firebase.User
          var uid = user.uid;
          let userss = firebase.auth().currentUser
          db.collection(userss.email).get().then((querySnapshot) => {
          
                  querySnapshot.forEach((doc) => {
                    
                      showimg.innerHTML+=`<div style="display:flex;gap:10px; align-items:center;">
                      <div style="background-color: rgb(187, 255, 0); width: 35px; height: 27px; border-radius: 50px; align-items: center; justify-content: center; display: flex; "><span class="material-symbols-outlined">sync_alt </span>                                    </div>
                      <h6 style="font-weight: 400;">${doc.data().name}</h6></div>

                      </div>
                    
                     `
                      showimg1.innerHTML+=`
                      <h6 style="margin:13px auto;  font-weight: 400;">${doc.data().type}</h6></div>

                    
                    
                     `
                      showimg2.innerHTML+=`
                      <h6 style="margin:13px auto; font-weight: 400;">${doc.data().j}</h6></div>
 `
                     showimg3.innerHTML+=`${doc.data().type!="Credit"? `<div style='background-color:red; margin:11px auto; border-radius:4px; width:50px; align-items: center; justify-content: center;color:white; height:30px; display:flex' ><p style="margin-top:10px;">−</p><h5>${doc.data().Amount}</h5></div>`  : `<div style='background-color:RGB(5 250 30); border-radius:4px; margin:11px auto; width:50px; align-items: center; justify-content: center;color:white; height:30px; display:flex' ><p style="margin-top:10px;">+</p><h5>${doc.data().Amount}</h5></div>`}`
                    
                      // doc.data() is never undefined for query doc snapshots
                      console.log(doc.id, " => ", doc.data());
                      let date = (doc.id, " => ", doc.data().Date)
                  });
            
             
          });
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/v8/firebase.User
          var uid = user.uid;
          db.collection(foundUser.email).get().then((querySnapshot) => {
            
                  querySnapshot.forEach((doc) => {
                    showimg.innerHTML+=`
                    <div style="background-color: rgb(187, 255, 0); width: 30px; height: 20px; border-radius: 50px; align-items: center; justify-content: center; display: flex; "><span class="material-symbols-outlined">sync_alt </span>                                    </div>
                    <h1>${doc.data().name }</h1>
                   
                    `
                     
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

   
 
foundreceiver()
    
}
 showd()

 function copyit() {
    
    navigator.clipboard.writeText(copyi)
    alert("copy successfully clipboard")
  }
 function airtime() {
  
    showd()
    airtime1.style.display="flex";
    body7_2.style.display="none"
    body7_1.style.display="none"
   
    
 }
//  function ss(params) {
//     params.preventDefault()
//     params.target.innerHTML= `
//     <div class="btn  text-light " type="button" disabled>
//     <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
//     <span role="status"  style="border:none; background:none;">Loading...</span>
//   </div>
//   `
//  }
 function frombal() {
   
   setTimeout(() => {
    body6_1.style.display="none"
    airtime5.style.display="flex"
   }, 10);
    
 }
 function pay() {
    let showamout=password.value
    if (password.value=="" || email1.value=="" ) {
        alert("input field cannot be empty")  
     
    }else{
        card.innerHTML=showamout
     
 }
   
 }
 function transfer(ev) {
    ev.preventDefault()
    let showamout1 = ssss.value
    if (ssss.value=="" || useracc.value=="") {
        alert('enter details')

    }else {
        useramt.innerHTML=showamout1
       
    }
   
}
 function inp5() {
    if (inp.value.length==1) {
        inp2.focus()
        
    }if (inp2.value.length==1) {
        inp3.focus()
    } if (inp3.value.length==1) {
        inp4.focus()
    }
     }
 function inp6() {
    if (inp1.value.length==1) {
        inp_2.focus()
        
    }if (inp_2.value.length==1) {
        inp_3.focus()
    } if (inp_3.value.length==1) {
        inp_4.focus()
    }
     }
    
   

foundUser=null
const userslist=[]
 function foundreceiver() {
    db.collection("User").get().then((querySnapshot) => {
        const db = firebase.firestore();

        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            if (doc.data().account == useracc.value ) {
                reciever=doc.data()
                foundUser={
                    email:doc.id,
                    id:doc.data().name,
                    amount:doc.data().amount,
                    account:doc.data().account,
                    Username: `${doc.data().name}`
                }
            }
        });

        if (foundUser) {
            discription.innerHTML=`<p class="text-danger">User found with email ${foundUser.email}</p>`;
             console.log(`User found with username: ${foundUser.Username}`);
            console.log(`User found with username: ${foundUser.account}`);
            username1.value = foundUser.Username;
            console.log(`${foundUser.amount}`);
            userna.innerHTML=`${foundUser.Username}`
           
       
        } else {
            
            console.log("User not found");
            discription.innerHTML=`<p class="text-dark">User Not Found</p>`;

        }
    });
}

foundreceiver()
function showacc() {
    // if (useracc.value && foundUser && useracc.value==  foundUser.account) {
    //     alert("user found")
    // } else {
    //     console.log("not user found");
       
    //     foundreceiver()
    // }
    foundreceiver()
}

function confirmtran() {
    // firebase.auth().onAuthStateChanged((currentUser) => {
    //     if (currentUser) {
    //       // User is signed in, see docs for a list of available properties
    //       // https://firebase.google.com/docs/reference/js/v8/firebase.User
    //       var uid = currentUser.uid;
    //       const db = firebase.firestore();
    //      const currentuserdocRef = db.collection("User").doc(currentUser.email);
    //      console.log(foundUser);
         

           
    //       currentuserdocRef.get().then((sender) => {
    //         currentacc = sender.data().amount-amount1.value
    //       if (sender.exists) {
    //          let splitpin = sender.data().pin.split("")
    //          if (amount1.value="text") {
    //             const currentuserbal = sender.data().amount
    //             console.log(currentuserbal);
    //             const transeramt = amount1.value;
    //             const receiverbalance= foundUser.amount
              
                
    //                 var Userref = db.collection("User").doc(User.email);
                
    //             // Set the "capital" field of the city 'DC'
    //             return currentUserrref.update({
    //                 amount:currentacc
    //                 })
    //             .then(() => {
    //                 db.collection("User").doc(User.email)
    //                 .onSnapshot((doc) => {
    //                 numberss.innerHTML=sender.data().amount
    //                 console.log("Document successfully updated!", sender.data());
    //                 })
    //                 })
    //                 .then(() =>{
    //                    db.collection('User').doc(foundUser.email).update({
    //                     amount: Number(transeramt) + Number(receiverbalance)

    //                    })
    //                    .catch((error) => {
    //                     console.error("NOt found", error);
    //                 });
    //                 })
    //             .catch((error) => {
    //                 // The document probably doesn't exist.
    //                 console.error("Error updating document: ", error);
                   
    //             });
    //              }else{
    //             alert("incorrrect pin")
    //          }
    //          } else {
    //           // doc.data() will be undefined in this case
    //           console.log("No such document!");
    //       }
    //       }).catch((error) => {
    //           console.log("Error getting document:", error);
    //       });

    //       // ...
    //     } else {
    //       // User is signed out
    //       console.log("sjhs");
    //       // ...
    //     }
    //   });
    firebase.auth().onAuthStateChanged((currentUser) => {
        if (currentUser) {
            const currentuserdocref = db.collection('User').doc(currentUser.email);
            console.log(foundUser);
            currentuserdocref.get().then(sender => {
                if (sender.exists) {
                    let splitpin = sender.data().pin.split("")
                    if (inp1.value == splitpin[0] && inp_2.value == splitpin[1] && inp_3.value== splitpin[2] && inp_4.value==splitpin[3]) {
                        const currentuserbal = sender.data().amount;
                        console.log(currentuserbal);
                        const transferamt = ssss.value
                        console.log(transferamt);
                        const receiverbalance =  foundUser.amount
                        if (transferamt > currentuserbal) {
                           alert("not enogh")

                        }else{
                           
                            
                             currentuserdocref.update({
                                    amount: currentuserbal - transferamt
                                   
                                })
                             
                                
                                .then(() => {
                                    console.log(receiverbalance);
                                    console.log(transferamt);
                               const  receiverdocref = db.collection('User').doc(foundUser.email)
                               console.log(receiverdocref);
                                if (receiverdocref) {
                                    receiverdocref.get().then(receiver=>{
                                        let receiverbal =  receiver.data().amount 
                                        console.log(receiverbal);
                                          receiverdocref.update({
                                            amount:  Number(receiverbal) + Number(transferamt)
                                          })
                                          
                                         
                                        .catch((error) => {
                                            console.error("Error writing document: ", error);
                                        });
                                          
        
                                    })
                                }
                                    console.log("Current user's balance updated")
                                    ;})  
                                    
                           
                        }                     
                     }else{
                        alert("incprrect pin")
                     }
                   
                       
                    
                } else {
                    console.log("Current user's document not found");
                }
            }).catch(error => {
                console.error("Error getting document:", error);
            });
        } else {
            console.log("No user found");
        }
    });  
    
    sendertran()
    receivertran()
    hi()
   
}

function signout() {

firebase.auth().signOut().then(() => {
    // Sign-out successful.
     alert("Sign-out successful.")
        window.location.href="login.html"
     
   
  }).catch((error) => {
    // An error happened.
  });
    
      
}
function nouser() {
    loder.style.display=
    'none';
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/v8/firebase.User
          var uid = user.uid;
          console.log(user);
         
          // ...
        } else {
          // User is signed out
          // ...
          alert("Please log in first! before you can coutinue");
          window.location.href="login.html"
          console.log("no user");
        }
      });
     
}
function hi() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/v8/firebase.User
          var uid = user.uid;
          then(() => {
            db.collection("User").doc(currentUser.email)
            .onSnapshot((doc) => {
            numberss.innerHTML=doc.data().amount
            });
           
            
            alert("Transfer successful")
           
        })
          // ...
        } else {
          // User is signed out
          // ...
          console.log("error");
        }
      });
        
    
}
     hi()
nouser()
function sendertran() {
    let users =firebase.auth().currentUser;
    let datte = new Date();
    // const timestamp = firebase.firestore.Timestamp.fromDate(datte);

      // Add a new document with a generated id.
db.collection(users.email).add({
    name:foundUser.Username,
    Amount:ssss.value,
    Date: datte,
    category:"Transfer",
     type:"Debit",
     airtime:false
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
  foundreceiver()
}
sendertran()
function receivertran() {
    let datte = new  Date();
    // const timestamp = firebase.firestore.Timestamp.fromDate(datte);
      // Add a new document with a generated id.
db.collection(foundUser.email).add({
    name:newUser.name,
     Amount:ssss.value,
     Date: datte,
     category:"Transfer",
     type:"Credit"
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
  foundreceiver()
  
}
receivertran()

