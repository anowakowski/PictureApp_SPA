import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { YouComponent } from './you/you.component';
import { DiscoverComponent } from './discover/discover.component';
import { GroupComponent } from './group/group.component';


export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    children: [
      {path: 'you', component: YouComponent},
      {path: 'discover', component: DiscoverComponent},
      {path: 'group', component: GroupComponent}
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
