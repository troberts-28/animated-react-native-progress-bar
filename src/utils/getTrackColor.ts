import type { TrackColorType } from "../components/Progress/types";

export const getTrackColor = (
    value: number,
    trackColor: string | TrackColorType[] | undefined
) => {
    if (!trackColor) {
        return "#5B0854";
    }

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
