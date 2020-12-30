import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProgressBarModule} from 'primeng/progressbar';

@NgModule({
  declarations: [LoginComponent],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    CardModule,
    MessagesModule,
    ProgressBarModule,
    MessageModule,
    ToastModule,
    InputTextModule,
    ButtonModule,
    ProgressSpinnerModule,
  ],
})
export class SecurityModule {}
