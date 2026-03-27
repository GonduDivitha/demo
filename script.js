function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Simple validation (hardcoded credentials)
    if (username === "admin" && password === "1234") {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerHTML = "Login Successful!";
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "Invalid Username or Password";
    }
}