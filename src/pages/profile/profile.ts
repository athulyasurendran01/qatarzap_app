import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LayoutPage } from '../layout/layout';
import { ScrollHideConfig } from '../../app/scroll-hide';
import { UserService } from '../../app/user.service';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  profile: boolean = true;
  list: boolean = false;
  password: boolean = false;
  newlist: boolean = false;
  mylist: boolean = true;
  userid: string;
  personal_details: any;
  business_lists: any;
  business: {
    name: '',
    description: '',
    category: '',
    location: '',
    phone: '',
    tagline: '',
    website: '',
    mail: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: '',
    youtube: '',
    profile_pic: '',
    background_pic: ''
  };
  serverurl: string;
  imageurl: string = '../../assets/imgs/no-image.png';

  passwordform = {
    oldpassword: '',
    newpassword: '',
    confirmpassword: ''
  };
  
  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: 70 };
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 70 };

  constructor(private UserService: UserService, public navCtrl: NavController, 
    public navParams: NavParams, private transfer: FileTransfer, private camera: Camera) {
      
    this.serverurl = this.UserService.getServerURL();
    this.userid = localStorage.getItem("userId");
    this.UserService.apiTokenRequestGet('user/'+this.userid, {})
	    .map(res => res.json()).subscribe(data => {
        this.personal_details = data.data;
	    },
		error => {
			alert(error);
    });

    this.UserService.apiTokenRequestGet('business/'+this.userid, {})
	    .map(res => res.json()).subscribe(data => {
        this.business_lists = data.data;
	    },
		error => {
			alert(error);
    });
  }

  updateProfile(form) {
    this.UserService.apiTokenRequest('update-profile/'+this.userid, form.value)
	    .map(res => res.json()).subscribe(data => {
        console.log(data)
	    },
		error => {
			alert(error);
    });
  }
  gotoHome(){
    this.navCtrl.push(LayoutPage);
  }
  activeProfile(){
    this.profile = true;
    this.password = false;
    this.list = false;
  }
  activeList(){
    this.profile = false;
    this.password = false;
    this.list = true;
  }
  activePassword(){
    this.profile = false;
    this.list = false;
    this.password = true;
  }
  changePasswordForm(form){
    this.UserService.apiTokenRequest('change-password/'+this.userid, form.value)
	    .map(res => res.json()).subscribe(data => {
        console.log(data)
	    },
		error => {
			alert(error);
    });
  }
  addNewBusiness(){
    this.mylist = false;
    this.newlist = true;
  }
  viewList(){
    this.mylist = true;
    this.newlist = false;
  }

  saveBusiness(form){
    console.log()
    if(form.value.id){
      var id = form.value.id;
      this.UserService.apiTokenRequest('edit-business/'+id, {})
        .map(res => res.json()).subscribe(data => {
          console.log(data)
        },
      error => {
        alert(error);
      });
    }else{
      this.UserService.apiTokenRequest('business', form.value)
        .map(res => res.json()).subscribe(data => {
          console.log(data)
        },
      error => {
        alert(error);
      });
    }
  }

  editBusiness(id){
    this.business_lists.filter((item) => {
      if (item.id.indexOf(id) >= 0) {
        this.business = item;
        this.addNewBusiness();
      }
    });
  }

  deleteBusiness(id){
    this.UserService.apiTokenRequest('delete-business/'+id, {})
	    .map(res => res.json()).subscribe(data => {
        console.log(data)
	    },
		error => {
			alert(error);
    });
  }

  upload(type){
    
    const options: CameraOptions = {
      quality: 50,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      targetWidth: 200,
      targetHeight: 200

    }
    var this_ = this;
    this.camera.getPicture(options).then((imageData) => {
      if(type == 'profile'){
        this_.imageurl = "data:image/jpeg;base64," + imageData;
        this_.UserService.apiTokenRequest('upload-profilepic/'+this_.userid, {"image_url": imageData})
          .map(res => res.json()).subscribe(result => {
            alert(JSON.stringify(result));
        },
        error => {
          alert(error);
        });
      }else if(type == 'company_pic'){
        this_.business.profile_pic = imageData;
      }else{
        this_.business.background_pic = imageData;
      }
    },(err) => {
        alert(err)
    });
  }
}