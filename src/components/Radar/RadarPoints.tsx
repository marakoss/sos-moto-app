import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { hexToRgbA } from '@utils/Colors';
import { coordsDistance } from '@utils/Geo';
import { COLORS, getColor } from '@dictionaries/colors';

import type { ICoordinate } from 'types/gps';
import type { IPoint } from 'types/cartesian';
import type { ICard } from 'types/card';

interface IRadarPoints {
	people: ICard[];
	lat: number;
	lon: number;
}

const colorMap = getColor();

const RadarPoints: FC<IRadarPoints> = ({ people, lat, lon }) => {
	const points = people.map((person: ICard) => {
		// average between points
		const maxDistance = 20;
		const point = getPoint(person, { lat, lon }, 100, maxDistance);
		return point;
	});

	let n = 0;
	const list = points.map((point: IPoint) => {
		const realpoint = sperateClosePoints(point, points, n);
		const color = colorMap.next().value ?? '#';

		n += 1; // RN screams each child should have unique key

		return (
			<View
				key={n}
				style={[
					s.points,
					{ top: realpoint.x - 6, right: realpoint.y - 6 }
				]}
			>
				<View style={[s.shadow, { borderColor: hexToRgbA(color) }]}>
					<View style={s.shadowSpace}>
						<View style={[s.point, { backgroundColor: color }]} />
					</View>
				</View>
			</View>
		);
	});

	return <View style={s.container}>{list}</View>;
};

const s = StyleSheet.create({
	container: {
		width: 1,
		height: 1,
		position: 'absolute',
		left: '0%',
		top: '0%'
		// Debug
		// borderColor: COLORS.BLACK,
		// borderWidth: 1
	},
	points: {
		shadowColor: COLORS.BLACK,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		position: 'absolute'
	},
	point: {
		width: 13,
		height: 13,
		borderRadius: 13,
		backgroundColor: '#f00'
	},
	shadowSpace: {
		width: 17,
		height: 17,
		borderRadius: 17,
		borderColor: 'rgba(0, 0, 0, 0)',
		borderWidth: 2
	},
	shadow: {
		width: 19,
		height: 19,
		borderRadius: 19,
		borderColor: 'rgba(255, 0, 0, 0.5)',
		borderWidth: 1
	}
});

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

export default RadarPoints;
