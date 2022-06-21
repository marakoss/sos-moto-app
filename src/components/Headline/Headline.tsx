import React, { FC } from 'react';
import { StyleSheet, Text, View, ColorValue } from 'react-native';
import { COLORS, FONTSIZES } from '@dictionaries/index';

interface IHeadline {
	headline: string;
	textColor?: ColorValue | string;
}

const Headline: FC<IHeadline> = ({ headline, textColor }) => {
	const color = textColor || s.textColor.color;

	return (
		<View style={s.container}>
			<Text style={[s.text, { color: color }]}>{headline}</Text>
		</View>
	);
};

const s = StyleSheet.create({
	textColor: {
		color: COLORS.WHITE
	},
	text: {
		fontSize: FONTSIZES.TITLE,
		fontWeight: '800'
	},
	container: {
		paddingHorizontal: 20,
		zIndex: 2,
		position: 'relative'
	}
});

export default Headline;
