import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewUserComponent } from './view-user/view-user.component';


const routes: Routes = [
  { path: '', component: UserDashboardComponent},
  { path: 'users', component: UserDashboardComponent},
  { path: 'users', component: ViewUserComponent,
  children: [
  { path: ':id', component: ViewUserComponent},
]},
  { path:'not-found', component: Page404Component},
  { path:'**', redirectTo: 'not-found'},
];

@NgModule({
   imports: [
     RouterModule.forRoot(routes)
    ],

   exports: [
     RouterModule
   ],

   declarations: []
   })
   export class AppRoutingModule { }
