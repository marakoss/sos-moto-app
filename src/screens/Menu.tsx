import React, { FC } from 'react';

import { StyleSheet, View, ScrollView, SafeAreaView, Text } from 'react-native';

import { DrawerScreenProps } from '@react-navigation/drawer';

import { Headline, Button } from '@components/index';
import { COLORS, SCREENS } from '@dictionaries/index';

import Localization from '@src/Localization';

const Menu: FC<DrawerScreenProps<any>> = ({ navigation }) => {
	return (
		<View style={s.container}>
			<View style={s.headerContainer}>
				<View style={s.header}>
					<Headline
						headline={Localization.t('Navigate')}
						textColor={COLORS.WHITE}
					/>
				</View>
			</View>
			<SafeAreaView style={s.safeArea}>
				<View>
					<ScrollView
						style={s.content}
						showsVerticalScrollIndicator={false}
					>
						<Button
							onPress={() =>
								navigation.navigate(SCREENS.HOME.toString())
							}
							iconFillColor={COLORS.DARKERTEXT}
							iconHoverFillColor={COLORS.WHITE}
						>
							{Localization.t('back to')}
							{Localization.t('Radar')}
						</Button>

						<View style={[s.item, { borderColor: COLORS.PRIMARY }]}>
							<Text style={s.menuItemDescription}>
								{Localization.t('menu_registerText')}
							</Text>
							<Button
								onPress={() =>
									navigation.navigate(
										SCREENS.REGISTER.toString()
									)
								}
								iconFillColor={COLORS.DARKERTEXT}
								iconHoverFillColor={COLORS.WHITE}
							>
								{Localization.t('Register')}
							</Button>
						</View>

						<View
							style={[
								s.item,
								{ borderColor: COLORS.BACKGROUNDGRADIENT2 }
							]}
						>
							<Text style={s.menuItemDescription}>
								{Localization.t('menu_aboutText')}
							</Text>
							<Button
								onPress={() =>
									navigation.navigate(
										SCREENS.ABOUT.toString()
									)
								}
								iconFillColor={COLORS.DARKERTEXT}
								iconHoverFillColor={COLORS.WHITE}
							>
								{Localization.t('About')}
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
