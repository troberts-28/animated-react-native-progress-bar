/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckboxGroup from "./CheckboxGroup";
import CheckboxMain from "./CheckboxMain";
import type { CheckboxComponentType } from "./types";

const CheckTemp: any = CheckboxMain;
CheckTemp.Group = CheckboxGroup;

// To add typings
const Checkbox = CheckTemp as CheckboxComponentType;

export { Checkbox };
