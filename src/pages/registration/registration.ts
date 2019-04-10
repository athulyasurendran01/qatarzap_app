import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserService } from '../../app/user.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-register',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  registerForm : FormGroup;
  validation_messages = {
        'name': [{ type: 'pattern', message: 'Please enter a number like 12345678/00.' }],
        'email': [{ type: 'pattern', message: 'Please enter a number like 12345678/00.' }],
        'password': [{ type: 'pattern', message: 'Please enter a number like 12345678/00.' }],
        'confirm_password': [{ type: 'pattern', message: 'Please enter a number like 12345678/00.' }],
        'phone': [{ type: 'pattern', message: 'Please enter a number like 12345678/00.' }]
  }
  constructor(public formBuilder: FormBuilder, private UserService: UserService, public navCtrl: NavController, public navParams: NavParams) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }
  gotoRegister(form){
    if (this.registerForm.valid) {
      this.UserService.apiTokenRequest('user', form.value)
  	    .map(res => res.json()).subscribe(data => {
          localStorage.setItem("userId", data.data.id);
          this.navCtrl.push(HomePage);
  	    },
  		error => {
  			alert(error);
      });
    }
  }
  goBack(){
    this.navCtrl.pop();
  }
}
