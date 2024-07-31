import React, { useEffect, useMemo, useState } from "react";

import { LayoutAnimation, Platform, UIManager, View } from "react-native";

import { generateStyles } from "./styles";
import type { ProgressProps } from "./types";
import { getTrackColor } from "../../utils/getTrackColor";
import { getPercentageWidth } from "../../utils/getValueWidth";

const Progress = (props: ProgressProps) => {
    const {
        activeTrackChild,
        activeTrackColor = "#10B981",
        animate = true,
        children,
        inactiveTrackChild,
        layoutAnimationConfig,
        maxValue = 100,
        minValue = 0,
        styles: customStyles,
        trackOffsetPercentage = 10,
        value = 50,
    } = props;

    const styles = generateStyles(customStyles);

    const [trackPercentageWidth, setTrackPercentageWidth] = useState(
        getPercentageWidth(value, minValue, maxValue, trackOffsetPercentage)
    );

    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (Platform.OS === "android") {
            UIManager.setLayoutAnimationEnabledExperimental?.(true);
        }
    }, []);

    useEffect(() => {
        // set using an effect rather than directly to ensure the layout animation
        // is decoupled from the event that triggers the value change
        const newValueWidth = getPercentageWidth(
            value,
            minValue,
            maxValue,
            trackOffsetPercentage
        );

        if (animate) {
            setTimeout(() => {
                LayoutAnimation.configureNext({
                    ...LayoutAnimation.Presets.easeInEaseOut,
                    duration: 1000,
                    ...layoutAnimationConfig,
                });
                setTrackPercentageWidth(newValueWidth);
            }, 0);
        } else {
            setTrackPercentageWidth(newValueWidth);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [maxValue, minValue, value]);

    const calculatedTrackColor = useMemo(() => {
        return getTrackColor(value, activeTrackColor);
    }, [activeTrackColor, value]);

    return (
        <View
            onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
            style={styles.track}>
            <View
                style={[
                    styles.filledTrack,
                    {
                        width: width * trackPercentageWidth * 0.01,
                        backgroundColor: calculatedTrackColor,
                        marginLeft: -width * trackOffsetPercentage * 0.01,
                    },
                ]}>
                {activeTrackChild ? (
                    <View
                        style={[
                            styles.activeTrackChildContainer,
                            {
                                marginLeft:
                                    width * trackOffsetPercentage * 0.01,
                            },
                        ]}>
                        {activeTrackChild}
                    </View>
                ) : null}
            </View>
            {inactiveTrackChild ? (
                <View
                    style={[
                        styles.inactiveTrackChildContainer,
                        {
                            width: width * (100 - trackPercentageWidth) * 0.01,
                        },
                    ]}>
                    <View
                        style={[
                            styles.activeTrackChildContainer,
                            {
                                marginRight:
                                    width * trackOffsetPercentage * 0.01,
                            },
                        ]}>
                        {inactiveTrackChild}
                    </View>
                </View>
            ) : null}
            {children ? (
                <View style={styles.childrenContainer}>{children}</View>
            ) : null}
        </View>
    );
};

export default React.memo(Progress);
