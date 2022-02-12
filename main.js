var nameofstudentarray = [];

function submit(){
    var name_1 = document.getElementById("nameofstudent1").value;
    var name_2 = document.getElementById("nameofstudent2").value;
    var name_3 = document.getElementById("nameofstudent3").value;
    var name_4 = document.getElementById("nameofstudent4").value;

    nameofstudentarray.push(name_1);
    nameofstudentarray.push(name_2);
    nameofstudentarray.push(name_3);
    nameofstudentarray.push(name_4);

    console.log(nameofstudentarray);

    document.getElementById("displayname").innerHTML = nameofstudentarray;
    document.getElementById("SubmiButton").style.display = "none";
    document.getElementById("sortbutton").style.display = "inline-block";
}

function sort(){
    nameofstudentarray.sort();
    console.log(nameofstudentarray);
    document.getElementById("displayname").innerHTML = nameofstudentarray;
}