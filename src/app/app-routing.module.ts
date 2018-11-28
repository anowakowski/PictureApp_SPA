import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { YouComponent } from './photo-explore/you/you.component';
import { DiscoverComponent } from './photo-explore/discover/discover.component';
import { GroupComponent } from './photo-explore/group/group.component';
import { ExploreComponent } from './photo-explore/explore/explore.component';
import { ExploreUsersListResolver } from './_resolvers/explore-users-list.resolver';


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
      {path: 'explore', component: ExploreComponent,resolve: {users:ExploreUsersListResolver}}
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
