import React, { FC } from 'react';

import {
	StyleSheet,
	View,
	ScrollView,
	SafeAreaView,
	Text,
	Image
} from 'react-native';

import { DrawerScreenProps } from '@react-navigation/drawer';

import i18n from 'i18n-js';

import { Headline, Button } from '@components/index';
import { IconNavigate, IconPerson, IconInfo } from '@icons/index';
import { IMAGEABOUT } from '@images/banners';
import globalStyle from '@components/Platform/globalStyle';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SCREENS } from '@dictionaries/index';

const Menu: FC<DrawerScreenProps<any>> = ({ navigation }) => {
	return (
		<View style={s.container}>
			<View style={s.headerContainer}>
				<LinearGradient
					colors={[
						COLORS.BACKGROUNDGRADIENT1,
						COLORS.BACKGROUNDGRADIENT2
					]}
					start={{ x: 0, y: 0 }}
					end={{ x: 0, y: 1.5 }}
				>
					<Image source={IMAGEABOUT} style={s.bannerImage} />
					<View style={s.header}>
						<Headline
							headline={i18n.t('Navigate')}
							textColor={COLORS.WHITE}
						/>
					</View>
				</LinearGradient>
			</View>
			<SafeAreaView style={s.safeArea}>
				<View>
					<ScrollView
						style={s.content}
						showsVerticalScrollIndicator={false}
					>
						<Button
							onPress={() => navigation.navigate(SCREENS.HOME)}
							icon={() => IconNavigate}
							iconFillColor={COLORS.DARKERTEXT}
							iconHoverFillColor={COLORS.WHITE}
						>
							{i18n.t('back to')}
							{i18n.t('Radar')}
						</Button>

						<View style={[s.item, { borderColor: COLORS.PRIMARY }]}>
							<Text style={s.menuItemDescription}>
								{i18n.t('menu_registerText')}
							</Text>
							<Button
								onPress={() =>
									navigation.navigate(SCREENS.REGISTER)
								}
								icon={() => IconPerson}
								iconFillColor={COLORS.DARKERTEXT}
								iconHoverFillColor={COLORS.WHITE}
							>
								{i18n.t('Register')}
							</Button>
						</View>

						<View
							style={[
								s.item,
								{ borderColor: COLORS.BACKGROUNDGRADIENT2 }
							]}
						>
							<Text style={s.menuItemDescription}>
								{i18n.t('menu_aboutText')}
							</Text>
							<Button
								onPress={() =>
									navigation.navigate(SCREENS.ABOUT)
								}
								icon={() => IconInfo}
								iconFillColor={COLORS.DARKERTEXT}
								iconHoverFillColor={COLORS.WHITE}
							>
								{i18n.t('About')}
							</Button>
						</View>
					</ScrollView>
				</View>
			</SafeAreaView>
		</View>
	);
};

const s = StyleSheet.create({
	container: {
		backgroundColor: COLORS.WHITE,
		flex: 1
	},
	safeArea: {
		...globalStyle.droidSafeArea,
		flex: 1,
		marginTop: -20
	},
	headerContainer: {
		position: 'relative'
	},
	header: {
		position: 'absolute',
		top: 85,
		right: 20
	},
	content: {
		paddingHorizontal: 20
	},
	bannerImage: {
		width: '100%',
		height: 200,
		maxHeight: 200
	},
	menuItemDescription: {
		paddingBottom: 10,
		color: COLORS.BLACK
	},
	item: {
		borderLeftWidth: 2,
		paddingHorizontal: 20,
		paddingVertical: 10,
		marginTop: 20
	}
});

export default Menu;
