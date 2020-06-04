import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxLoadingXModule } from 'projects/ngx-loading-x/src/lib/ngx-loading-x.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxLoadingXModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
