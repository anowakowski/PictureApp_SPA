import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { YouComponent } from './you/you.component';
import { GroupComponent } from './group/group.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberExploreResolver } from './_reslovers/member-explore.resolver';
import { MemberExploreComponent } from './members/member-explore/member-explore.component';
import { DiscoverComponent } from './discover/discover.component';


export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'you', component: YouComponent},
      {path: 'discover', component: DiscoverComponent},
      {path: 'group', component: GroupComponent},
      {path: 'member-explore', component: MemberExploreComponent, resolve: {users: MemberExploreResolver}}
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
