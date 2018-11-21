import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberExploreResolver } from './_reslovers/member-explore.resolver';
import { MemberExploreComponent } from './members/member-explore/member-explore.component';
import { YouComponent } from './photo-explore/you/you.component';
import { DiscoverComponent } from './photo-explore/discover/discover.component';
import { GroupComponent } from './photo-explore/group/group.component';


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
