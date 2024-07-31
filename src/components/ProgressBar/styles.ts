import type { ComponentProps } from "react";

import { StyleSheet } from "react-native";
import type { View } from "react-native";

export interface CustomProgressBarStyles {
    activeTrackChildContainer?: ComponentProps<typeof View>["style"];
    childrenContainer?: ComponentProps<typeof View>["style"];
    filledTrack?: ComponentProps<typeof View>["style"];
    inactiveTrackChildContainer?: ComponentProps<typeof View>["style"];
    track?: ComponentProps<typeof View>["style"];
}

export const generateStyles = (
    customStyles: CustomProgressBarStyles | undefined
) =>
    StyleSheet.create({
        track: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            overflow: "hidden",
            borderRadius: 9999,
            height: 25,
            width: "100%",
            backgroundColor: "#d4d4d4",
            ...StyleSheet.flatten(customStyles?.track),
        },
        filledTrack: {
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 9999,
            height: "100%",
            ...StyleSheet.flatten(customStyles?.filledTrack),
        },
        childrenContainer: {
            position: "absolute",
            alignSelf: "center",
            alignItems: "center",
            width: "100%",
            ...StyleSheet.flatten(customStyles?.childrenContainer),
        },
        activeTrackChildContainer: {
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            ...StyleSheet.flatten(customStyles?.activeTrackChildContainer),
        },
        inactiveTrackChildContainer: {
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            ...StyleSheet.flatten(customStyles?.inactiveTrackChildContainer),
        },
    });
