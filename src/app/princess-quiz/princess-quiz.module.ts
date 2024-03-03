import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincessQuizPageRoutingModule } from './princess-quiz-routing.module';

import { PrincessQuizPage } from './princess-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincessQuizPageRoutingModule
  ],
  declarations: [PrincessQuizPage]
})
export class PrincessQuizPageModule {}
