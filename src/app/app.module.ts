import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap';
import { appRoutes } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavLoginComponent } from './nav/nav-login/nav-login.component';
import { RouterModule } from '@angular/router';
import { YouComponent } from './you/you.component';
import { DiscoverComponent } from './discover/discover.component';
import { GroupComponent } from './group/group.component';

import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { RoutePathService } from './_services/RoutePath.service';
import { AuthGuard } from './_guards/auth.guard';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { DiscoverResolver } from './_reslovers/discover.resolver';

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
      YouComponent,
      DiscoverComponent,
      GroupComponent,
      MemberEditComponent,
      MemberListComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService,
      AlertifyService,
      RoutePathService,
      ErrorInterceptorProvider,
      AuthGuard,
      DiscoverResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
