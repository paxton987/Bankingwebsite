{/* <script> */}
  
const firebaseConfig = {
    apiKey: "AIzaSyCBDcr1-UA5L3VqePCbSOCMoxp_Kv9jNxI",
    authDomain: "keena-pay.firebaseapp.com",
    projectId: "keena-pay",
    storageBucket: "keena-pay.appspot.com",
    messagingSenderId: "626250170104",
    appId: "1:626250170104:web:dfb5248146be35d826c50d"
  };

 
    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

  {/* </script> */}
  

        
    
    
    
 }
 
.catch((error) => {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
   
})


      let amount = document.getElementById('amount')
      let welcome =document.getElementById('welcome')
      let move = document.getElementById('move')


      function isloggedin() {
        firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // console.log(user);
            var uid = user.uid;
            // console.log(user.email);
            const db = firebase.firestore();
            var docRef = db.collection("Profile").doc(user.email);
            

        docRef.get().then((doc) => {
            if (doc.exists) {
                
                // console.log("Document data:", doc.data());
                amount.innerHTML=${doc.data().balance}
                welcome.innerHTML= ${doc.data().title} ${doc.data().firstname} ${doc.data().lastname}
                
                move.innerHTML= Welcome to your dashboard ${doc.data().title} ${doc.data().firstname} ${doc.data().lastname}, Happy banking!!!
            
                
            } else {
                // doc.data() will be undefined in this case
                console.log(error);
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
                    // ...
        } else {
           
            console.log("No user found");
            window.location.href= "signup.html"
        }
        });

    }

isloggedin()

let atm= document.getElementById('atm')
let atm1= document.getElementById('atm1')
function myaccount(){
   
}




function right() {
    atm.style.left='-300%'
    atm1.style.left='0'
}

function left() {
    atm.style.left='0'
    atm1.style.left='-300%'
}


let money = document.getElementById('money')
let money1 = document.getElementById('money1')
let money3 = document.getElementById('money3')

function airtime(){
    money.style.display='none'
    money3.style.display='none'
    money1.style.display='flex'
}

function fund(){
    money1.style.display='none'
    money3.style.display='none'
    money.style.display='flex'
}
function data(){
    money.style.display='none'
    money1.style.display='none'
    money3.style.display='flex'
}
let verified =document.getElementById('send44')
const userslist=[]
let foundUser = null;

function foundreceiver() {
    db.collection("Profile").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            if (doc.data(). account_number == accountnumber.value ) {
                foundUser = {
                    email: doc.id,
                    id: doc.id,
                    balance:  doc.data().balance,
                    acountnumber: doc.data().account_number,
                    username: ${doc.data().firstname} ${doc.data().lastname}
                };
            }
        });

        if (foundUser) {
            console.log(User found with email: ${foundUser.email});
            console.log(User found with username: ${foundUser.username});
            accountname.value = foundUser.username;
            console.log(foundUser.balance);
       
        } else {
            
            console.log("User not found");
        }
    });
}

foundreceiver()

let accountnumber= document.getElementById('send22')
let accountname = document.getElementById ('send33')


let founduserslist = false
let sender = null

function transfer(){
    gen = ''
        firebase.auth().onAuthStateChanged((currentUser) => {
            if (currentUser) {
                const currentuserdocref = db.collection('Profile').doc(currentUser.email);
                console.log(foundUser);
                currentuserdocref.get().then(sender => {
                    if (sender.exists) {
                       
                        const currentuserbal = sender.data().balance;
                        console.log(currentuserbal);
                        const transferamt = verified.value;
                        const receiverbalance =  foundUser.balance
                      
    
                        if (transferamt <= 0 || transferamt > currentuserbal) {
                            alert("Invalid Transfer Amount");
                        } else {
                          
                            for(let inde = 0; inde < 10; inde++) {
                                randomnumber = Math.floor(Math.random()*10);
                                console.log(randomnumber)
                                gen+=randomnumber
                                
                            }
                        
                            currentuserdocref.update({
                                balance: currentuserbal - transferamt
                               
                            })
                          
                            .then(() => {
                                db.collection('Profile').doc(foundUser.email).update({
                                    balance: Number(receiverbalance) + Number(transferamt)
                                   
                                })
                                db.collection("transaction").doc(gen).set({
                                    date: new Date(),
                                    senderEmail: sender.data().email,
                                    senderName: ${sender.data().firstname} ${sender.data().lastname},
                                    senderOldBalance: currentuserbal,
                                    transferAmount: transferamt,
                                    receiverEmail: foundUser.email,
                                    receiverName: foundUser.username,
                                    receiverOldBalance: receiverbalance,
                                    receiverNewBalance: receiverbalance + transferamt,
                                    senderNewBalance: currentuserbal - transferamt,
    

                                    
                                })
                                .then(() => {
                                    console.log(gen);
                                    
                                    console.log("Document successfully written!");
                                })
                                .catch((error) => {
                                    console.error("Error writing document: ", error);
                                });
                                   console.log("Current user's balance updated")
                                ;})
                           
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



}

function history() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          var uid = user.uid;
          console.log(user);
        } else {
                       <div> <h6>${doc.data().name }</h6></div>
                     <h5>${doc.data().type}</h5></div>
                     <h5>${doc.data().toDate}</h5></div>
                     <div  style="display:flex; width:100%; align-item: start; background-color: white;  justify-content:space-between;">
                            <div style="display:flex; background-color:blue"; width:200px; padding:30px>
                            gggg
                            </div>
                            
                            <div  style="display:flex; width:20%; align-item: start; background-color: white; gap:15px; justify-content: center;"></div>
                            <div  style="display:flex; width:20%; align-item: start; background-color: white; gap:15px; justify-content: center;"></div>
                            <div  style="display:flex; width:20%; align-item: start; background-color: red; gap:1px; justify-content: center;"></div>
                        </div>
                     


         
        }
      });
    db.collection("transaction").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            if (doc.data().senderEmail == accountnumber.value ) {
                foundUser = {
                    transactionPin: doc.id,
                    id: doc.id,
                    balance:  doc.data().balance,
                    acountnumber: doc.data().account_number,
                    username: ${doc.data().firstname} ${doc.data().lastname}
                };
            }
        });

        if (foundUser) {
            console.log(User found with email: ${foundUser.email});
            console.log(User found with username: ${foundUser.username});
            accountname.value = foundUser.username;
            console.log(foundUser.balance);
       
        } else {
            
            console.log("User not found");
        }
        
    });
   
}
history()