import React, { FC } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import globalStyle from '@components/Platform/globalStyle';
import { Button } from '@components/index';
import { COLORS } from '@dictionaries/colors';
import i18n from 'i18n-js';

const About: FC<StackScreenProps<any>> = ({ navigation }) => {
	return (
		<View style={s.container}>
			<SafeAreaView style={s.safeArea}>
				<Button onPress={() => navigation.navigate('Menu')}>
					{i18n.t('back')}
				</Button>
				<Text>About</Text>
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
		...globalStyle.droidSafeArea
	}
});

export default About;
