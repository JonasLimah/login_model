export class User{
    private username:string;
    private password:string;
    private email:string;

    constructor(username:string,password:string,email:string){
        this.username=username;
        this.password=password;
        this.email=email;
    }
    _getUsername():string{
        return this.username;
    }
    _getPassword():string{
        return this.password;
    }
    _getEmail():string{
        return this.email;
    }
    _setUsername(newUsername:string){
        this.username = newUsername;
    }
    _setPassword(newPassword:string){
        this.password = newPassword;
    }
    _setEmail(newEmail:string){
        this.email = newEmail;
    }
   
}