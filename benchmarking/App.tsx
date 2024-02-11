import React, { useEffect, useMemo, useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import ReactNativeAnimatedProgressBar from "react-native-animated-progress";
import {
    PaperProvider,
    ProgressBar as ReactNativePaperProgressBar,
} from "react-native-paper";
import { Bar as ReactNativeProgressBar } from "react-native-progress";

import { ProgressBar as SimpleReactNativeProgressBar } from "../src";

export default function App() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setProgress((progress) => {
                const newProgress = progress + 20;
                if (newProgress <= 100) {
                    return newProgress;
                }

                // resetKey.current = Math.random();
                return 0;
            });
        }, 1500);
    }, []);

    return (
        <View style={styles.container}>
            {/* <SimpleReactNativeProgressBar value={progress} /> */}
            {/* <ReactNativeAnimatedProgressBar
                animated={true}
                height={20}
                progress={progress}
                trackColor="#10B981"
                width={100}
            /> */}
            {/* <PaperProvider>
                <ReactNativePaperProgressBar progress={progress} />
            </PaperProvider> */}
            <ReactNativeProgressBar
                animationConfig={{
                    duration: 2000,
                }}
                progress={progress / 100}
                width={200}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
