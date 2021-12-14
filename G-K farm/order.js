function populate(catagory,breed){
    var s1 =document.getElementById("catagory");
    var s2 = document.getElementById("breed");
    s2.innerHTML ="";
    if(s1.value=="P"){
        var optionArray=["Hen|Hen","Duck|Duck","Kada|Kada"];
    }
    else if(s1.value=="D"){
        var optionArray=["Cow|cow","Goat|Goat","Buffalo|buffalo"];
    }
    else if(s1.value=="F"){
        var optionArray=["Banana|Banana","Coconut|Coconut"];
    }
    for(var option in optionArray){
        var pair =optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}