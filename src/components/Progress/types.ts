import type { ComponentProps, ReactElement } from "react";

import type { LayoutAnimationConfig, View } from "react-native";

export type TrackColorType = {
    color: string;
    value: number;
};

export interface ProgressProps {
    animate?: boolean;
    children?: ReactElement | ReactElement[] | null;
    filledTrackStyle?: ComponentProps<typeof View>["style"];
    layoutAnimationConfig?: LayoutAnimationConfig;
    max?: number;
    min?: number;
    trackColor?: string | TrackColorType[];
    trackStyle?: ComponentProps<typeof View>["style"];
    value?: number;
}
