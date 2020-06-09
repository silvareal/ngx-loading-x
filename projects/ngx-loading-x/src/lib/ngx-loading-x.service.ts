import { Injectable, Optional, Inject } from '@angular/core';
import { NGX_LOADING_X_TOKEN } from './ngx-loading-x-config.token';
import { NgxLoadingXConfig } from './utils/NgxLoadingXConfig.interface';
import { DEFAULT_CONFIG } from './utils/NgxLoadingXConfig.constants';

@Injectable({
  providedIn: 'root'
})
export class NgxLoadingXService {
  defaultConfig: NgxLoadingXConfig;

  constructor(@Optional() @Inject(NGX_LOADING_X_TOKEN) private config: NgxLoadingXConfig) { 
    this.defaultConfig = {...DEFAULT_CONFIG}
    if (this.config) {
      this.defaultConfig = {...DEFAULT_CONFIG, ...this.config}
    }
  }

  getDefaultConfig(): NgxLoadingXConfig {
    return {...this.defaultConfig}
  }
}
