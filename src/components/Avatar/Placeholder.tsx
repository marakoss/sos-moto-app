import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { COLORS } from '@dictionaries/index';
import IconAvatarPlaceholder from '@icons/icon-avatarPlaceholder';

interface IPlaceholder {
	name: string;
}

const Placeholder: FC<IPlaceholder> = ({ name }): React.ReactElement => {
	return (
		<View style={s.container}>
			<View style={s.placeholder}>
				<View style={s.avatarBackground}>
					<IconAvatarPlaceholder />
				</View>
				<Text style={s.letter}>{name.substring(0, 1)}</Text>
			</View>
		</View>
	);
};

const s = StyleSheet.create({
	container: {
		borderColor: COLORS.BLACK,
		borderRadius: 1000,
		width: '100%',
		height: '100%'
	},
	placeholder: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1
	},
	avatarBackground: {
		...StyleSheet.absoluteFillObject,
		transform: [{ rotate: '16deg' }]
	},
	letter: {
		fontSize: 40,
		color: COLORS.WHITE
	}
});

export default Placeholder;
