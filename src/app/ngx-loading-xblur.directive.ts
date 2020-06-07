import { Directive, Renderer2, ElementRef, Input, OnInit, OnChanges } from '@angular/core';
import { DEFAULT_CONFIG } from 'projects/ngx-loading-x/src/lib/utils/NgxLoadingXConfig.constants';

@Directive({
  selector: '[NgxLoadingXBlur]'
})

export class NgxLoadingXBlurDirective implements OnChanges {
  @Input() blur;
  @Input() show;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.blur = DEFAULT_CONFIG.bgBlur;
    this.show = DEFAULT_CONFIG.show;
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
