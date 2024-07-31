import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import * as SplashScreen from "expo-splash-screen";
import AnimatedLottieView from "lottie-react-native";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    useWindowDimensions,
    FlatList,
    Pressable,
    LayoutAnimation,
} from "react-native";
import type { NativeSyntheticEvent, NativeScrollEvent } from "react-native";

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

    const scrollViewRef = useRef<ScrollView>(null);

    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const onMomentumScrollEnd = useCallback(
        (event: NativeSyntheticEvent<NativeScrollEvent>) => {
            const { contentOffset } = event.nativeEvent;
            const newPageIndex = Math.round(contentOffset.x / screenWidth) as
                | 0
                | 1;
            setCurrentPageIndex(newPageIndex);
        },
        [screenWidth]
    );

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
                        inactiveTrackChild={
                            <Text
                                style={{
                                    color: "#8a8888",
                                    fontFamily: "SF-Pro",
                                }}>
                                {`${
                                    (example1CheckboxValues.length /
                                        TO_DO_LIST.length) *
                                    100
                                }% complete`}
                            </Text>
                        }
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
                        }></ProgressBar>
                </View>
                <Checkbox.Group
                    onChange={(values) => setExample1CheckboxValues(values)}
                    value={example1CheckboxValues}>
                    <FlatList
                        alwaysBounceVertical={false}
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
                if (newProgress <= 120) {
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

    const successLottieRef = useRef<AnimatedLottieView>(null);

    const renderExample2Success = useMemo(() => {
        return (
            <AnimatedLottieView
                ref={successLottieRef}
                autoPlay
                resizeMode="contain"
                source={require("./assets/success.json")}
                speed={0.8}
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
                        paddingHorizontal: 64,
                    }}>
                    <ProgressBar
                        key={resetKey.current}
                        activeTrackColor={[
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
                    {example2Progress <= 80
                        ? renderExample2Spinner
                        : renderExample2Success}
                </View>
            </View>
        );
    }, [
        example2Progress,
        renderExample2Spinner,
        renderExample2Success,
        screenWidth,
    ]);

    const renderNavigationArrows = useMemo(() => {
        return (
            <>
                {currentPageIndex !== 1 ? (
                    <Pressable
                        onPress={() => {
                            LayoutAnimation.configureNext(
                                LayoutAnimation.Presets.easeInEaseOut
                            );
                            setCurrentPageIndex((currentPageIndex) => {
                                scrollViewRef.current?.scrollTo({
                                    x: screenWidth * (currentPageIndex + 1),
                                    animated: true,
                                });
                                return currentPageIndex + 1;
                            });
                        }}
                        style={({ pressed }) => [
                            styles.chevronPressable,
                            { right: 8 },
                            pressed && styles.chevronPressable_pressed,
                        ]}>
                        <Ionicons
                            color={
                                currentPageIndex % 2 !== 0
                                    ? "#514242"
                                    : "#F1F1F1"
                            }
                            name="chevron-forward"
                            size={32}
                        />
                    </Pressable>
                ) : null}
                {currentPageIndex !== 0 ? (
                    <Pressable
                        onPress={() => {
                            LayoutAnimation.configureNext(
                                LayoutAnimation.Presets.easeInEaseOut
                            );
                            setCurrentPageIndex((currentPageIndex) => {
                                scrollViewRef.current?.scrollTo({
                                    x: screenWidth * (currentPageIndex - 1),
                                    animated: true,
                                });
                                return currentPageIndex - 1;
                            });
                        }}
                        style={({ pressed }) => [
                            styles.chevronPressable,
                            { left: 8 },
                            pressed && styles.chevronPressable_pressed,
                        ]}>
                        <Ionicons
                            color={
                                currentPageIndex % 2 !== 0
                                    ? "#514242"
                                    : "#F1F1F1"
                            }
                            name="chevron-back"
                            size={32}
                        />
                    </Pressable>
                ) : null}
            </>
        );
    }, [currentPageIndex, screenWidth]);

    return (
        <>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                onMomentumScrollEnd={onMomentumScrollEnd}
                pagingEnabled>
                {renderExample1}
                {renderExample2}
            </ScrollView>
            {renderNavigationArrows}
        </>
    );
};

export const App = () => {
    const onLayoutRootView = useCallback(async () => {
        await SplashScreen.hideAsync();
    }, []);

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
    chevronPressable: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        padding: 8,
    },
    chevronPressable_pressed: {
        opacity: 0.7,
    },
});

export default App;
