import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { appRoutes } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule, Routes } from '@angular/router';

import { PhotoExploreModule } from './photo-explore/photo-explore.module';
import { PhotoMembersModule } from './photo-members/photo-members.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from './_services/auth.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { RoutePathService } from './_services/RoutePath.service';
import { AuthGuard } from './_guards/auth.guard';
import { ExploreUsersListResolver } from './_resolvers/explore-users-list.resolver';

export function tokenGetter() {
    return localStorage.getItem('token');
}

const routes: Routes = [
   {path: 'demo', loadChildren: '../app/demo/demo.module#DemoModule'},
   {path: '**', redirectTo: 'demo'}
];

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      PhotoExploreModule,
      PhotoMembersModule,
      AuthModule,
      RouterModule.forRoot(routes),
      JwtModule.forRoot({
         config: {
             tokenGetter: tokenGetter,
             whitelistedDomains: ['localhost:5000'],
             blacklistedRoutes: ['localhost:5000/api/auth']
         }
     })
   ],
   providers: [
      AuthService,
      RoutePathService,
      ErrorInterceptorProvider,
      AuthGuard,
      ExploreUsersListResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
