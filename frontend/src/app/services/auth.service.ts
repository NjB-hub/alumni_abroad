import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    
    constructor(private router: Router,
        private http: HttpClient) {}

    isAdmin:boolean = false;
    isAuth:boolean = false; //boolean for authentication state
    /*This is the service where authentication functons are defined */
    signUpUser(email: string, username:string, password: string){
        return new Promise( //asynchronous function
            (resolve, reject) => {
                //Place backend function here
                this.http.post('http://localhost:1337/user/register', {username: username, email: email, password: password}).subscribe(
                    (response) =>{
                        resolve(response);
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        ); 
    }

    signInUser(username:string, password:string){
        return new Promise( //asynchronous function
            (resolve, reject) => {
                //Place backend function here
                this.http.post('http://localhost:1337/user/login', {email: username, password: password}).subscribe(
                    (response) =>{
                        resolve(response);
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    backupPassword(email:string){
        return new Promise( //asynchronous function
            (resolve, reject) => {
                //Place backend function here
                
            }
        );
    }
}