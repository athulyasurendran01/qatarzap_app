import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserService } from '../../app/user.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'page-register',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  registerForm : FormGroup;
  error_message: string;

  constructor(public formBuilder: FormBuilder, private UserService: UserService, 
    public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }

  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm Password is required.' }
    ]
  }

  gotoRegister(form){
    if (this.registerForm.valid) {
      this.UserService.apiTokenRequest('user', form.value)
  	    .map(res => res.json()).subscribe(data => {
          if(data.data){
            localStorage.setItem("userId", data.data.id);
            this.navCtrl.push(HomePage);
          }else{
            this.error_message = 'Invalid Registration!!!';
          }
  	    },
  		error => {
        this.error_message = 'Invalid Registration!!!';
      });
    }
  }
  goBack(){
    this.navCtrl.pop();
  }
}
