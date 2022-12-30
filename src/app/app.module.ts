import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivaDirective } from './directiva.directive';
import { NglfDirective } from './nglf.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaDirective,
    NglfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
