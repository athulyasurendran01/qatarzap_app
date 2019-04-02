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
  userid: number = 0;
  
  personal = {
    name: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    alteremail: ''

  };

  business = {
    name: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    alteremail: ''

  };

  
  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: 70 };
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 70 };

  constructor(private UserService: UserService, public navCtrl: NavController, public navParams: NavParams, private transfer: FileTransfer, private camera: Camera) {
  //   this.personal = new FormGroup({
  //     name: new FormControl('', Validators.required),
  //     email: new FormControl('', Validators.compose([
  //       Validators.required,
  //       Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  //     ])),
  //     phone: new FormControl('', Validators.required),
  //     company: new FormControl('', Validators.required),
  //     designation: new FormControl('', Validators.required),
  //     alteremail: new FormControl('',Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'))

  //  });

  //localStorage.getItem("userId");
    this.userid = 1;
    this.UserService.apiTokenRequestGet('user/'+this.userid, {})
	    .map(res => res.json()).subscribe(data => {
        console.log(data)
	    },
		error => {
			alert(error);
    });

    this.UserService.apiTokenRequestGet('get-business/'+this.userid, {})
	    .map(res => res.json()).subscribe(data => {
        console.log(data)
	    },
		error => {
			alert(error);
    });
  }

  logForm(form) {
    console.log(form.value)
    this.UserService.apiTokenRequest('update-profile/'+1, form.value)
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
    this.UserService.apiTokenRequest('change-password/'+1, form.value)
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
    this.UserService.apiTokenRequest('business', form.value)
	    .map(res => res.json()).subscribe(data => {
        console.log(data)
	    },
		error => {
			alert(error);
    });
  }

  editBusiness(id){
    this.UserService.apiTokenRequestGet('edit-business/'+id, {})
	    .map(res => res.json()).subscribe(data => {
        console.log(data)
	    },
		error => {
			alert(error);
    });
  }

  deleteBusiness(id){
    this.UserService.apiTokenRequestGet('delete-business/'+id, {})
	    .map(res => res.json()).subscribe(data => {
        console.log(data)
	    },
		error => {
			alert(error);
    });
  }

  upload(type)
  {
    let options = {
      quality: 100
    };
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:

      const fileTransfer: FileTransferObject = this.transfer.create();
        let options1: FileUploadOptions = {
          fileKey: 'file',
          fileName: 'name.jpg',
          headers: {}
        }

        fileTransfer.upload(imageData, 'https://localhost/ionic/upload.php', options1)
        .then((data) => {
          // success
          alert("success");
        }, (err) => {
          // error
          alert("error"+JSON.stringify(err));
        });
      });
  }
}


// header('Access-Control-Allow-Origin: *');
// $target_path = "uploads/";
 
// $target_path = $target_path . basename( $_FILES['file']['name']);
 
// if (move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
//     echo "Upload and move success";
// } else {
// echo $target_path;
//     echo "There was an error uploading the file, please try again!";
// }