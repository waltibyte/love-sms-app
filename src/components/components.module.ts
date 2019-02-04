import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CategoryComponent } from './category/category';
import { MessagesComponent } from './messages/messages';
import { PipesModule } from '../pipes/pipes.module';
import { SmsComponent } from './sms/sms';
@NgModule({
	declarations: [
        CategoryComponent,
        MessagesComponent,
        SmsComponent],
	imports: [
    IonicModule,
    PipesModule
  ],
	exports: [
    CategoryComponent,
    MessagesComponent,
    SmsComponent]
})
export class ComponentsModule {}
