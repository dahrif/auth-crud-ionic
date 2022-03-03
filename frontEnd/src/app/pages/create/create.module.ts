import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePageRoutingModule } from './create-routing.module';

import { CreatePage } from './create.page';

import { TabsComponent } from '../../tabs/tabs.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormBuilder,
    IonicModule,
    CreatePageRoutingModule
  ],
  declarations: [
    CreatePage,
    TabsComponent
  ]
})
export class CreatePageModule {}
