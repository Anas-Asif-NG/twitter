import { auth, db } from "./firebase.mjs";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { addDoc, collection, query, where, getDocs, doc, deleteDoc, } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

var btn = document.getElementById("btn");
var postBtn = document.getElementById('post')

btn.addEventListener("click", () => {
    signOut(auth).then(() => {
        alert("sign out done");
        window.location.href = "../index.html"
    }).catch((error) => {
        alert(error)
    });
});

onAuthStateChanged(auth, async (user) => {

    var uname = document.getElementById('uname')

    if (user) {
        console.log(user.email)

        const q = query(collection(db, "users"), where("email", "==", user.email));

        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((docs) => {
            console.log(docs.id, " => ", docs.data());
            var fname = docs.data().firstName + ' ' + docs.data().lastName;
            console.log(fname)
            uname.innerHTML = fname
        });
        // ...
    }

});

postBtn.addEventListener('click', async () => {

    var title = document.getElementById('title').value;
    var desc = document.getElementById('desc').value;

    console.log(title, desc)

    try {
        const docRef = await addDoc(collection(db, "posts"), {
            title: title,
            description: desc,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

});

const querySnapshot = await getDocs(collection(db, "posts"));

var posts = document.getElementById('posts');



function genratePost(docs) {


    var div = document.createElement('div');
    var h1 = document.createElement('h1');
    var p = document.createElement('p');
    var divbtn1 = document.createElement('div')
    var editBtn = document.createElement('button')
    var divbtn2 = document.createElement('div')
    var deleteBtn = document.createElement('button')
    var div = document.createElement('div');
    var h1 = document.createElement('h1');
    var p = document.createElement('p');
    var divbtn1 = document.createElement('div')
    var editBtn = document.createElement('button')
    var divbtn2 = document.createElement('div')
    var deleteBtn = document.createElement('button')


    div.setAttribute('data-id', docs.id);
    div.setAttribute('class', 'popit');

    h1.textContent = docs.data().title;
    p.textContent = docs.data().description;
    editBtn.textContent = "edit";
    deleteBtn.textContent = "remove";

    divbtn1.appendChild(editBtn);
    divbtn2.appendChild(deleteBtn);
    div.appendChild(divbtn1);
    div.appendChild(divbtn2);
    div.appendChild(h1);
    div.appendChild(p);
    posts.appendChild(div);

    editBtn.addEventListener("click", () => {
        console.log("edit")
    
    })


    deleteBtn.addEventListener("click", async (e) => {
       console.log('delete')
    })



}

querySnapshot.forEach((docs) => {
    genratePost(docs)
    console.log(docs.data().title)
});