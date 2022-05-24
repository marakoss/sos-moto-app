import React, { FC, useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { COLORS } from '@dictionaries/colors';

interface filteritem {
	itemText: string;
	textColor?: object;
	key?: string | number;
	onClick?: Function;
	initialState?: boolean;
}

const FilterItem: FC<filteritem> = ({
	itemText,
	textColor,
	onClick,
	initialState
}) => {
	const state = !!initialState;
	const [isEnabled, setIsEnabled] = useState(state);
	const toggleSwitch = (checked: boolean) => {
		// Custom callback
		if (onClick && typeof onClick === 'function') {
			onClick(checked);
		}
		setIsEnabled(enabled => !enabled);
	};

	const color = textColor || s.textColor;

	return (
		<View style={s.container}>
			<Text style={[s.text, color]}>{itemText}</Text>
			<Switch
				trackColor={{ false: COLORS.DARKERTEXT, true: COLORS.PRIMARY }}
				thumbColor={COLORS.WHITE}
				ios_backgroundColor={COLORS.LIGHTTEXT}
				onValueChange={toggleSwitch}
				value={isEnabled}
			/>
		</View>
	);
};

const s = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingBottom: 10,
		paddingRight: 35,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	textColor: {
		color: COLORS.BLACK
	},
	text: {
		fontSize: 24,
		fontWeight: '400'
	}
});

export default FilterItem;
