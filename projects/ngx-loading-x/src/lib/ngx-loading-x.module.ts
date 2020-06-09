import { CommonModule } from '@angular/common';  
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxLoadingXComponent } from './ngx-loading-x.component';
import { NgxLoadingXConfig } from './utils/NgxLoadingXConfig.interface';
import { NGX_LOADING_X_TOKEN } from './ngx-loading-x-config.token';
import { NgxLoadingXBlurDirective } from './ngx-loading-xblur.directive';



@NgModule({
  declarations: [NgxLoadingXComponent, NgxLoadingXBlurDirective],
  imports: [
    CommonModule,
  ],
  exports: [NgxLoadingXComponent, NgxLoadingXBlurDirective]
})
export class NgxLoadingXModule { 
  
  static forRoot(ngxLoaderXConfig: NgxLoadingXConfig): ModuleWithProviders<NgxLoadingXModule> {
  return {
    ngModule: NgxLoadingXModule,
    providers: [
      {
        provide: NGX_LOADING_X_TOKEN,
        useValue: ngxLoaderXConfig
      }
    ]
  };
}
}
