import { auth, db } from "./firebase.mjs";
import { createUserWithEmailAndPassword, onAuthStateChanged, } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

var btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

    console.log(fname, lname, email, password);

    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {

            try {
                const docRef = await addDoc(collection(db, "users"), {
                    firstName: fname,
                    lastName: lname,
                    email: email,
                });
                console.log("Document written with ID: ", docRef.id);
                alert("done")
                const user = userCredential.user;
                console.log("user", user);
                console.log("Sign in Success");
                alert("Sign in Done");
                window.location.href = "../html/login.html";

            } catch (e) {
                console.error("Error adding document: ", e);
                alert(e)
            }


        })
        .catch((error) => {
            const errorCode = error.code;

            const errorMessage = error.message;

            alert("error code: ", errorCode, "error message: ", errorMessage);

        });

})
