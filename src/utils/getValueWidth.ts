export const getValueWidth = (value: number, min: number, max: number) => {
    return value < max && value > min
        ? ((value - min) / (max - min)) * 100
        : value > min
        ? 100
        : 0.1;
};
