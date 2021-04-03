import React, { FC, useState, useEffect, useRef, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import * as Location from 'expo-location';
import { LocationHeadingObject } from 'expo-location';

import RadarArrow from '@components/Radar/RadarArrow';
import RadarPoints from '@components/Radar/RadarPoints';

import useAnimationFrame from '@components/Animations/useAnimationFrame';

import type { iCard } from 'types/card';

interface iMyProps {
	people: iCard[];
	lat: number;
	lon: number;
}

function average(nums: Array<number>) {
	return nums.reduce((a, b) => a + b) / nums.length;
}

function cyclicDistance(current: number, now: number): number {
	const abs = Math.abs(current - now);
	const distanceAround = 360 - abs;
	const distanceStraight = abs;
	const distance = Math.min(distanceAround, distanceStraight);

	return distance;
}

const Radar: FC<iMyProps> = ({ people, lat, lon }) => {
	const [heading, setHeading] = useState(0);
	const myHeading = useRef<number>(0);
	const locationRef = useRef<Array<number>>([0, 0]);

	const step = () => {
		if (myHeading.current < 0) {
			myHeading.current += 360;
		} else if (myHeading.current > 360) {
			myHeading.current -= 360;
		}

		const maxDistance = 10;

		const distance = cyclicDistance(
			myHeading.current,
			locationRef.current[1]
		);

		const tendency =
			cyclicDistance(myHeading.current + 1, locationRef.current[1]) <
			distance
				? 1
				: -1;

		const move = distance > maxDistance ? maxDistance : distance;

		const newpos = myHeading.current + tendency * move;

		myHeading.current = newpos;
		setHeading(myHeading.current);
	};

	useAnimationFrame(() => step(), []);

	useEffect(() => {
		const updateCords = (loc: LocationHeadingObject) => {
			if (loc.trueHeading !== -1) {
				if (locationRef.current.length >= 2) {
					locationRef.current.shift();
				}
				locationRef.current.push(loc.trueHeading);
			}
		};

		(async () => {
			const result = await Location.watchHeadingAsync(updateCords);
			return result;
		})().catch(() => {
			console.log('Location services were not granted');
		});
	}, []);

	const MemoizedComponent = useMemo(() => {
		return <RadarPoints lat={lat} lon={lon} people={people} />;
	}, [lat, lon, people]);

	return (
		<View style={s.container}>
			<View style={s.radarContainer}>
				<View
					style={{
						transform: [{ rotate: `${-heading}deg` }]
					}}
				>
					<RadarArrow />
					{MemoizedComponent}
				</View>
			</View>
		</View>
	);
};

const s = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		height: '100%'
	},
	radarContainer: {}
});

export default Radar;
