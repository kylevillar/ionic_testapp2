import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { StartPage } from '../pages/start/start';
import { CreateAccountPage } from '../pages/create-account/create-account'; 
import { EditAccountPage } from '../pages/edit-account/edit-account'; 
import { RecoverPasswordPage } from '../pages/recover-password/recover-password';
import { CreateResumePage } from '../pages/create-resume/create-resume';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    StartPage,
    RecoverPasswordPage,
    CreateAccountPage,
    EditAccountPage,
    CreateResumePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    StartPage,
    RecoverPasswordPage,
    CreateAccountPage,
    EditAccountPage,
    CreateResumePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
