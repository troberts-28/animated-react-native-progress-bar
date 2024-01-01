/* eslint-disable @typescript-eslint/no-explicit-any */
import { useControllableState } from "./useControllableState";
import type { CheckboxGroupProps } from "../components/Checkbox/types";


export interface CheckboxGroupState {
    addValue(value: any): void;
    readonly isDisabled: boolean;
    isInvalid: boolean;
    readonly isReadOnly: boolean;
    isSelected(value: any): boolean;
    removeValue(value: any): void;
    setValue(value: any[]): void;
    toggleValue(value: any): void;
    readonly value: readonly any[];
}

export const useCheckboxGroupState = (
    props: CheckboxGroupProps
): CheckboxGroupState => {
    // modified version of hook from @react-stately/checkbox
    // Provides state management for a checkbox group component. Provides a name for the group,
    // and manages selection and focus state
    const { defaultValue, isDisabled, isInvalid, isReadOnly, onChange, value } =
        props;

    const [selectedValues, setValue] = useControllableState({
        value,
        defaultValue: defaultValue ?? [],
        onChange,
    });

    const state: CheckboxGroupState = {
        value: selectedValues,
        setValue(value) {
            if (isDisabled) {
                return;
            }

            setValue(value);
        },
        isDisabled: isDisabled ?? false,
        isReadOnly: isReadOnly ?? false,
        isSelected(value) {
            return selectedValues.includes(value);
        },
        addValue(value) {
            if (isReadOnly || isDisabled) {
                return;
            }
            if (!selectedValues.includes(value)) {
                setValue(selectedValues.concat(value));
            }
        },
        removeValue(value) {
            if (isReadOnly || isDisabled) {
                return;
            }
            if (selectedValues.includes(value)) {
                setValue(
                    selectedValues.filter(
                        (existingValue) => existingValue !== value
                    )
                );
            }
        },
        toggleValue(value) {
            if (isReadOnly || isDisabled) {
                return;
            }
            if (selectedValues.includes(value)) {
                setValue(
                    selectedValues.filter(
                        (existingValue) => existingValue !== value
                    )
                );
            } else {
                setValue(selectedValues.concat(value));
            }
        },
        isInvalid: isInvalid ?? false,
    };

    return state;
};
