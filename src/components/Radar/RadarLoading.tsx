import React, { useRef, FC, useEffect, useCallback } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

import RadarArrow from '@components/Radar/RadarArrow';

const RadarLoading: FC = () => {
	const animatedRotation = useRef(new Animated.Value(0)).current;

	const runAnimation = useCallback(() => {
		animatedRotation.setValue(0);
		Animated.sequence([
			Animated.timing(animatedRotation, {
				toValue: 360,
				duration: 1000,
				useNativeDriver: false // false Doesnt work
			}),
			Animated.delay(500)
		]).start(() => runAnimation());
	}, [animatedRotation]);

	useEffect(() => {
		runAnimation();
	}, [runAnimation]);

	return (
		<View style={s.radar}>
			<Animated.View
				style={[
					s.radarCircleAnimated,
					{
						transform: [
							{
								rotate: animatedRotation.interpolate({
									inputRange: [0, 360],
									outputRange: ['45deg', '405deg']
								})
							}
						]
					}
				]}
			>
				<RadarArrow />
			</Animated.View>
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
	radarCircleAnimated: {}
});

export default RadarLoading;
