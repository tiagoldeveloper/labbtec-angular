import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramePageComponent } from './core/master/frame.page';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './security/login/login.component';
import { AuthService } from './security/auth.service';

const routes: Routes = [
   {
      path: '',
      component: FramePageComponent,
      canActivate: [AuthService],
      children: [
         { path: '', component: HomeComponent },
      ],
   },

   { path: 'login', component: LoginComponent },
];
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule { }
