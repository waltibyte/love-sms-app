import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmsPage } from './sms';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SmsPage,
  ],
  imports: [
    IonicPageModule.forChild(SmsPage),
    ComponentsModule
  ],
})
export class SmsPageModule {}
