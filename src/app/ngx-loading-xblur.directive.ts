import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';
import { DEFAULT_CONFIG } from 'projects/ngx-loading-x/src/lib/utils/NgxLoadingXConfig.constants';

@Directive({
  selector: '[NgxLoadingXBlur]'
})

export class NgxLoadingXBlurDirective implements OnInit {
  @Input() blur;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.blur = DEFAULT_CONFIG.bgBlur;
   }

  ngOnInit(): void {
    if (DEFAULT_CONFIG.show === true) {}
    console.log(DEFAULT_CONFIG.show['loading'])
      const blurValue = `blur(${this.blur}px)`;
      this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-filter', blurValue);
      this.renderer.setStyle(this.elementRef.nativeElement, 'filter', blurValue);
    
  }
}
