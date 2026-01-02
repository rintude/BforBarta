const user = localStorage.getItem("bartaUser");
if (!user) location.href = "index.html";

const messagesDiv = document.getElementById("messages");

function sendMessage() {
    const input = document.getElementById("messageInput");
    if (!input.value) return;

    const msg = document.createElement("div");
    msg.className = "message me";
    msg.innerText = input.value;

    messagesDiv.appendChild(msg);
    input.value = "";
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
