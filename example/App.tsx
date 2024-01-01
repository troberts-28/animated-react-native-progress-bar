import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AnimatedLottieView from "lottie-react-native";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    useWindowDimensions,
    FlatList,
} from "react-native";

import { Checkbox } from "./components/Checkbox";
import { ProgressBar } from "../src";

const TO_DO_LIST = [
    "Do washing",
    "Hoover the house",
    "Wipe surfaces",
    "Order online shop",
    "Catch ducks",
];

SplashScreen.preventAutoHideAsync();

const AppContent = () => {
    const { width: screenWidth } = useWindowDimensions();

    const [example1CheckboxValues, setExample1CheckboxValues] = useState([0]);

    const renderExample1 = useMemo(() => {
        const renderItem = ({ index, item }) => {
            return (
                <View style={styles.page1ItemContainer}>
                    <Checkbox hitSlop={{ right: 500 }} value={index} />
                    <Text style={styles.page1ItemText}>{item}</Text>
                </View>
            );
        };

        return (
            <View
                style={[
                    styles.container,
                    styles.page1Container,
                    { width: screenWidth },
                ]}>
                <Text
                    style={{
                        fontFamily: "SF-Pro",
                        fontSize: 30,
                        color: "#E9E9E9",
                    }}>
                    {"My To-Dos"}
                </Text>
                <View
                    style={{
                        marginVertical: 24,
                        width: "100%",
                    }}>
                    <ProgressBar
                        styles={{
                            track: {
                                height: 30,
                            },
                            childrenContainer: {
                                alignItems: "center",
                            },
                        }}
                        value={
                            (example1CheckboxValues.length /
                                TO_DO_LIST.length) *
                            100
                        }>
                        <Text
                            style={{ color: "#8a8888", fontFamily: "SF-Pro" }}>
                            {`${
                                (example1CheckboxValues.length /
                                    TO_DO_LIST.length) *
                                100
                            }% complete`}
                        </Text>
                    </ProgressBar>
                </View>
                <Checkbox.Group
                    onChange={(values) => setExample1CheckboxValues(values)}
                    value={example1CheckboxValues}>
                    <FlatList
                        data={TO_DO_LIST}
                        renderItem={renderItem}
                        style={{ flex: 1, width: "100%" }}
                    />
                </Checkbox.Group>
            </View>
        );
    }, [example1CheckboxValues, screenWidth]);

    const [example2Progress, setExample2Progress] = useState(0);

    const resetKey = useRef(0);

    useEffect(() => {
        setInterval(() => {
            setExample2Progress((example2Progress) => {
                const newProgress = example2Progress + 20;
                if (newProgress <= 100) {
                    return newProgress;
                }
                resetKey.current = Math.random();
                return 0;
            });
        }, 1500);
    }, []);

    const renderExample2Spinner = useMemo(() => {
        return (
            <AnimatedLottieView
                autoPlay
                loop
                resizeMode="contain"
                source={require("./assets/spinner.json")}
                style={{ position: "absolute", marginTop: 20, height: 100 }}
            />
        );
    }, []);

    const renderExample2 = useMemo(() => {
        return (
            <View
                style={[
                    styles.container,
                    styles.page2Container,
                    { width: screenWidth },
                ]}>
                <View
                    style={{
                        width: "100%",
                        alignItems: "center",
                    }}>
                    <ProgressBar
                        key={resetKey.current}
                        trackColor={[
                            {
                                value: 0,
                                color: "#CA4046",
                            },
                            {
                                value: 50,
                                color: "#F79825",
                            },
                            {
                                value: 90,
                                color: "#F9AD51",
                            },
                            {
                                value: 100,
                                color: "#22C68D",
                            },
                        ]}
                        value={example2Progress}
                    />
                    {renderExample2Spinner}
                </View>
            </View>
        );
    }, [example2Progress, renderExample2Spinner, screenWidth]);

    return (
        <ScrollView horizontal pagingEnabled>
            {renderExample1}
            {renderExample2}
        </ScrollView>
    );
};

export const App = () => {
    const [fontsLoaded] = useFonts({
        "SF-Pro": require("./assets/fonts/SF-Pro-Rounded-Regular.otf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View onLayout={onLayoutRootView} style={styles.outerContainer}>
            <AppContent />
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    page1Container: {
        backgroundColor: "#514242",
        paddingTop: 64,
        alignItems: "flex-start",
    },
    page2Container: {
        paddingTop: 0,
    },
    page1ItemContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 12,
    },
    page1ItemText: {
        marginLeft: 12,
        fontSize: 24,
        color: "#E9E9E9",
        fontFamily: "SF-Pro",
    },
});

export default App;
