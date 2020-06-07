import { NgxLoadingXConfig } from './NgxLoadingXConfig.interface';
import { POSITION, SPINNER } from './enums';

export const DEFAULT_CONFIG: NgxLoadingXConfig = {
    show: false,
    bgBlur: 5,
    bgColor: 'rgba(40, 40, 40, 0.5)',
    bgOpacity: 5,
    bgLogoUrl: '',
    bgLogoUrlPosition: POSITION.centerCenter,
    bgLogoUrlSize: 100,
    spinnerType: SPINNER.threeStrings,
    spinnerSize: 150,
    spinnerColor: '#dd1b16',
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