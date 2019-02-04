import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoreAppPage } from './more-app';

@NgModule({
  declarations: [
    MoreAppPage,
  ],
  imports: [
    IonicPageModule.forChild(MoreAppPage),
  ],
})
export class MoreAppPageModule {}
