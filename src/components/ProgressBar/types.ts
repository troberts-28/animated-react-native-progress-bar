import type { ReactElement } from "react";

import type { LayoutAnimationConfig } from "react-native";

import type { CustomProgressBarStyles } from "./styles";

export type TrackColorType = {
    color: string;
    value: number;
};

export interface ProgressProps {
    animate?: boolean;
    children?: ReactElement | ReactElement[] | null;
    layoutAnimationConfig?: LayoutAnimationConfig;
    max?: number;
    min?: number;
    styles?: CustomProgressBarStyles;
    trackColor?: string | TrackColorType[];
    value?: number;
}
