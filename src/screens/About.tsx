import React, { FC } from 'react';
import {
	StyleSheet,
	View,
	SafeAreaView,
	ScrollView,
	Text,
	Image,
	Platform
} from 'react-native';

import { DrawerScreenProps } from '@react-navigation/drawer';

import globalStyle from '@components/Platform/globalStyle';
import { Button, Headline } from '@components/index';
import { IMAGEABOUT } from '@images/banners';
import { IMAGEJAROSLAV, IMAGEMAREK } from '@images/about';
import { IconMenu } from '@icons/index';
import { COLORS, SCREENS } from '@dictionaries/index';

import i18n from 'i18n-js';
import { LinearGradient } from 'expo-linear-gradient';
import * as Application from 'expo-application';

const About: FC<DrawerScreenProps<any>> = ({ navigation }) => {
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
							headline={i18n.t('About')}
							textColor={COLORS.WHITE}
						/>
					</View>
				</LinearGradient>
			</View>
			<SafeAreaView style={s.safeArea}>
				<View>
					<ScrollView style={s.scrollView}>
						<View style={s.content}>
							<Button
								onPress={() =>
									navigation.navigate(SCREENS.MENU)
								}
								icon={() => IconMenu}
								iconFillColor={COLORS.DARKERTEXT}
								iconHoverFillColor={COLORS.WHITE}
								iconWidth={20}
								iconHeight={20}
							>
								{i18n.t('back to')}
								{i18n.t('menu')}
							</Button>
							<Headline
								headline={i18n.t('Application')}
								textColor={COLORS.BLACK}
							/>
							<Text style={s.paragraph}>
								Verze: {Application.nativeApplicationVersion} (
								{Application.nativeBuildVersion}) {'\n'}
								Platforma: {Platform.OS} {'\n'}
								Jazyk: {i18n.locale} {'\n'}
								Kontakt: support@motoprerov.cz
							</Text>

							<Headline
								headline={i18n.t('Authors')}
								textColor={COLORS.BLACK}
							/>
							<Text style={s.paragraph}>
								Tuto mobiln?? aplikaci (SOS MOTO) na platform??ch
								iOS a Android vyv??jel oddan?? t??m v??voj??????,
								tester?? a analytik?? z ??ad motork?????? a to s c??lem
								pomoci v nouzi dal????m motork??????m. V duchu
								my??lenky od motork?????? pro motork????e.
							</Text>
							<Text style={s.paragraph}>
								Hlavn??m developerem je Marek Kr??l??k, kter??
								zaji??tuje chod aplikace po technick?? str??nce.
							</Text>
							<Image
								source={IMAGEMAREK}
								style={s.textImage}
								resizeMode="contain"
							/>
							<Text style={s.paragraph}>
								Aplikace vznikla jako reakce na popt??vku v
								komunit?? motork??????, kte???? se sdru??ili na
								facebookov?? skupin?? SOS Motork????i, za jej??m??
								vznikem stoj?? Jaroslav ??ech.
							</Text>
							<Image
								source={IMAGEJAROSLAV}
								style={s.textImage}
								resizeMode="contain"
							/>
							<Text style={s.paragraph}>
								K samotn??mu vzniku aplikace p??isp??li i dal????
								motork????i. Jmenovit??: Miroslav Kappel, Jakub
								Reitinger, Martin Hlav????ek, Eli??ka Hudcov??,
								Karin ??lechtov??, Pavel Pittr, Michal Kochan????ek
								a dal????. Cel??mu t??mu t??mto d??kujeme.
							</Text>
							<Text style={s.paragraph}>
								O p??eklad aplikace se staraj??: {'\n'}
								CZ: Marek Kr??l??k {'\n'}
								SK: Rastislav Pu????k {'\n'}
								EN: Marek Kr??l??k {'\n'}
								DE: Veronika ??erm??kov?? {'\n'}
								PL: Filip Stra????k {'\n'}
							</Text>
							<Text style={s.paragraph}>
								Vyrobeno v ??esk?? Republice s ??????
							</Text>
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
	scrollView: {
		paddingHorizontal: 20
	},
	content: {
		paddingBottom: 50
	},
	bannerImage: {
		width: '100%',
		height: 200,
		maxHeight: 200
	},
	textImage: {
		width: '100%',
		height: 290,
		maxHeight: 290
	},
	paragraph: {
		fontSize: 17,
		paddingHorizontal: 20,
		paddingVertical: 10
		// textAlign: 'justify'
	}
});

export default About;
