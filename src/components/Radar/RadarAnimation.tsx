import React, { useRef, FC, useEffect, useCallback } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

import { COLORS } from '@dictionaries/colors';

const RadarAnimation: FC = () => {
	const animatedSize = useRef(new Animated.Value(0)).current;

	const runAnimation = useCallback(() => {
		animatedSize.setValue(0);
		Animated.sequence([
			Animated.timing(animatedSize, {
				toValue: 100,
				duration: 2000,
				useNativeDriver: true // false Doesnt work
			}),
			Animated.delay(2000)
		]).start(() => runAnimation());
	}, [animatedSize]);

	useEffect(() => {
		runAnimation();
	}, [runAnimation]);

	return (
		<View style={s.radar}>
			<Animated.View
				style={[
					s.radarCircleAnimated,
					{
						opacity: animatedSize.interpolate({
							inputRange: [0, 100],
							outputRange: [0.3, 0]
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
	radarCircleAnimated: {
		position: 'absolute',
		width: 300,
		height: 300,
		backgroundColor: COLORS.PRIMARY,
		opacity: 1,
		borderRadius: 1000,
		zIndex: 1
	}
});

export default RadarAnimation;
