import React, { createContext } from "react";

import type { CheckboxGroupProps, CheckboxGroupContextType } from "./types";
import { useCheckboxGroupState } from "../../utils/useCheckboxGroupState";

export const CheckboxGroupContext =
    createContext<CheckboxGroupContextType | null>(null);

const CheckboxGroup = (props: CheckboxGroupProps) => {
    const state = useCheckboxGroupState(props);

    return (
        <CheckboxGroupContext.Provider value={{ state: { ...state } }}>
            {props.children}
        </CheckboxGroupContext.Provider>
    );
};

export default React.memo(CheckboxGroup);
