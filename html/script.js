
 let ourForm=document.getElementById("ourForm");
 let inputbox=document.getElementById("inputbox");
 let mainlist=document.getElementById("mainlist");
 
 
ourForm.addEventListener("submit", (e)=>{
e.preventDefault();   //e, stands for event
createItem();
 })

 function createItem(){
    let x=inputbox.value;
    let ourHTML=`<li>${x}<br><button onclick="editItem(this)">Edit</button><button onclick="deleteItem(this)">Delete</button> </li>`;
    mainlist.insertAdjacentHTML("beforeend",ourHTML );
    inputbox.value="";
    inputbox.focus();
 }

function deleteItem(tobedeleted){
 tobedeleted.parentElement.remove(); 
}





