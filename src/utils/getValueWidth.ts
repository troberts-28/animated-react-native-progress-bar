export const getPercentageWidth = (
    value: number,
    minValue: number,
    maxValue: number,
    trackOffsetPercentage: number
) => {
    if (value < maxValue && value > minValue) {
        return ((value - minValue) / (maxValue - minValue)) * 100 + trackOffsetPercentage;
    }

    if (value > minValue) {
        return 100 + trackOffsetPercentage;
    }

    return trackOffsetPercentage;
};
