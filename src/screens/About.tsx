import React, { FC } from 'react';
import {
	StyleSheet,
	View,
	SafeAreaView,
	ScrollView,
	Text,
	Platform
} from 'react-native';

import { ParamListBase } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { Button, Headline } from '@components/index';
import { COLORS, SCREENS } from '@dictionaries/index';

import * as Application from 'expo-application';

import Localization from '@src/Localization';

const About: FC<DrawerScreenProps<ParamListBase>> = ({ navigation }) => {
	return (
		<View style={s.container}>
			<View style={s.headerContainer}>
				<View style={s.header}>
					<Headline
						headline={Localization.t('About')}
						textColor={COLORS.WHITE}
					/>
				</View>
			</View>
			<SafeAreaView style={s.safeArea}>
				<View>
					<ScrollView style={s.scrollView}>
						<View style={s.content}>
							<Button
								onPress={() =>
									navigation.navigate(SCREENS.MENU.toString())
								}
								iconFillColor={COLORS.DARKERTEXT}
								iconHoverFillColor={COLORS.WHITE}
								iconWidth={20}
								iconHeight={20}
							>
								{Localization.t('back to')}
								{Localization.t('menu')}
							</Button>
							<Headline
								headline={Localization.t('Application')}
								textColor={COLORS.BLACK}
							/>
							<Text style={s.paragraph}>
								Verze: {Application.nativeApplicationVersion} (
								{Application.nativeBuildVersion}) {'\n'}
								Platforma: {Platform.OS} {'\n'}
								Jazyk: {Localization.locale} {'\n'}
								Kontakt: support@motoprerov.cz
							</Text>

							<Headline
								headline={Localization.t('Authors')}
								textColor={COLORS.BLACK}
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
							<Text style={s.paragraph}>
								Aplikace vznikla jako reakce na poptávku v
								komunitě motorkářů, kteří se sdružili na
								facebookové skupině SOS Motorkáři, za jejímž
								vznikem stojí Jaroslav Čech.
							</Text>
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
								DE: Veronika Čermáková {'\n'}
								PL: Filip Straňák {'\n'}
							</Text>
							<Text style={s.paragraph}>
								Vyrobeno v České Republice s ❤️
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
	paragraph: {
		fontSize: 17,
		paddingHorizontal: 20,
		paddingVertical: 10
	}
});

export default About;
