import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExFormsComponent} from 'src/experiment-typed-forms/ex-forms.component';

const routes: Routes = [
  {
    path: '',
    component: ExFormsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
