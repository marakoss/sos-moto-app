import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import i18n from 'i18n-js';

import { COLORS } from '@dictionaries/colors';

const Empty: FC = () => {
	return (
		<View style={s.container}>
			<View>
				<Text style={s.text}>
					{i18n.t(
						"We are deeply sorry, but we couldn't find any registered users in your area within 100 kilometers"
					)}
				</Text>
			</View>
		</View>
	);
};

const s = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: COLORS.WHITE,
		padding: 20
	},
	text: {
		color: COLORS.BLACK,
		fontSize: 22
	}
});

export default Empty;
