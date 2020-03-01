import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter5PageRoutingModule } from './chapter5-routing.module';

import { Chapter5Page } from './chapter5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter5PageRoutingModule
  ],
  declarations: [Chapter5Page]
})
export class Chapter5PageModule {}
