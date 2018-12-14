import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsComponent } from './layouts.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutsComponent]
})
export class LayoutsModule { }
