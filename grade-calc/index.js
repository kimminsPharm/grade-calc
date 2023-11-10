const markButton = document.getElementById("mark-button");
const inputTerms = document.getElementById("terms");
const inputOSCE = document.getElementById("osce");
const finalMark = document.getElementById("mark");


function getGrade(){
    let valT = parseFloat(inputTerms.value);
    let valO = parseFloat(inputOSCE.value);
    let result = 0.0;
    result = (valT + valO)/25 * 100;
    finalMark.innerHTML = (result.toString() + "%");
}