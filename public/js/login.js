import { auth } from "./firebase.mjs";
import { signInWithEmailAndPassword , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

var btn = document.getElementById("btn");

btn.addEventListener("click" ,()=>{

var email = document.getElementById('email').value;
var password = document.getElementById('pass').value;

console.log(email, password)

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("user" , user)
    console.log("login done");
    alert("login done")
    window.location.href = "../html/home.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("error code: " , errorCode , "error message: " , errorMessage);
  });

});


onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid)
    window.location.href = "../html/home.html"
  }
});
