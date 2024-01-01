import { StyleSheet } from "react-native";

const checkboxPressable = {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1F1F1",
    borderWidth: 2,
    borderColor: "#D4D4D4",
    borderRadius: 6,
    zIndex: 2,
} as const;

const checkboxPressable_pressed = {
    ...checkboxPressable,
    backgroundColor: "#22C68D",
    borderColor: "#22C68D",
} as const;

const checkboxPressable_checked = {
    ...checkboxPressable,
    backgroundColor: "#22C68D",
    borderColor: "#22C68D",
} as const;

const checkboxPressable_checked_pressed = {
    ...checkboxPressable,
    ...checkboxPressable_checked,
    opacity: 0.7
} as const;

export default StyleSheet.create({
    checkboxPressable,
    checkboxPressable_pressed,
    checkboxPressable_checked,
    checkboxPressable_checked_pressed,
});
