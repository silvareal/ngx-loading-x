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
    spinnerPosition: POSITION.centerCenter,
}

// Spinner Configuration
export const SPINNER_CONFIG = {
    'three-strings': {
        divs: 3,
        class: 'sk-three-strings'
    },
    'wandering-cubes': {
        divs: 2,
        class: 'sk-wandering-cubes'
    }
};