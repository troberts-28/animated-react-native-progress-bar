/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactElement, MemoExoticComponent } from "react";

import type { Insets } from "react-native";

import type { CheckboxGroupState } from "../../utils/useCheckboxGroupState";

export interface CheckboxGroupContextType {
    state: CheckboxGroupState;
}

export interface CheckboxGroupProps {
    children: ReactElement;
    defaultValue?: any[];
    id?: string;
    isDisabled?: boolean;
    isInvalid?: boolean;
    isReadOnly?: boolean;
    onChange?: (values: any[]) => void;
    value?: any[];
}

export interface CheckboxProps {
    children?: ReactElement;
    defaultIsChecked?: boolean;
    hitSlop?: Insets | number;
    icon?: JSX.Element;
    isChecked?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
    isPressed?: boolean;
    isReadOnly?: boolean;
    onChange?: (isSelected: boolean) => void;
    relativeIconSize?: number;
    size?: number;
    value: any;
}

export type CheckboxComponentType = ((props: CheckboxProps) => JSX.Element) & {
    Group: MemoExoticComponent<(props: CheckboxGroupProps) => JSX.Element>;
};
