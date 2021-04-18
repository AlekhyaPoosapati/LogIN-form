// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA1XrrQfDKLrPfarERMVTGIkgskF-3CaXk",
    authDomain: "login-form-82f12.firebaseapp.com",
    projectId: "login-form-82f12",
    storageBucket: "login-form-82f12.appspot.com",
    messagingSenderId: "576234248182",
    appId: "1:576234248182:web:fbd0532bf65a4c605799d7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
auth.onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("signOUT").style.display = "block";
        document.getElementById("signIN").style.display = "none";
        let user = auth.currentUser;
        if (user != null) {
            let email_id = user.email;
            document.getElementById("paragraph").innerHTML = "Email-id : " + email_id;
        }
    } else {
        document.getElementById("signOUT").style.display = "none";
        document.getElementById("signIN").style.display = "block";
    }
});

function signUp() {
    var useremail = document.getElementById("email").value;
    var userpassword = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(useremail, userpassword).catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        alert("Error : " + errorMessage)
    });
}

function signIn() {
    var useremail = document.getElementById("email").value;
    var userpassword = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(useremail, userpassword).catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        alert("Error : " + errorMessage)
    });
}

function signOut() {
    auth.signOut();

}