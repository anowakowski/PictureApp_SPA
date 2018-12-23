import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { appRoutes } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { ErrorInterceptorProvider } from './interceptors/error.interceptor';
import { RoutePathService } from './services/RoutePath.service';

export function tokenGetter() {
    return localStorage.getItem('token');
}

const routes: Routes = [
   {
      path: 'register',
      loadChildren: '../app/modules/home-regiser/home-regiser.module#HomeRegisterModule'
   },
   {
      path: 'login',
      loadChildren: '../app/modules/home-login/home-login.module#HomeLoginModule'
   },
   {
      path: '',
      loadChildren: '../app/modules/pictureapp-explore/pictureapp-explore.module#PictureAppExploreModule'
   },
   {path: '**', redirectTo: ''}
];

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
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
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
