import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '@dictionaries/colors';

const RadarCircles: FC = () => {
	return (
		<View style={s.radar}>
			<View style={[s.radarCircle, { opacity: 0.8 }]} />
			<View
				style={[
					s.radarCircle,
					{ opacity: 0.5, width: 150, height: 150 }
				]}
			/>
			<View
				style={[
					s.radarCircle,
					{ opacity: 0.3, width: 200, height: 200 }
				]}
			/>
		</View>
	);
};

const s = StyleSheet.create({
	radar: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 0
	},
	radarCircle: {
		position: 'absolute',
		width: 100,
		height: 100,
		borderColor: COLORS.RED,
		borderWidth: 2,
		borderRadius: 1000
	}
});

export default RadarCircles;
