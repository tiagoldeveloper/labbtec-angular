import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { CoreService } from './core.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SecurityModule } from '../security/security.module';
import { UtilModule } from '../util/util.module';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';

@NgModule({
   declarations: [
      NavbarComponent,
      HomeComponent
   ],
   imports: [
      InputTextModule,
      ButtonModule,
      MenubarModule,
      SecurityModule,
      UtilModule,
      CommonModule
   ],
   exports: [
      NavbarComponent,
      HomeComponent,
   ],
   providers: [CoreService]
})
export class CoreModule { }
