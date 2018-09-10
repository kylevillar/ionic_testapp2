import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { RecoverPasswordPage } from '../../pages/recover-password/recover-password';
import { CreateAccountPage } from '../../pages/create-account/create-account';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    this.navCtrl.setRoot(HomePage);
  }
  recoverPassword(){
    this.navCtrl.setRoot(RecoverPasswordPage);
  }
  register(){
    this.navCtrl.setRoot(CreateAccountPage);
  }

}
