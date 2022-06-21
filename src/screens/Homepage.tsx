import React, { FC, useEffect, useState, useContext, useCallback } from 'react';
import {
	StyleSheet,
	View,
	SafeAreaView,
	Pressable,
	Text,
	Linking
} from 'react-native';

import globalStyle from '@components/Platform/globalStyle';

import { DrawerScreenProps, useDrawerStatus } from '@react-navigation/drawer';

import i18n from 'i18n-js';

import {
	UserList,
	ButtonMenu,
	Headline,
	Radar,
	RadarAnimation,
	RadarCircles,
	RadarLoading,
	Share,
	Mobile,
	Location,
	UserListPlaceholder,
	ErrorBoundary
} from '@components/index';
import { COLORS, SCREENS } from '@dictionaries/index';

import { ICard } from 'types/card';

import { loadUsers } from '@logic/Users';

import { FiltersContext, MobileContext, LocationContext } from '@store/index';

const Homepage: FC<DrawerScreenProps<any>> = ({ navigation, route }) => {
	const [loading, setLoading] = useState(true);
	const [people, setPeople] = useState<ICard[]>([]);
	const filters = useContext(FiltersContext);
	const { isConnected, isForeground } = useContext(MobileContext);
	const {
		isLocationGranted,
		isLocationResolved,
		location,
		latitude,
		longitude,
		city
	} = useContext(LocationContext);
	const drawer = useDrawerStatus();

	const loadData = useCallback(() => {
		setLoading(true);
		const data = loadUsers(latitude, longitude, filters.items, people);
		data.then(apipeople => {
			setLoading(false);
			setPeople(apipeople);
		}).catch((error: Error) => {
			// TODO: error should set people to empty result
			console.log(error.message);
			setLoading(false);
		});
	}, [filters, latitude, longitude]);

	useEffect(() => {
		if (isLocationGranted && isLocationResolved) {
			loadData();
		}
	}, [
		location,
		isLocationGranted,
		isLocationResolved,
		isForeground,
		filters,
		loadData
	]);

	return (
		<View style={s.container}>
			<ErrorBoundary>
				<Mobile />
				<Location />
				<View
					style={s.background}
				>
					<SafeAreaView style={s.safeArea}>
						<View style={s.navigation}>
							<ButtonMenu
								onPress={() => navigation.openDrawer()}
								isDrawerOpen={drawer === 'open'}
							/>
						</View>
						<View style={s.header}>
							<View>
								<Headline
									headline={
										isLocationGranted
											? i18n.t('Help in area')
											: i18n.t(
													'Location services inactive'
											  )
									}
									textColor={COLORS.BLACK}
								/>
							</View>
						</View>
						<View style={s.share}>
							{isLocationGranted && (
								<Share
									lat={latitude}
									lon={longitude}
									city={city}
									loading={!isLocationResolved}
								/>
							)}
						</View>
						<View style={s.radar}>
							{!isLocationGranted && (
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
							{!isLocationResolved && isForeground && (
								<RadarLoading />
							)}
							{isLocationGranted &&
								isLocationResolved &&
								isForeground && <RadarAnimation />}
							{isLocationGranted && isLocationResolved && (
								// <Pressable onPress={requestLocationUpdate}>
								<>
									<RadarCircles />

									<Radar
										people={people}
										lat={latitude}
										lon={longitude}
									/>
								</>
								// </Pressable>
							)}
						</View>
						<View>
							{isConnected &&
								isLocationResolved &&
								isForeground && (
									<UserList
										people={people}
										loading={loading}
										onRefresh={() => loadData()}
										navigation={navigation}
										route={route}
									/>
								)}
							{(!isConnected ||
								!isLocationGranted ||
								!isLocationResolved ||
								!isForeground) && <UserListPlaceholder />}
						</View>
					</SafeAreaView>
				</View>
			</ErrorBoundary>
		</View>
	);
};

const s = StyleSheet.create({
	container: {
		backgroundColor: COLORS.WHITE,
		flex: 1
	},
	safeArea: {
		flex: 1,
		...globalStyle.droidSafeArea
	},
	navigation: {
		
	},
	header: {

	},
	share: {
		position: 'relative',
	},
	radar: {
		width: '100%',
		height: 100,
		marginBottom: 10,
		position: 'relative',
		zIndex: -1
	},
	background: {
		flex: 1
	},
	filter: {

	},
	menu: {
		
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

export default Homepage;
