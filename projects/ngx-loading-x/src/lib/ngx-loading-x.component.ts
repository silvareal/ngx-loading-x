import { POSITION } from './utils/enums';
import { Component, OnInit, Input } from '@angular/core';
import { PositionType, SpinnerType } from './utils/types';
import { NgxLoadingXConfig } from './utils/NgxLoadingXConfig.interface';
import { ChangeDetectionStrategy } from '@angular/core';
import { SPINNER_CONFIG } from './utils/NgxLoadingXConfig.constants';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxLoadingXService } from './ngx-loading-x.service';
@Component({
  selector: 'ngx-loading-x',
  templateUrl: './ngx-loading-x.component.html',
  styleUrls: ['./ngx-loading-x.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NgxLoadingXComponent implements OnInit {

  @Input() show: boolean;
  @Input() bgBlur: number;
  @Input() bgColor: string;
  @Input() bgOpacity: number;
  @Input() bgLogoUrl: string;
  @Input() bgLogoUrlPosition: PositionType;
  @Input() bgLogoUrlSize: number;
  @Input() spinnerType: SpinnerType;
  @Input() spinnerSize: number;
  @Input() spinnerColor: string;
  @Input() spinnerPosition: PositionType;


  defaultConfig: NgxLoadingXConfig;

  spinnerDivs: Number[];
  spinnerClass: string;
  trustedLogoUrl: SafeResourceUrl;

  spinnerTop;
  logoTop;

  constructor(private domSanitizer: DomSanitizer, private ngxLoadingXService: NgxLoadingXService) {
    this.defaultConfig = this.ngxLoadingXService.getDefaultConfig();
    this.show = this.defaultConfig.show;
    this.bgBlur = this.defaultConfig.bgBlur;
    this.bgColor = this.defaultConfig.bgColor;
    this.bgOpacity = this.defaultConfig.bgOpacity;
    this.bgLogoUrl = this.defaultConfig.bgLogoUrl;
    this.bgLogoUrlPosition = this.defaultConfig.bgLogoUrlPosition;
    this.bgLogoUrlSize = this.defaultConfig.bgLogoUrlSize;
    this.spinnerType = this.defaultConfig.spinnerType;
    this.spinnerSize = this.defaultConfig.spinnerSize;
    this.spinnerColor = this.defaultConfig.spinnerColor;
    this.spinnerPosition = this.defaultConfig.spinnerPosition;
  }



  private initializeSpinners(): void {
    this.spinnerDivs = Array(SPINNER_CONFIG[this.spinnerType].divs).fill(1);
    this.spinnerClass = SPINNER_CONFIG[this.spinnerType].class;
  }

  private determineCenterPositions(): void {
    if (this.bgLogoUrlPosition === POSITION.centerCenter && this.spinnerPosition === POSITION.centerCenter) {
      this.spinnerTop = this.domSanitizer.bypassSecurityTrustStyle(`calc(50% + 88px)`);
      this.logoTop = this.domSanitizer.bypassSecurityTrustStyle(`calc(50% - 88px)`);
    }
  }

  ngOnInit(): void {
    this.trustedLogoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.bgLogoUrl);
    this.initializeSpinners();
    this.determineCenterPositions();
  }


}
