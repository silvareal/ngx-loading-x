import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxLoadingXModule } from 'projects/ngx-loading-x/src/lib/ngx-loading-x.module';
import { NgxLoadingXBlurDirective } from './ngx-loading-xblur.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgxLoadingXBlurDirective
  ],
  imports: [
    BrowserModule,
    NgxLoadingXModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
