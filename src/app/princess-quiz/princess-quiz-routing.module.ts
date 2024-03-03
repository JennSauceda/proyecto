import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincessQuizPage } from './princess-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: PrincessQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincessQuizPageRoutingModule {}
