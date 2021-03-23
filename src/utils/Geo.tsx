export const degreesToRadians = (degrees: number): number => {
	return (degrees * Math.PI) / 180;
};

export const radiansToDegrees = (radians: number): number => {
	return radians * (180 / Math.PI);
};

export const coordsDistance = (
	lat1: number,
	lon1: number,
	lat2: number,
	lon2: number
): number => {
	const earthRadiusKm = 6371;

	const dLat = degreesToRadians(lat2 - lat1);
	const dLon = degreesToRadians(lon2 - lon1);

	const nlat1 = degreesToRadians(lat1);
	const nlat2 = degreesToRadians(lat2);

	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.sin(dLon / 2) *
			Math.sin(dLon / 2) *
			Math.cos(nlat1) *
			Math.cos(nlat2);

	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	return earthRadiusKm * c;
};
