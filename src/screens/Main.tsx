import React, { FC, useEffect, useState, useContext } from 'react';
import {
	StyleSheet,
	View,
	SafeAreaView,
	Pressable,
	Text,
	Linking
} from 'react-native';

import globalStyle from '@components/Platform/globalStyle';

import { LinearGradient } from 'expo-linear-gradient';
import { StackScreenProps } from '@react-navigation/stack';

import i18n from 'i18n-js';

import {
	UserList,
	Background,
	Headline,
	Radar,
	RadarAnimation,
	ButtonFilter,
	Share,
	Mobile
} from '@components/index';
import { IconMenu, IconFilters } from '@icons/index';
import { COLORS } from '@dictionaries/colors';

import * as Location from 'expo-location';
import { LocationObject, PermissionStatus } from 'expo-location';

import * as Network from 'expo-network';

import { iCard } from 'types/card';

import { loadUsers } from '@logic/Users';

import { FiltersContext } from '@store/filters';

const location_initial = {
	coords: {
		latitude: 0,
		longitude: 0
	}
};

const Main: FC<StackScreenProps<any>> = ({ navigation }) => {
	const [geoStatus, setGeoStatus] = useState('');
	const [isError, setIsError] = useState(true);
	const [loading, setLoading] = useState(true);
	const [isConnected, setIsConnected] = useState(false);
	const [isLocationResolved, setIsLocationResolved] = useState(false);
	const [location, setLocation] = useState(location_initial);
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
	const [network, setNetwork] = useState({}); // fix
	const [people, setPeople] = useState<iCard[]>([]);
	const filters = useContext(FiltersContext);

	const updateLocation = (loc: LocationObject | null) => {
		if (loc !== null) {
			setLocation(loc);
			setLatitude(loc.coords.latitude);
			setLongitude(loc.coords.longitude);
			setIsLocationResolved(true);
		}
	};

	useEffect(() => {
		if (!isError) return;

		(async () => {
			const { status } = await Location.requestPermissionsAsync();
			return status;
		})()
			.then((status: PermissionStatus) => {
				if (status !== PermissionStatus.GRANTED) {
					setIsError(true);
				} else {
					setIsError(false);
				}
				setGeoStatus(status);

				if (__DEV__) {
					console.log('status change', status);
				}
			})
			.catch(() => {
				setIsError(true);
			});
	}, [isError, geoStatus]);

	useEffect(() => {
		if (isError) return;

		(async () => {
			const loc = await Location.getLastKnownPositionAsync({
				requiredAccuracy: 100
			});
			if (__DEV__) {
				console.log(
					'Last known position was called at',
					new Date().getTime()
				);
			}
			return loc;
		})().then(updateLocation);
	}, [isError]);

	useEffect(() => {
		if (isError) return;

		(async () => {
			const loc = await Location.getCurrentPositionAsync({});
			if (__DEV__) {
				console.log(
					'Real current position was called at',
					new Date().getTime()
				);
			}
			return loc;
		})().then(updateLocation);
	}, [isError]); // [location]);

	useEffect(() => {
		(async () => {
			const response = await Network.getNetworkStateAsync();
			// console.log('connected', response.isConnected);
			return response;
		})()
			.then((response) => {
				setNetwork(response);
				setIsConnected(
					response.isConnected ? response.isConnected : false
				);
			})
			.catch(() => {
				setIsConnected(false);
			});
	}, []);
	// [network]);

	const loadData = (lat: number, lon: number) => {
		setLoading(true);
		const data = loadUsers(lat, lon, filters.items);
		data.then((apipeople) => {
			setLoading(false);
			setPeople(apipeople);
		}).catch((error: Error) => {
			console.log(error.message);
			setLoading(false);
		});
	};

	useEffect(() => {
		if (!isError && isLocationResolved) {
			loadData(latitude, longitude);
		}
	}, [isError, location, isLocationResolved, filters]);

	return (
		<View style={s.container}>
			<Mobile />
			<LinearGradient
				colors={[
					COLORS.BACKGROUNDGRADIENT1,
					COLORS.BACKGROUNDGRADIENT2
				]}
				style={s.gradient}
			>
				<SafeAreaView style={s.safeArea}>
					<View style={s.header}>
						<View>
							<Headline
								headline={
									isError
										? i18n.t('Location services inactive')
										: i18n.t('Help in area')
								}
							/>
						</View>
						<View>
							<Pressable
								onPress={() => navigation.navigate('Menu')}
							>
								<View style={s.menu}>
									<IconMenu fillColor={COLORS.WHITE} />
								</View>
							</Pressable>
						</View>
					</View>
					<View style={s.radar}>
						{isError && (
							<View style={s.errorContainer}>
								<Pressable
									onPress={() =>
										Linking.openURL('app-settings:')
									}
								>
									<View style={s.error}>
										<Text style={s.errorText}>
											{i18n.t(
												'Allow access to location services'
											)}
										</Text>
									</View>
								</Pressable>
							</View>
						)}
						<RadarAnimation />

						{!isError && <Share lat={latitude} lon={longitude} />}

						{!isError && (
							<Radar
								people={people}
								lat={latitude}
								lon={longitude}
							/>
						)}
					</View>
					<ButtonFilter
						wrapperStyle={s.filter}
						onPress={() => navigation.navigate('Filter')}
						icon={<IconFilters fillColor={COLORS.WHITE} />}
					/>
					<Background>
						{isConnected && (
							<UserList
								people={people}
								loading={loading}
								onRefresh={() => loadData(latitude, longitude)}
							/>
						)}
					</Background>
				</SafeAreaView>
			</LinearGradient>
		</View>
	);
};

const s = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: COLORS.BLACK
	},
	safeArea: {
		flex: 1,
		...globalStyle.droidSafeArea
	},
	header: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	radar: {
		width: '100%',
		height: '40%'
	},
	gradient: {
		width: '100%',
		height: '100%'
	},
	filter: {
		position: 'absolute',
		zIndex: 4,
		left: '70%',
		top: '45%'
	},
	menu: {
		paddingRight: 20,
		marginTop: 2, // TODO: can we get rid of this?
		backgroundColor: 'rgba(0, 0, 0, 0.0001)'
	},
	errorContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		height: '100%',
		zIndex: 50
	},
	errorText: {
		color: COLORS.WHITE,
		fontSize: 18
	},
	error: {
		backgroundColor: COLORS.PRIMARY,
		paddingHorizontal: 20,
		paddingVertical: 5,
		borderRadius: 50
	}
});

export default Main;
