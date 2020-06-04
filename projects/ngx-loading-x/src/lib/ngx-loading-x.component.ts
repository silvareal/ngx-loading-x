import { Component, OnInit, Input } from '@angular/core';
import { PositionType, SpinnerType } from './utils/types';
import { NgxLoadingXConfig } from './utils/NgxLoadingXConfig.interface';
import { ChangeDetectionStrategy } from '@angular/core';
import { DEFAULT_CONFIG } from './utils/NgxLoadingXConfig.constants';
import { SPINNER_CONFIG } from './utils/enums';
@Component({
  selector: 'ngx-loading-x',
  templateUrl: './ngx-loading-x.component.html',
  styleUrls: ['./ngx-loading-x.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NgxLoadingXComponent implements OnInit {
  @Input() show: Boolean;
  @Input() bgBlur: Number;
  @Input() bgColor: String;
  @Input() bgOpacity: Number;
  @Input() bgLogoUrl: String;
  @Input() bgLogoUrlPosition: PositionType;
  @Input() bgLogoUrlSize: Number;
  @Input() spinnerType: SpinnerType;
  @Input() spinnerSize: Number;
  @Input() spinnerColor: String;
  

  defaultConfig: NgxLoadingXConfig;

  spinnerDivs: Number[];
  spinnerClass: String;

  constructor() {
    this.defaultConfig = DEFAULT_CONFIG;
    this.show = DEFAULT_CONFIG.show;
    this.bgBlur = DEFAULT_CONFIG.bgBlur;
    this.bgColor = DEFAULT_CONFIG.bgColor;
    this.bgOpacity = DEFAULT_CONFIG.bgOpacity;
    this.bgLogoUrl = DEFAULT_CONFIG.bgLogoUrl;
    this.bgLogoUrlPosition = DEFAULT_CONFIG.bgLogoUrlPosition;
    this.bgLogoUrlSize = DEFAULT_CONFIG.bgLogoUrlSize;
    this.spinnerType = DEFAULT_CONFIG.spinnerType;
    this.spinnerSize = DEFAULT_CONFIG.spinnerSize;
    this.spinnerColor = DEFAULT_CONFIG.spinnerColor;
   }

  ngOnInit(): void {
  }

  private initializeSpinners(): void {
    this.spinnerDivs = Array(SPINNER_CONFIG[this.spinnerType].divs).fill(1);
    this.spinnerClass = SPINNER_CONFIG[this.spinnerType].class;
  }

}
