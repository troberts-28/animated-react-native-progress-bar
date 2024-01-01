import type { TrackColorType } from "../components/ProgressBar/types";

export const getTrackColor = (
    value: number,
    trackColor: string | TrackColorType[]
) => {
    if (typeof trackColor === "string") {
        // If trackColor is a string, return it directly
        return trackColor;
    }

    for (const colorInfo of trackColor.sort((a, b) => a.value - b.value)) {
        if (value <= colorInfo.value) {
            return colorInfo.color;
        }
    }
};
