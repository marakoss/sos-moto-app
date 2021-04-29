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

import { LinearGradient } from 'expo-linear-gradient';
import { StackScreenProps } from '@react-navigation/stack';

import i18n from 'i18n-js';

import {
	UserList,
	Background,
	Headline,
	Radar,
	RadarAnimation,
	RadarCircles,
	RadarLoading,
	ButtonFilter,
	Share,
	Mobile,
	Location,
	UserListPlaceholder
} from '@components/index';
import { IconMenu, IconFilters } from '@icons/index';
import { COLORS } from '@dictionaries/colors';

import { iCard } from 'types/card';

import { loadUsers } from '@logic/Users';

import { FiltersContext, MobileContext, LocationContext } from '@store/index';

const Main: FC<StackScreenProps<any>> = ({ navigation, route }) => {
	const [loading, setLoading] = useState(true);
	const [people, setPeople] = useState<iCard[]>([]);
	const filters = useContext(FiltersContext);
	const { isConnected, isForeground } = useContext(MobileContext);
	const {
		isLocationGranted,
		isLocationResolved,
		location,
		latitude,
		longitude
	} = useContext(LocationContext);

	const loadData = useCallback(() => {
		setLoading(true);
		const data = loadUsers(latitude, longitude, filters.items, people);
		data.then((apipeople) => {
			setLoading(false);
			setPeople(apipeople);
		}).catch((error: Error) => {
			console.log(error.message);
			setLoading(false);
		});
	}, [filters, latitude, longitude, people]);

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
			<Mobile />
			<Location />
			<LinearGradient
				colors={[
					COLORS.BACKGROUNDGRADIENT1,
					COLORS.BACKGROUNDGRADIENT2
				]}
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 1 }}
				style={s.gradient}
			>
				<SafeAreaView style={s.safeArea}>
					<View style={s.header}>
						<View>
							<Headline
								headline={
									isLocationGranted
										? i18n.t('Help in area')
										: i18n.t('Location services inactive')
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
					<View style={s.share}>
						{isLocationGranted && (
							<Share
								lat={latitude}
								lon={longitude}
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
					<ButtonFilter
						wrapperStyle={s.filter}
						onPress={() => navigation.navigate('Filter')}
						icon={() => IconFilters}
						iconFillColor={COLORS.WHITE}
						iconHoverFillColor={COLORS.PRIMARY}
					/>
					<Background>
						{isConnected && isLocationResolved && isForeground && (
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
					</Background>
				</SafeAreaView>
			</LinearGradient>
		</View>
	);
};

const s = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: COLORS.BLACK,
		flex: 1
	},
	safeArea: {
		flex: 1,
		...globalStyle.droidSafeArea
	},
	header: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		position: 'relative',
		zIndex: 3
	},
	share: {
		position: 'relative',
		left: 0,
		top: 0,
		zIndex: 200
	},
	radar: {
		width: '100%',
		height: '30%',
		marginBottom: 10,
		position: 'relative',
		zIndex: 2
	},
	gradient: {
		width: '100%',
		height: '100%'
	},
	filter: {
		position: 'absolute',
		zIndex: 10,
		left: '70%',
		top: '42%'
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
