import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter7PageRoutingModule } from './chapter7-routing.module';

import { Chapter7Page } from './chapter7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter7PageRoutingModule
  ],
  declarations: [Chapter7Page]
})
export class Chapter7PageModule {}
