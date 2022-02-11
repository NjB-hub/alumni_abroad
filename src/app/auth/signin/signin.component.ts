import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm : FormGroup = this.fb.group({ });
  submitted = false;
  signinMessage: string = '';
  signinSuccessMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ){ 

  }

  get email(){
    return this.signinForm.get('email');
  }
 
  get password(){
    return this.signinForm.get('password');
  }

  onSubmit(): void {
    var email = this.signinForm.get('email')!.value;
    var password = this.signinForm.get('password')!.value;
    
    this.authService.signInUser(email,password).then(
      (response:any) => {
        this.authService.isAuth = true;
        this.authService.isAdmin = response.data.isAdmin;

        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", response.token);
   
        this.router.navigate(['/feed']);
      },
      (error) => {
        
        this.signinMessage = "Connexion error. Can not reach the server.";
        this.router.navigate(['/auth/signin']);
      }
    );
  }

  initForm(){
    this.signinForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['successMessage']){
        this.signinSuccessMessage = params['successMessage'];
      }
    })

    this.initForm();
  }

}
