import { db } from "../data"
import { User } from "./User"
export class Db{
    constructor(){
        
    }
  conection(){
    console.log("Conectado no db")
  }
  addUser(name:string,password:string,email:string){
    db.push(new User(name,password,email))
  }
  listUser(){
    console.log(db)
  }
  close(){
    console.log("desconectado no db")
  }
}