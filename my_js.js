
function check() {
  var password = document.getElementById("pass").value;
  var phone = document.getElementById("phone").value;
  var name1 = document.getElementById("fname").value;
  var name2 = document.getElementById("lname").value;
  var emaile= document.getElementById("email").value;

  if(!isNaN(name1)){
    document.getElementById('fname_error').classList.remove('hidden');

    return false;
  } else {

    document.getElementById('fname_error').classList.add('hidden');
  }
  if(!isNaN(name2)){
    document.getElementById('lname_error').classList.remove('hidden');

    return false;
  } else {

    document.getElementById('lname_error').classList.add('hidden');
  }


  if (!phone.match(/^[0-1]{2}[0-9]{9}$/)) {

    document.getElementById('phone_error').classList.remove('hidden');

    return false;
  } else {

    document.getElementById('phone_error').classList.add('hidden');
  }

  if (password.charAt(0) != password.charAt(0).toUpperCase()) {

    document.getElementById('pass_error').classList.remove('hidden');
    return false;
  } else {
    document.getElementById('pass_error').classList.add('hidden');
  }
  if(password.length != 8) {  
    document.getElementById('length').classList.remove('hidden');
  
    return false;  
  } else {
  document.getElementById('length').classList.add('hidden');
}

if  (!password.match("^(?=.\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*.%^&.~_-#|\]) (?!.*\s)$")) {
  document.getElementById('pass_error2').classList.remove('hidden');
  return false;
} else  {
  document.getElementById('pass_error2').classList.add('hidden');
  return true;
}



}
function showpass() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}



// (?=.*[@$!%*#?&^_-])

// ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#_+\-\$%\^&\*])(?!.*\s)")

// if (!password.match(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8}$/)) {
//   document.getElementById('pass_error2').classList.remove('hidden');
//   return false;
// } else  {
//   document.getElementById('pass_error2').classList.add('hidden');
// }