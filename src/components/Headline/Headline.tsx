import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '@dictionaries/colors';

interface headline {
	headline: string;
	textColor?: object;
}

const Headline: FC<headline> = ({ headline, textColor }) => {
	const color = textColor || s.textColor;

	return (
		<View style={s.container}>
			<Text style={[s.text, color]}>{headline}</Text>
		</View>
	);
};

const s = StyleSheet.create({
	textColor: {
		color: COLORS.WHITE
	},
	text: {
		fontSize: 30,
		fontWeight: '800'
	},
	container: {
		paddingHorizontal: 20,
		zIndex: 2,
		position: 'relative'
	}
});

export default Headline;
