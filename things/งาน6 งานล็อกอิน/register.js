window.onload = pageLoad;
function pageLoad() {
    var form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm() {
    var form = document.forms["myRegister"];
    var fname = form["firstname"].value;
    var lname = form["lastname"].value;
    var gender = form["gender"].value;
    var bday = form["bday"].value;
    var email = form["email"].value;
    var username = form["username"].value;
    var passwords = form["password"];
    var password = passwords[0].value;
    var retype_password = passwords[1].value;

    var errorMsg = document.getElementById("errormsg"); // เรียกใช้ span ที่มี id errormsg
    errorMsg.innerHTML = "please try again";

    if (fname == "" || lname == "" || gender == "" || bday == "" || email == "" || username == "" || password == "" || retype_password == "") {
        errorMsgElement.textcontent = "Please fill your information completely";
        alert("Please fill your information completely");
        return false;
    }
    if (password !== retype_password) {
        errorMsg.innerHTML = "Password is not correct";
        alert("Password is not correct");
        return false;
    }
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    return true;
}