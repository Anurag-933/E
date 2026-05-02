// ================= SIGNUP =================

function signup() {

    let name = document.getElementById("firstName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(name === "" || email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful!");

    window.location.href = "login.html";
}


// ================= LOGIN =================

function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if(storedUser &&
       storedUser.email === email &&
       storedUser.password === password) {

        alert("Login Successful!");

         window.location.replace("home.html");

    } else {

        alert("Wrong Email or Password");

    }
}