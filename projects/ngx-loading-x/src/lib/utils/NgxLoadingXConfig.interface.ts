import { PositionType, SpinnerType } from './types';

export interface NgxLoadingXConfig {
    show: Boolean;
    bgBlur: Number;
    bgColor: String;
    bgOpacity: Number;
    bgLogoUrl: String;
    bgLogoUrlPosition: PositionType;
    bgLogoUrlSize: Number;
    spinnerType: SpinnerType;
    spinnerSize: Number;
    spinnerColor: String;
}
