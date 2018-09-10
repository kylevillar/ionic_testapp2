import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { LoginPage } from '../../pages/login/login';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  	//this.menuCtrl.enable(false,'sidemenu');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

  ngOnInit(){
  	setTimeout(() => {
  		this.navCtrl.setRoot(LoginPage);
  	}, 5000);
  }

}
