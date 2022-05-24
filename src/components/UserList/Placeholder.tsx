import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '@dictionaries/colors';

export const Item: FC = () => {
	return (
		<View style={s.item}>
			<View style={s.sideLine} />
			<View style={s.distance}>
				<View style={[s.placeholder, { width: 30 }]} />
			</View>
			<View style={s.contact}>
				<View style={[s.placeholder, { width: 150 }]} />
				<View style={[s.placeholder, { width: 300 }]} />
				<View style={[s.placeholder, { width: 280 }]} />
				<View style={s.inline}>
					<View style={[s.placeholder, { width: 100 }]} />
					<View style={[s.placeholder, { width: 100 }]} />
				</View>
			</View>
		</View>
	);
};

const Placeholder: FC = () => {
	return (
		<View style={s.container}>
			{[1, 2, 3, 4, 5].map(current => {
				return React.createElement(Item, { key: current });
			})}
		</View>
	);
};

const s = StyleSheet.create({
	container: {
		paddingLeft: 90,
		paddingRight: 20,
		paddingBottom: 10,
		position: 'relative',
		backgroundColor: COLORS.WHITE
	},
	placeholder: {
		borderRadius: 10,
		height: 12,
		marginBottom: 10,
		backgroundColor: COLORS.LIGHTTEXT
	},
	distance: {
		position: 'absolute',
		top: 0,
		left: -60,
		width: 47
	},
	sideLine: {
		width: 1,
		position: 'absolute',
		top: 0,
		bottom: 5,
		left: -20,
		backgroundColor: COLORS.LIGHTTEXT
	},
	contact: {},
	inline: {
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	item: {
		marginTop: 20
	}
});

export default Placeholder;
