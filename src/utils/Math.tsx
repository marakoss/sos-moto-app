export function toDecimalPlaces(number: number, places = 1) {
    let scale = Math.pow(10, places);
    return Math.round((number + Number.EPSILON ) * scale) / scale;
}
