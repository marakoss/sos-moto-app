import React, { FC, useContext, useEffect, useCallback } from 'react';

import * as ExpoLocation from 'expo-location';
import { LocationObject, PermissionStatus } from 'expo-location';
import { LocationContext, iLocationTypes } from '@store/index';

interface iLocation {}

const Location: FC<iLocation> = () => {
	const { isLocationGranted, dispatch } = useContext(LocationContext);

	const updateLocation = useCallback(
		(currentLocation: LocationObject | null) => {
			if (currentLocation !== null) {
				dispatch({
					type: iLocationTypes.updateLocation,
					value: {
						location: currentLocation,
						latitude: currentLocation.coords.latitude,
						longitude: currentLocation.coords.longitude,
						isLocationResolved: true
					}
				});
			}
		},
		[dispatch]
	);

	const requestLocationUpdate = useCallback(() => {
		(async () => {
			const loc = await ExpoLocation.getCurrentPositionAsync({});
			if (__DEV__) {
				console.log(
					'Real current position was called at',
					new Date().getTime()
				);
			}
			return loc;
		})()
			.then(updateLocation)
			.catch(() => {
				console.warn('tfuk');
			});
	}, [updateLocation]);

	const requestLastLocation = useCallback(() => {
		(async () => {
			const loc = await ExpoLocation.getLastKnownPositionAsync({
				requiredAccuracy: 100
			});
			if (__DEV__) {
				console.log(
					'Last known position was called at',
					new Date().getTime()
				);
			}
			return loc;
		})()
			.then(updateLocation)
			.catch(() => {
				console.warn('tfuk2');
			});
	}, [updateLocation]);

	const requestLocationPermission = useCallback(() => {
		(async () => {
			const { status } = await ExpoLocation.requestPermissionsAsync();
			return status;
		})()
			.then((status: PermissionStatus) => {
				if (status !== PermissionStatus.GRANTED) {
					dispatch({
						type: iLocationTypes.setIsLocationGranted,
						value: false
					});
				} else {
					dispatch({
						type: iLocationTypes.setIsLocationGranted,
						value: true
					});
				}
				if (__DEV__) {
					console.log('status change', status);
				}
			})
			.catch(() => {
				console.warn('tfuk3');
				dispatch({
					type: iLocationTypes.setIsLocationGranted,
					value: false
				});
			});
	}, [dispatch]);

	useEffect(() => {
		if (!isLocationGranted) {
			requestLocationPermission();
		} else {
			requestLastLocation();
			requestLocationUpdate();
		}
	}, [
		isLocationGranted,
		requestLocationPermission,
		requestLastLocation,
		requestLocationUpdate
	]);

	return <></>;
};

export default Location;