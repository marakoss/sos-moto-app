/* import React, { useRef, useEffect, useState } from 'react';
import { Animated } from 'react-native';

export const SmoothRotate = (props: any) => {
	const degrees = useRef(new Animated.Value(20)).current;
	const [current, setCurrent] = useState(props.heading);

	useEffect(() => {
		Animated.timing(degrees, {
			toValue: new Animated.Value(current),
			useNativeDriver: true
		}).start();
	});

	return (
		<Animated.View
			key={current}
			style={{
				...props.style,
				transform: [
					{
						rotate: degrees.interpolate({
							inputRange: [0, 360],
							outputRange: ['0deg', '360deg']
						})
					}
				]
			}}
		>
			{props.children}
		</Animated.View>
	);
}; */
