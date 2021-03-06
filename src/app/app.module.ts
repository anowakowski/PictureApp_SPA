import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { ErrorInterceptorProvider } from './interceptors/error.interceptor';
import { RoutePathService } from './services/RoutePath.service';
import { LocalStorageService } from './services/local-storage.service';

export function tokenGetter() {
    return localStorage.getItem('token');
}

const routes: Routes = [
   {
      path: 'home',
      loadChildren: '../app/modules/home/home.module#HomeModule'
   },
   {
      path: 'auth',
      loadChildren: '../app/modules/register-login/register-login.module#RegisterLoginModule'
   },
   {
      path: 'photo-uploader',
      loadChildren: '../app/modules/photo-uploader/photo-uploader.module#PhotoUploaderModule'
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
      ErrorInterceptorProvider,
      LocalStorageService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
