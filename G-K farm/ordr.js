// Array
var BreedC = {
  Dairy: ["Cow", "Goat", "Sheep"],
  Poultry: ["Chicken", "Duck", "Tarky"],
  Farm: ["Cofee", "Tea"]
}

function makeSubmenu(value) {
  if (value.length == 0) document.getElementById("breedSelect").innerHTML = "<option></option>";
  else {
    var BreedOptions = "";
    for (i in BreedC[value]) {
      BreedOptions += "<option>" + BreedC[value][i] + "</option>";
      // console.log("<option>"+BreedByC[value][i]+"</option>");
    }
    document.getElementById("breedSelect").innerHTML = BreedOptions;
  }
}
// Display alert
function displaySelected() {

  // var category = document.getElementById("categorySelect").value;
  // var Breed = document.getElementById("breedSelect").value;
  // alert(category + "\n" + Breed + "\n" + " ");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  showInput();

  //Automatic Scroll on top of the window

}
// Reset
function resetSelection()
 {
  document.getElementById("categorySelect").selectedIndex = 0;
  document.getElementById("breedSelect").selectedIndex = 0;
}
function showInput() {

  document.getElementById("dh").style.visibility = 'hidden'
  document.getElementById("rslt").style.display = 'block'
  alert("Success");

  document.getElementById('nm').innerHTML =
    document.getElementById("name").value

  document.getElementById('pn').innerHTML =
    document.getElementById("phone").value

  document.getElementById('eml').innerHTML =
    document.getElementById("email").value

  document.getElementById('loc').innerHTML =
    document.getElementById("location").value

  document.getElementById('ca').innerHTML =
    document.getElementById("categorySelect").value
  document.getElementById('brd').innerHTML =
    document.getElementById("breedSelect").value
  // document.getElementById('display4').innerHTML =
  // document.getElementById("Breed").value
  // radioButton

  // chbx();
  radio();

}
function radio() {
  // alert("radio hi")
  var ele = document.getElementsByName('pay');

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      document.getElementById("rd").innerHTML
        = ele[i].value;
  }

}

// function chbx() {
//   var x = document.getElementsById("chb1").value;
//   var y = document.getElementsById("chb2").value;
//   document.getElementById("ch1").innerHTML = x;
//   document.getElementById("ch2").innerHTML = y;
//   alert(x);
//   alert(y);

// }

// Validation

function validFunction() {
  var inpObj = document.getElementById("name").value;
  var ph = document.getElementById('phone').value;
  var pptrn = /^\d{10}$/;
  var email = document.getElementById('email').value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var cg=document.getElementById("chb1");
  var tp=document.getElementById("chb1");
  var py=document.getElementsByName("pay")

  if (inpObj == "") {
    alert("Enter name");

  }
  else if (false) {
    
  }

  else if (!pptrn.test(ph)) {
    // alert('Please provide a valid email address');

    alert("invalid number");
    // document.getElementById("demop").innerHTML = "(Invalid Number)";
  }
  // Email validation


  else if (!filter.test(email)) {

    email.focus;
    alert('Please provide a valid email address');
    // document.getElementById("demoe").innerHTML = "(Invalid email)";
  }
  else if (document.getElementById("location").selectedIndex == 0) {
    // document.getElementById("demol").innerHTML = "(Select Location)";


    alert('Select Location');

    //     var e = document.getElementById("ddlViewBy");
    // var strUser = e.options[e.selectedIndex].value;
  }
  else if (document.getElementById("categorySelect").selectedIndex == 0) {
    // document.getElementById("demol").innerHTML = "(Select Location)";


    alert('Select Category');

    //     var e = document.getElementById("ddlViewBy");
    // var strUser = e.options[e.selectedIndex].value;
  }
  else if (document.getElementById("breedSelect").selectedIndex == 0) {
    // document.getElementById("demol").innerHTML = "(Select Location)";


    alert('Select Breed');

    //     var e = document.getElementById("ddlViewBy");
    // var strUser = e.options[e.selectedIndex].value;
  }
  else if (cg.checked==""||tp.checked=="" ) {
    


    alert('Select Service');

 
  }
  else if (!py[0].checked || py[1].checked){
    


    alert('Select Payment Option');

 
  }




  else {
    displaySelected()
  }
}