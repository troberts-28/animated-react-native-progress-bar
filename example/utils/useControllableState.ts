/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";
import type { Dispatch, SetStateAction } from "react";

export interface UseControllableStateProps<T> {
    defaultValue?: T | (() => T);
    name?: string;
    onChange?: (value: T) => void;
    value?: T;
}

// this hook is borrowed from NativeBase. It makes it possible to easily fire a callback
// whenever a state value changes.
export const useControllableState = <T>(
    props: UseControllableStateProps<T>
) => {
    const { defaultValue, onChange, value: valueProp } = props;

    const [valueState, setValue] = useState(defaultValue as T);
    const isControlled = valueProp !== undefined;

    const value = isControlled ? (valueProp as T) : valueState;

    const updateValue = useCallback(
        (next: any) => {
            const nextValue = typeof next === "function" ? next(value) : next;
            if (!isControlled) {
                setValue(nextValue);
            }
            onChange && onChange(nextValue);
        },
        [isControlled, onChange, value]
    );

    return [value, updateValue] as [T, Dispatch<SetStateAction<T>>];
};
