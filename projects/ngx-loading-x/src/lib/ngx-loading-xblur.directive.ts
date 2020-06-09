import { Directive, Renderer2, ElementRef, Input, OnChanges } from '@angular/core';
import { NgxLoadingXService } from './ngx-loading-x.service';
import { NgxLoadingXConfig } from '../public-api';

@Directive({
  selector: '[NgxLoadingXBlur]'
})

export class NgxLoadingXBlurDirective implements OnChanges {
  defaultConfig: NgxLoadingXConfig;
  
  @Input() blur;
  @Input() show;

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private ngxLoadingXService: NgxLoadingXService) {
    this.defaultConfig = this.ngxLoadingXService.getDefaultConfig();

    this.blur = this.defaultConfig.bgBlur;
    this.show = this.defaultConfig.show;
  }

  ngOnChanges() {
    if (this.show) {
      const blurValue = `blur(${this.blur}px)`;
      this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-filter', blurValue);
      this.renderer.setStyle(this.elementRef.nativeElement, 'filter', blurValue);
    } else {
      const blurValue = `none`;
      this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-filter', blurValue);
      this.renderer.setStyle(this.elementRef.nativeElement, 'filter', blurValue);
    }
  }
}
