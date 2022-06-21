import { coordsDistance } from "./Geo";
import { IPoint } from "types/cartesian";
import { ICoordinate } from "types/geo";

/*
// Real world data test
const mypos: coordinate = { lat: 49.454232 , lon: 17.452700};
const data: Array<coordinate> = [
    { lat: 49.454226 , lon: 17.455272},
    { lat: 49.454736, lon: 17.452689 },
    { lat: 49.454084, lon: 17.452123 },
    { lat: 49.453857, lon: 17.454027 },
    { lat: 49.418700, lon: 17.502790 },
    { lat: 49.318700, lon: 17.502790 },
];

// Point clustering test
const points = [
	{
		x: 40,
		y: 0
	},
	{
		x: 40,
		y: 0
	},
	{
		x: 40,
		y: 0
	},
];
*/

// Inverse of Moove coordinate origin to our current location
const getNormalizedCoords = (
	lat: number,
	lon: number,
	center_lat: number = 0,
	center_lon: number = 0
): ICoordinate => {
	return {
		lat: lat - center_lat,
		lon: lon - center_lon
	};
};

/*
 * Transform GPS coords to X,Y points with a center of 0, 0.
 */
const getPoint = (
	gps: ICoordinate,
	origin: ICoordinate,
	radius: number,
	maxDistance: number = 10
): IPoint => {
	// Get viewport rectangle [square]
	const viewportSize = radius * 2;
	const scale = viewportSize / maxDistance;
	const distance = coordsDistance(gps.lat, gps.lon, origin.lat, origin.lon);
	const normalizedGPS = getNormalizedCoords(
		gps.lat,
		gps.lon,
		origin.lat,
		origin.lon
	); // Move to origin

	let angleFromOrigin = Math.atan2(normalizedGPS.lat, normalizedGPS.lon);

	if (angleFromOrigin < 0) angleFromOrigin = 2 * Math.PI + angleFromOrigin;

	// Limit distance
	let zone = maxDistance;
	if (distance > 0 && distance <= 5) zone = 5;
	if (distance > 5 && distance <= 10) zone = 7.5;
	if (distance > 10 && distance <= 15) zone = 10;
	if (distance > 15 && distance <= 20) zone = 12;
	if (distance > 20) zone = 12;

	const x = zone * Math.sin(Math.PI / 2 - angleFromOrigin);
	const y = zone * Math.sin(angleFromOrigin);

	return {
		x: x * scale,
		y: y * scale
	};
};

/*
 * If points are close together move them aside
 */
const sperateClosePoints = (
	point: IPoint,
	points: IPoint[],
	index: number
): IPoint => {
	const radius = 15; // pixels
	const moveBy = radius / 2;
	let new_x = point.x;
	let new_y = point.y;

	points.forEach((item, i) => {
		if (index < i) {
			if (item.x - moveBy <= point.x && item.x + moveBy >= point.x) {
				if (item.y - moveBy <= point.y && item.y + moveBy >= point.y) {
					new_x = point.x - radius + Math.random() * radius;
					new_y = point.y - radius;
				}
			}
		}
	});

	return {
		x: new_x,
		y: new_y
	};
};

export {
	getNormalizedCoords,
	getPoint,
	sperateClosePoints
}
