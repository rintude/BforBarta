function login() {
    const name = document.getElementById("username").value;
    if (!name) return alert("Enter name");

    localStorage.setItem("bartaUser", name);
    window.location.href = "chat.html";
}
