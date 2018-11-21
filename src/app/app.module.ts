import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap';
import { appRoutes } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavLoginComponent } from './nav/nav-login/nav-login.component';
import { RouterModule } from '@angular/router';
import { PhotoExploreModule } from './photo-explore/photo-explore.module';

import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { RoutePathService } from './_services/RoutePath.service';
import { AuthGuard } from './_guards/auth.guard';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberExploreResolver } from './_reslovers/member-explore.resolver';
import { MemberExploreComponent } from './members/member-explore/member-explore.component';

export function tokenGetter() {
    return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      RegisterComponent,
      HomeComponent,
      NavLoginComponent,
      MemberEditComponent,
      MemberExploreComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      PhotoExploreModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
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
      AlertifyService,
      RoutePathService,
      ErrorInterceptorProvider,
      AuthGuard,
      MemberExploreResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
