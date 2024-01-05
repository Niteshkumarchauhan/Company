// function getTextBoxValue() {
//   var name;
//   var email;
//   name = document.getElementById("fname").value;
//   email = document.getElementById("email").value;
//   console.log(name, email);
// }


(function setup() {
    "use strict";
    
    var fNameElem = document.getElementById("fname");
    var lNameElem = document.getElementById("email");
    var tableElem = document.getElementById("table");
    document.getElementById("savde").addEventListener("click", function () {
        var newRow = tableElem.insertRow(-1);
        var newCell = newRow.insertCell(0);
        var newText = document.createTextNode(lNameElem.value + " " + fNameElem.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(1);
        newText  = document.createTextNode(fNameElem.value);
        // newCell.appendChild(newText);
        // newCell = newRow.insertCell(2);
        // newText  = document.createTextNode(ageElem.value);
        newCell.appendChild(newText);
        fNameElem.value = "";
        lNameElem.value = "";
        // ageElem.value = "";
        tableElem.value = "";
    });
})();