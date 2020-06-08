import { NgxLoadingXConfig } from './NgxLoadingXConfig.interface';
import { POSITION, SPINNER } from './enums';

export const DEFAULT_CONFIG: NgxLoadingXConfig = {
    show: false,
    bgBlur: 5,
    bgColor: 'rgba(40, 40, 40, 0.5)',
    bgOpacity: 5,
    bgLogoUrl: '',
    bgLogoUrlPosition: POSITION.bottomRight,
    bgLogoUrlSize: 100,
    spinnerType: SPINNER.wanderingCubes,
    spinnerSize: 120,
    spinnerColor: '#dd1b16',
    spinnerPosition: POSITION.centerCenter,
}

// Spinner Configuration
export const SPINNER_CONFIG = {
    'x-wandering-cubes': {
        divs: 2,
        class: 'x-wandering-cubes'
    },
    'x-ball-spin': {
        divs: 8,
        class: 'x-ball-spin'
    },
    'x-chasing-dots': {
        divs: 2,
        class: 'x-chasing-dots'
    },
    'x-elapsis': {
        divs: 12,
        class: 'x-elapsis'
    },
    'circle-spinner': {
        divs: 12,
        class: 'circle-spinner'
    },
    'three-strings': {
        divs: 3,
        class: 'sk-three-strings'
    },
    'wandering-cubes': {
        divs: 2,
        class: 'sk-wandering-cubes'
    }
};