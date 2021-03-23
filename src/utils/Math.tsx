export function toDecimalPlaces(number: number, places = 1) {
	const scale = 10 ** places;
	return Math.round((number + Number.EPSILON) * scale) / scale;
}
