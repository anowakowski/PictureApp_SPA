import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureappExploringComponent } from './pictureapp-exploring.component';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MaterialModule } from '../shared/material/material.module';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: PictureappExploringComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'main-content', component: MainContentComponent}
    ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    PictureappExploringComponent,
    SidenavComponent,
    ToolbarComponent,
    MainContentComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class PictureappExploringModule { }
