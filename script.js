const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const done_All =document.getElementById("doneAll");
const delet_All =document.getElementById("deletAll");
let img = document.createElement("img");
img.classList.add("page-image");

function addTask(){
  if(inputBox.value === ''){
    alert("Please enter a task");
  }
  else{
    let li = document.createElement("li"); // li is list of items , let is for decleration the variable
    li.innerHTML = inputBox.value; // innerHTML get or set the HTML content 
    listcontainer.appendChild(li); 
    let span =  document.createElement("span") //decleration 
    span.innerHTML = "\u00d7"; // delete icon

    li.appendChild(span);//
    }
    inputBox.value = ""; 
    saveData();
    
}

listcontainer.addEventListener("click", function(e){ e.target //task li
  //complete a task
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked"); // togle >> on off ... cheaked for cross line
    saveData();
    }
  //delete a task
    else if(e.target.tagName === "SPAN"){ // inside span there is the x 
      e.target.parentElement.remove(); // parent is the hole box
      saveData();
    }


}, false);

function saveData(){
  localStorage.setItem("data", listcontainer.innerHTML);/** save in the browser */
}

function showTask(){
  listcontainer.innerHTML = localStorage.getItem("data");
}


delet_All.addEventListener("click",function(e){

  const li = document.querySelectorAll("li");

  const arrayOfli = Array.from(li);

  for (let index = 0; index < arrayOfli.length; index++) {
    arrayOfli[index].remove();
  }

});


done_All.addEventListener("click",function(e){

  const li = document.querySelectorAll("li");
  const arrayOfli = Array.from(li);
  
  for (let index = 0; index < arrayOfli.length; index++) {
    arrayOfli[index].classList.toggle("checked");
  }

});


// function deletAll(){

// }

// doneAll.addEventListener("click", ()=>{

// if(listcontainer){

// }
// });

// deletAll.addEventListener("click", ()=>{
//   li.remove();
  
//   });

  
// const deletAll = document.getElementById("button");
// deletAll.classList.add("deletAll");
// deletAll.innerHTML ="Delet All";

// inputBox.appendChild("deletAll");

showTask();



  








