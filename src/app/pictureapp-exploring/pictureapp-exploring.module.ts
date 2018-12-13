import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureappExploringComponent } from './pictureapp-exploring.component';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';

const routes: Routes = [
  {path: '', component: PictureappExploringComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    PictureappExploringComponent,
    SidenavComponent,
    ToolbarComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PictureappExploringModule { }
