import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { YouComponent } from './you/you.component';
import { DiscoverComponent } from './discover/discover.component';
import { GroupComponent } from './group/group.component';
import { AuthGuard } from './_guards/auth.guard';
import { DiscoverResolver } from './_reslovers/discover.resolver';


export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'you', component: YouComponent},
      {path: 'discover', component: DiscoverComponent, resolve: {users: DiscoverResolver}},
      {path: 'group', component: GroupComponent}
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
