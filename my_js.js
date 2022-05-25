
function check(){
  var password=document.getElementById("pass").value;
  var phone=document.getElementById("phone").value;
  var name1=document.getElementById("fname").value;
  var name1=document.getElementById("lname").value;



if (!phone.match(/^[0-1]{2}[0-9]{9}$/)){

 document.getElementById('phone_error').classList.remove('hidden');

     return false;
 } else {

  document.getElementById('phone_error').classList.add('hidden');}

if(password.charAt(0) !=password.charAt(0).toUpperCase() ){
  
  document.getElementById('pass_error').classList.remove('hidden');
  return false;
  }else{
    document.getElementById('pass_error').classList.add('hidden');}



      if (!password.match(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8}$/)){
        document.getElementById('pass_error2').classList.remove('hidden');
        // return false;
      }else{
         document.getElementById('pass_error2').classList.add('hidden');}
        //  document.write("JavaScript form has been submitted successfully");
        // document.getElementById('replace').classList.remove('hidden');


        //  if(!isNaN(name1)){
        //   document.getElementById("blankMsg").innerHTML = "Only characters are allowed";
        //   return false;
        // }     
        // if(!isNaN(name2)){
        //   document.getElementById("charkMsg").innerHTML = "Only characters are allowed";
        //   return false;
        // }     
           


}
function myFunction() {
  element=ddocument.querySelector('firstf');
  element.style.visibility = 'hidden';
}
