//todo list 

let additime= function(){

let input= document.getElementsByTagName("input")[0];
let inputval= input.value;
// console.log(inputval);


let checkbox= document.getElementsByTagName("td")[0];
let taskInput= document.getElementsByTagName("td")[1];
let remove = document.getElementsByTagName("td")[2];


let nRow = document.getElementsByTagName("tbody")[0];
let row = nRow.insertRow();

let cellOne = row.insertCell();
let cellTwo = row.insertCell();
let cellThree = row.insertCell();




let check = document.createElement("input");
check.setAttribute("type", "checkbox");
// console.log(check);
let texttd = document.createElement("td");
texttd.textContent = inputval;

let deleteBtn=document.createElement("input");
deleteBtn.setAttribute("type", "button");
deleteBtn.setAttribute('value', 'Delete');

cellOne.appendChild(check);
cellTwo.appendChild(texttd);
cellThree.appendChild(deleteBtn);


    deleteBtn.onclick = function() {
        check.remove();
        texttd.remove();
        deleteBtn.remove(deleteBtn);
    };
    
}

 