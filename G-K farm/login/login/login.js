var user=document.getElementById("inputUser").value;
var pass=document.getElementById("inputPassword").value;
var u="admin";
var p="admin"
function check() {
    
    if(user==u && pass==p)
    {
       
        alert("Success");
        // window.location.href=""
    }
    else{
        alert("Failed Check Inputs");
    }
}