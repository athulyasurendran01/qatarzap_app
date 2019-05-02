import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserService } from '../../app/user.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loginForm : FormGroup;
  error_message: string;

  constructor(public formBuilder: FormBuilder, private UserService: UserService, 
    public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.required)
    });
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' }
    ]
  }

  gotoLogin(form){
    if (this.loginForm.valid) {
      this.UserService.apiTokenRequest('login', form.value)
        .map(res => res.json()).subscribe(data => {
          if(data.data){
            localStorage.setItem("userId", data.data.id);
            this.navCtrl.push(HomePage);
            window.location.reload();
          }else{
            this.error_message = 'Invalid login!!!';
          }
        },
      error => {
        this.error_message = 'Invalid login!!!';
      });
    }
    
  }
  goBack(){
    this.navCtrl.pop();
  }
}
