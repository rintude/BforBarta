
import { auth, signInAnonymously } from "./firebase.js";

window.login = function () {
    const name = document.getElementById("username").value;
    if (!name) return alert("নাম লিখুন");

    localStorage.setItem("bartaUser", name);

    signInAnonymously(auth)
        .then(() => window.location.href = "chat.html")
        .catch(err => alert(err.message));
};
