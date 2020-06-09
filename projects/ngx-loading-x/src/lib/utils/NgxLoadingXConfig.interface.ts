import { PositionType, SpinnerType } from './types';

export interface NgxLoadingXConfig {
    show?: boolean;
    bgBlur?: number;
    bgColor?: string;
    bgOpacity?: number;
    bgLogoUrl?: string;
    bgLogoUrlPosition?: PositionType;
    bgLogoUrlSize?: number;
    spinnerType?: SpinnerType;
    spinnerSize?: number;
    spinnerColor?: string;
    spinnerPosition?: PositionType
}
