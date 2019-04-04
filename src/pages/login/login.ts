import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { UserService } from '../../app/user.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loginForm : FormGroup;
  validation_messages = {
        'username': [{ type: 'pattern', message: 'Please enter a number like 12345678/00.' }],
        'password': [{ type: 'pattern', message: 'Please enter a number like 12345678/00.' }]
  }

  constructor(public formBuilder: FormBuilder, private UserService: UserService, public navCtrl: NavController, public navParams: NavParams) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  gotoLogin(form){
    if (this.loginForm.valid) {
      this.UserService.apiTokenRequest('login', form.value)
        .map(res => res.json()).subscribe(data => {
          console.log(data)
          this.navCtrl.push(ListPage);
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
