import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { hexToRgbA } from '@utils/Colors';
import { COLORS } from '@dictionaries/colors';
import { getPoint, sperateClosePoints } from '@utils/Cartesian';

import type { IPoint } from 'types/cartesian';
import type { ICard } from 'types/card';

interface IRadarPoints {
	people: ICard[];
	lat: number;
	lon: number;
}
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
		const color = '#000000';
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

export default RadarPoints;
