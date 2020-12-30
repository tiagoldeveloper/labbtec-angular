import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FramePageComponent} from './core/master/frame.page';
import {SecurityModule} from './security/security.module';
import {CoreModule} from './core/core.module';
import {UtilModule} from './util/util.module';

@NgModule({
  declarations: [
    AppComponent,
    FramePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SecurityModule,
    CoreModule,
    UtilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
