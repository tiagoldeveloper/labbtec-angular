import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {MessageService} from 'primeng/api';

@NgModule({
   declarations: [
      LoadingComponent
   ],
   imports: [
      CommonModule,
      ProgressSpinnerModule,
   ],
   exports: [
      LoadingComponent
   ],
  providers: [MessageService]
})
export class UtilModule { }
