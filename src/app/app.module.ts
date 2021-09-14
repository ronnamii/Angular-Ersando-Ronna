import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewUserComponent } from './view-user/view-user.component';
import { Page404Component } from './page404/page404.component';
import { UsersModule } from './user-dashboard/users.module';


@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    ViewUserComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
