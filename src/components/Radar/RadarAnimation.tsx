import React, { useRef, FC } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

import { COLORS } from '@dictionaries/colors';

const RadarAnimation: FC = () => {
	const animatedSize = useRef(new Animated.Value(0)).current;

	const runAnimation = () => {
		animatedSize.setValue(0);
		Animated.sequence([
			Animated.timing(animatedSize, {
				toValue: 100,
				duration: 2000,
				useNativeDriver: false // false Doesnt work
			}),
			Animated.delay(2000)
		]);
		// .start(() => runAnimation());
	};
	runAnimation();

	return (
		<View style={s.radar}>
			<Animated.View
				style={[
					s.radarCircleAnimated,
					{
						opacity: animatedSize.interpolate({
							inputRange: [0, 100],
							outputRange: [0.5, 0]
						}),
						transform: [
							{
								scale: animatedSize.interpolate({
									inputRange: [0, 100],
									outputRange: [0, 3]
								})
							},
							{ perspective: 1000 }
						]
					}
				]}
			/>
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
		justifyContent: 'center'
	},
	radarCircle: {
		position: 'absolute',
		width: 100,
		height: 100,
		borderColor: COLORS.PRIMARY,
		borderWidth: 2,
		borderRadius: 1000
	},
	radarCircleAnimated: {
		position: 'absolute',
		width: 300,
		height: 300,
		backgroundColor: COLORS.PRIMARY,
		opacity: 1,
		borderRadius: 1000
	}
});

export default RadarAnimation;
