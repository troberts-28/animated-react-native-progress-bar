import { useControllableState } from "./useControllableState";
import type { CheckboxProps } from "../components/Checkbox/types";

export interface CheckboxState {
    readonly isSelected: boolean;
    setSelected(isSelected: boolean): void;
    toggle(): void;
}

export const useCheckboxState = (props: CheckboxProps): CheckboxState => {
    // modified version of hook from @react-stately/toggle
    // Provides state management for a checkbox component
    const { defaultIsChecked, isChecked, isReadOnly, onChange } = props;

    const [isSelected, setSelected] = useControllableState({
        value: isChecked,
        defaultValue: defaultIsChecked ?? false,
        onChange,
    });

    const updateSelected = (value: boolean) => {
        if (!isReadOnly) {
            setSelected(value);
        }
    };

    const toggleState = () => {
        if (!isReadOnly) {
            setSelected(!isSelected);
        }
    };

    return {
        isSelected,
        setSelected: updateSelected,
        toggle: toggleState,
    };
};
