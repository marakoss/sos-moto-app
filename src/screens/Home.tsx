import React, { FC } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

import { ParamListBase } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { Headline } from '@components/index';
import { COLORS } from '@dictionaries/index';

import Localization from '@src/Localization';

const Home: FC<DrawerScreenProps<ParamListBase>> = () => {
	return (
		<View style={s.container}>
			<View style={s.headerContainer}>
				<View style={s.header}>
					<Headline
						headline={Localization.t('About')}
						textColor={COLORS.BLACK}
					/>
				</View>
			</View>
			<SafeAreaView style={s.safeArea}>
				<View>
					<Text>ahoj</Text>
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
	}
});

export default Home;
