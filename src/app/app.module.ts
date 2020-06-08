import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxLoadingXModule } from 'projects/ngx-loading-x/src/lib/ngx-loading-x.module';
import { NgxLoadingXBlurDirective } from './ngx-loading-xblur.directive';
import { POSITION, SPINNER } from 'projects/ngx-loading-x/src/lib/utils/enums';
import { NgxLoadingXConfig } from 'projects/ngx-loading-x/src/lib/utils/NgxLoadingXConfig.interface';


const ngxLoadingXConfig: NgxLoadingXConfig = {
  show: false,
  bgBlur: 0,
  bgColor: 'rgba(40, 40, 40, 0.5)',
  bgOpacity: 5,
  bgLogoUrl: '',
  bgLogoUrlPosition: POSITION.topLeft,
  bgLogoUrlSize: 100,
  spinnerType: SPINNER.wanderingCubes,
  spinnerSize: 120,
  spinnerColor: 'yellow',
  spinnerPosition: POSITION.centerCenter,
}
@NgModule({
  declarations: [
    AppComponent,
    NgxLoadingXBlurDirective
  ],
  imports: [
    BrowserModule,
    NgxLoadingXModule.forRoot(ngxLoadingXConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
