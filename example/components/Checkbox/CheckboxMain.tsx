import React, { useContext } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

import { CheckboxGroupContext } from "./CheckboxGroup";
import styles from "./styles";
import type { CheckboxProps } from "./types";
import { useCheckboxState } from "../../utils/useCheckboxState";

const CheckboxMain = (props: CheckboxProps) => {
    const {
        children = null,
        hitSlop,
        icon,
        isChecked: isCheckedProp,
        onChange,
        relativeIconSize = 0.8,
        size = 28,
        value,
    } = props;

    const { state: checkboxGroupState } =
        useContext(CheckboxGroupContext) ?? {};

    const checkboxState = useCheckboxState(props);

    const isChecked =
        isCheckedProp ??
        (checkboxGroupState
            ? checkboxGroupState.isSelected(value)
            : checkboxState.isSelected);

    return (
        <Pressable
            disabled={checkboxGroupState?.isDisabled}
            hitSlop={hitSlop}
            onPress={() => {
                checkboxGroupState?.toggleValue(value);
                checkboxState.toggle();
                onChange?.(!isChecked);
            }}
            style={({ pressed }) => {
                const style = pressed
                    ? isChecked
                        ? styles.checkboxPressable_pressed
                        : styles.checkboxPressable_checked_pressed
                    : isChecked
                    ? styles.checkboxPressable_checked
                    : styles.checkboxPressable;
                return [
                    style,
                    {
                        height: size,
                        width: size,
                    },
                ];
            }}>
            {isChecked
                ? icon ?? (
                      <MaterialCommunityIcons
                          color={"#E9E9E9"}
                          name="check"
                          size={size * relativeIconSize}
                      />
                  )
                : children}
        </Pressable>
    );
};

export default React.memo(CheckboxMain);
