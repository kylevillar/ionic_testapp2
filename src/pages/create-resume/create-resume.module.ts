import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateResumePage } from './create-resume';

@NgModule({
  declarations: [
    CreateResumePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateResumePage),
  ],
})
export class CreateResumePageModule {}
