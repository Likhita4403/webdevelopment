function validateForm() {
  let x = document.getElementById('name').value;
  if (x == "") {
    alert("Username must be filled out");
    return false;
  }
  if(!checkUName(x)){
    alert("Invalid username");
    return false;
  }
  if (document.getElementById("name").value.length < 8) {
    alert("User name must be atleast 8 characters");
    return false;
  }
  x = document.getElementById('email').value;
  let regex = new RegExp('[a-z0-9]+@[a-zA-Z]+.[a-z]{2,3}');
  if (!regex.test(x)) {
    alert("Email not valid");
    return false;
  }
  let y=document.getElementById("password").value;
  if(!checkPwd(y)){
    alert("Invalid password")
    return false;
  }
  if (y.length < 6) {
    alert("Password must be atleast 6 characters")
    return false;
  }
  if (!checkPhone(document.getElementById("number").value)) {
    alert("Invalid phone number")
    return false
  }
  if (document.getElementById("number").value.length < 10) {
    alert("Invalid phone number")
    return false
  }
  return true;
}
function checkUName(s) {
  return /^[a-z0-9_.A-Z]+$/.test(s)
}
function checkPwd(s) {
  return /^[a-z0-9_.A-Z]+$/.test(s)
}
function checkEmail(s) {
  return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(s);
}
function checkPhone(s) {
  return /[0-9]+/.test(s)
}