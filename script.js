const inputBox=document.getElementById("input-box");
let inputDate = document.querySelector('.date');
const listcontainer=document.getElementById("list-container");

function addbutton(){
    if(inputBox.value==""){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=`${inputBox.value}  ${inputDate.value}`;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00D7"; 
        li.appendChild(span);
    }
    inputBox.value="";
    saveDate();
}
listcontainer.addEventListener("click",function(event){
    if(event.target.tagName=="LI"){
        event.target.classList.toggle("checked");
        saveDate();
    }
    else if(event.target.tagName=="SPAN"){
        event.target.parentElement.remove();
        saveDate();
    }
},false);

function saveDate(){
      localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();

    

