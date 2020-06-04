import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxLoadingXComponent } from './ngx-loading-x.component';
import { NgxLoadingXConfig } from './utils/NgxLoadingXConfig.interface';
import { NGX_LOADING_X_TOKEN } from './ngx-loading-x-config.token';



@NgModule({
  declarations: [NgxLoadingXComponent],
  imports: [
  ],
  exports: [NgxLoadingXComponent]
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
