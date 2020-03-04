var attempt = 3
function check_check()
{
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var submit   = document.getElementById("submit").value;
if ( username == "vichea" && password == "123456")
{
alert ("Login successfully");
return false;
}
else{
  setTimeout(() => window.open('http://google.com'), 3000);
  return true;
}
else
{
attempt --;
alert("You have left "+attempt+" attempt;");
if( attempt == 0)
{
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
else if(password.length<6){
alert("Password must be at least 6 characters long.");
return false;
}
}
}