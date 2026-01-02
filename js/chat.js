import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const user = localStorage.getItem("bartaUser");
if (!user) location.href = "index.html";

const messagesDiv = document.getElementById("messages");
const input = document.getElementById("messageInput");

const q = query(collection(db, "messages"), orderBy("time"));

onSnapshot(q, snapshot => {
  messagesDiv.innerHTML = "";
  snapshot.forEach(doc => {
    const data = doc.data();
    const msg = document.createElement("div");
    msg.className = "message" + (data.user === user ? " me" : "");
    msg.innerText = data.user + ": " + data.text;
    messagesDiv.appendChild(msg);
  });
});

window.sendMessage = async function () {
  if (!input.value) return;

  await addDoc(collection(db, "messages"), {
    user: user,
    text: input.value,
    time: serverTimestamp()
  });

  input.value = "";
};
