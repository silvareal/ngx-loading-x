import { NgxLoadingXConfig } from './NgxLoadingXConfig.interface';
import { POSITION, SPINNER } from './enums';

export const DEFAULT_CONFIG: NgxLoadingXConfig = {
    show: false,
    bgBlur: 5,
    bgColor: 'goldenrod',
    bgOpacity: 5,
    bgLogoUrl: '',
    bgLogoUrlPosition: POSITION.bottomRight,
    bgLogoUrlSize: 100,
    spinnerType: SPINNER.threeStrings,
    spinnerSize: 150,
    spinnerColor: 'goldenrod',
}