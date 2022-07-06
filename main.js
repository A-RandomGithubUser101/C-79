array=[];

function getnames() {
    student1= document.getElementById("nameOne").value;
    student2= document.getElementById("nameTwo").value;
    student3= document.getElementById("nameThree").value;
    student4= document.getElementById("nameFour").value;
    array.push(student1);
    array.push(student2);
    array.push(student3);
    array.push(student4);
    console.log(array);
    document.getElementById("array_label").innerHTML = array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block"
}


function sortnames() {
array.sort(); 
console.log(array);
document.getElementById("array_label").innerHTML = array;
}