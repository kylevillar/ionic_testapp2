import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { CreateResumePage } from '../../pages/create-resume/create-resume';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  createResume(){
  	this.navCtrl.setRoot(CreateResumePage);
  }
}
