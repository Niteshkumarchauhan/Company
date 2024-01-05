(function setup() {
  "use strict";

  var fNameElem = document.getElementById("name");
  var emailElem = document.getElementById("email");
  var tableElem = document.getElementById("table");


  document.getElementById("display").addEventListener("click", function () {
    var newRow = tableElem.insertRow(-1);

    var newCell = newRow.insertCell(0);
    var newText = document.createTextNode(fNameElem.value);
    newCell.appendChild(newText);

    newCell = newRow.insertCell(1);
    newText = document.createTextNode(emailElem.value);
    newCell.appendChild(newText);

    var newCell2 = newRow.insertCell(2);
    var newEdit = document.createElement("button");
    newEdit.id = "edit";
    newEdit.innerText= "Edit";
    newEdit.className = "edit";

    var newDelete = document.createElement("button");
    newDelete.id = "delete";
    newDelete.innerText= "Delete";
    newDelete.className = "delete";

    var newEditNode = newCell2.appendChild(newEdit);
    var newDeleteNode = newCell2.appendChild(newDelete);
    newCell2.appendChild(newEditNode);
    newCell2.appendChild(newDeleteNode);

    newCell.appendChild(newText);
    fNameElem.value = "";
    emailElem.value = "";
    tableElem.value = "";

  });
})();

// const paragraph = document.getElementById("name");
// const paragraph1 = document.getElementById("email");
// const edit_button = document.getElementById("edit");

// edit_button.addEventListener("click", function() {
//   paragraph.contentEditable = true;
//   paragraph1.contentEditable = true;
//   paragraph.style.backgroundColor = "blue";
//   paragraph1.style.backgroundColor = "blue";
// } );
// function myFunction(){
//         parents("tr").remove();
//     }
function myFunction(){
    // event.target will be the input element.
    var td = event.target.parentNode; 
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}
