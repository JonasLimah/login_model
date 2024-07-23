import { Db } from "./classes/Db";


const username = document.getElementById("username") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
const btn = document.getElementById("btn") as HTMLButtonElement;
let username_txt = document.getElementById("username-txt" ) as HTMLElement;


btn.addEventListener('click',()=>{
    if(
        username.value.trim() == "" &&
        email.value.trim() == "" && 
        password.value.trim() == ""
    ){
        alert("pre-encha todos os dados!");
        return
    }
    const conect_db = new Db;
    conect_db.conection();
    conect_db.addUser(username.value,password.value,email.value);
    username_txt.innerText = username.value;
    username.value = "";
    email.value = "";
    password.value = "";
    
    console.log(conect_db.listUser())
  
    conect_db.close()
});





