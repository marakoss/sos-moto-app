import React, { FC } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

import i18n from 'i18n-js';

import { COLORS } from '@dictionaries/colors';
import { IconEmpty } from '@icons/index';
import { StackScreenProps } from '@react-navigation/stack';

const Empty: FC<StackScreenProps<any>> = ({ navigation }) => {
	const onPress = () => {
		if (navigation) navigation.navigate('Filter');
	};

	return (
		<View style={s.container}>
			<View style={s.icon}>
				<IconEmpty width="80" height="80" fillColor={COLORS.DARKTEXT} />
			</View>
			<View style={s.textContainer}>
				<Text style={s.text}>
					{i18n.t('Empty result')}
					{'\n'}
				</Text>
				<View style={s.box}>
					<Text style={s.text}>{i18n.t('Try to change')} </Text>
					<Pressable onPress={() => onPress()}>
						<Text style={[s.text, s.link]}>
							{i18n.t('filters settings')}
						</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

const s = StyleSheet.create({
	container: {
		position: 'relative',
		padding: 20
	},
	textContainer: {
		paddingVertical: 10,
		paddingHorizontal: 20
	},
	text: {
		color: COLORS.DARKERTEXT,
		fontSize: 18,
		lineHeight: 26,
		textAlign: 'justify'
	},
	icon: {
		alignItems: 'center',
		padding: 10
	},
	link: {
		color: COLORS.BLUE,
		textDecorationColor: COLORS.BLUE,
		textDecorationLine: 'underline'
	},
	box: {
		flexDirection: 'row'
	}
});

export default Empty;
