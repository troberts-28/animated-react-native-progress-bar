import React, { useEffect, useMemo, useState } from "react";

import { LayoutAnimation, View } from "react-native";

import styles from "./styles";
import type { ProgressProps } from "./types";
import { getTrackColor } from "../../utils/getTrackColor";
import { getValueWidth } from "../../utils/getValueWidth";

const Progress = (props: ProgressProps) => {
    const {
        animate = true,
        children,
        filledTrackStyle,
        layoutAnimationConfig,
        max = 100,
        min = 0,
        trackColor,
        trackStyle,
        value = 0,
    } = props;

    const [valueWidth, setValueWidth] = useState(
        getValueWidth(value, min, max)
    );

    useEffect(() => {
        // set using an effect rather than directly to ensure the layout animation
        // is decoupled from the event that triggers the value change
        const newValueWidth = getValueWidth(value, min, max);

        if (animate) {
            setTimeout(() => {
                LayoutAnimation.configureNext({
                    ...LayoutAnimation.Presets.easeInEaseOut,
                    duration: 1000,
                    ...layoutAnimationConfig,
                });
                setValueWidth(newValueWidth);
            }, 0);
        } else {
            setValueWidth(newValueWidth);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [max, min, value]);

    const calculatedTrackColor = useMemo(() => {
        return getTrackColor(value, trackColor);
    }, [trackColor, value]);

    return (
        <View style={[styles.track, trackStyle]}>
            <View
                style={[
                    styles.filledTrack,
                    filledTrackStyle,
                    {
                        width: `${valueWidth}%`,
                        opacity: valueWidth > 0.1 ? 1 : 0,
                        backgroundColor: calculatedTrackColor,
                    },
                ]}
            />
            <View style={styles.childrenContainer}>{children}</View>
        </View>
    );
};

export default React.memo(Progress);
