import type { ReactElement } from "react";

import type { LayoutAnimationConfig } from "react-native";

import type { CustomProgressBarStyles } from "./styles";

export type TrackColorType = {
    color: string;
    value: number;
};

export interface ProgressProps {
    activeTrackChild?: ReactElement | ReactElement[] | null;
    activeTrackColor?: string | TrackColorType[];
    animate?: boolean;
    children?: ReactElement | ReactElement[] | null;
    inactiveTrackChild?: ReactElement | ReactElement[] | null;
    layoutAnimationConfig?: LayoutAnimationConfig;
    maxValue?: number;
    minValue?: number;
    styles?: CustomProgressBarStyles;
    trackOffsetPercentage?: number;
    value?: number;
}
