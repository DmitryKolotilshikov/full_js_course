export const roundToFiveDigits = (num) => {
    return parseFloat(num.toPrecision(10));
}