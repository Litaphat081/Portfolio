window.onload = loginLoad;
function loginLoad() {
    var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin() {
    var form = document.forms["myLogin"];
    var username = form["username"].value;
    var password = form["password"].value;
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");
    var errorMsg = document.getElementById("errormsg"); // เรียกใช้ span ที่มี id errormsg
    errorMsg.innerHTML = "please try again";
    if (username === storedUsername && password === storedPassword) {
        alert("Login Succesfully! ");
        return true;
    } else {
        errorMsg.innerHTML = "Invalid name or password";
        alert("Invalid name or password");
        return false;
    }
}