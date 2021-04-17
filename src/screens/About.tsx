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
import { StackScreenProps } from '@react-navigation/stack';
import globalStyle from '@components/Platform/globalStyle';
import { Button, Headline, Background } from '@components/index';
import { IMAGEABOUT } from '@images/banners';
import { IMAGEJAROSLAV, IMAGEMAREK } from '@images/about';
import { IconMenu } from '@icons/index';
import { COLORS } from '@dictionaries/colors';
import i18n from 'i18n-js';
import { LinearGradient } from 'expo-linear-gradient';

import * as Application from 'expo-application';

const About: FC<StackScreenProps<any>> = ({ navigation }) => {
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
							textColor={{ color: COLORS.WHITE }}
						/>
					</View>
				</LinearGradient>
			</View>
			<SafeAreaView style={s.safeArea}>
				<Background>
					<ScrollView style={s.scrollView}>
						<View style={s.content}>
							<Button
								onPress={() => navigation.navigate('Menu')}
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
								textColor={{ color: COLORS.BLACK }}
							/>
							<Text style={s.paragraph}>
								Verze: {Application.nativeBuildVersion} {'\n'}
								Platforma: {Platform.OS} {'\n'}
								Jazyk: {i18n.locale} {'\n'}
								Kontakt: support@motoprerov.cz
							</Text>

							<Headline
								headline={i18n.t('Authors')}
								textColor={{ color: COLORS.BLACK }}
							/>
							<Text style={s.paragraph}>
								Tuto mobilní aplikaci (SOS MOTO) na platformách
								iOS a Android vyvíjel oddaný tým vývojářů,
								testerů a analytiků z řad motorkářů a to s cílem
								pomoci v nouzi dalším motorkářům. V duchu
								myšlenky od motorkářů pro motorkáře.
							</Text>
							<Text style={s.paragraph}>
								Hlavním developerem je Marek Králík, který
								zajištuje chod aplikace po technické stránce.
							</Text>
							<Image
								source={IMAGEMAREK}
								style={s.textImage}
								resizeMode="contain"
							/>
							<Text style={s.paragraph}>
								Aplikace vznikla jako reakce na poptávku v
								komunitě motorkářů, kteří se sdružili na
								facebookové skupině SOS Motorkáři, za jejímž
								vznikem stojí Jaroslav Čech.
							</Text>
							<Image
								source={IMAGEJAROSLAV}
								style={s.textImage}
								resizeMode="contain"
							/>
							<Text style={s.paragraph}>
								K samotnému vzniku aplikace přispěli i další
								motorkáři. Jmenovitě: Miroslav Kappel, Jakub
								Reitinger, Martin Hlaváček, Eliška Hudcová,
								Karin Šlechtová, Pavel Pittr, Michal Kochaníček
								a další. Celému týmu tímto děkujeme.
							</Text>
							<Text style={s.paragraph}>
								O překlad aplikace se starají: {'\n'}
								CZ: Marek Králík {'\n'}
								SK: Rastislav Puľák {'\n'}
								EN: Marek Králík {'\n'}
							</Text>
							<Text style={s.paragraph}>
								Vyrobeno v České Republice s ❤️
							</Text>
						</View>
					</ScrollView>
				</Background>
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
