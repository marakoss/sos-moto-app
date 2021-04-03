import React, { FC } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { COLORS } from '@dictionaries/colors';

interface iBackground {
	height?: number;
}

const Background: FC<iBackground> = ({ height, children }) => {
	const windowWidth = useWindowDimensions().width;
	// const windowHeight = useWindowDimensions().height;

	const borderLeft = windowWidth * 0.25;
	const borderRight = windowWidth * 0.75;

	const itsHeight = height || 20;

	return (
		<View style={s.wrapper}>
			<View style={s.shape}>
				<View
					style={[
						s.arrows,
						{
							borderLeftWidth: borderLeft,
							borderRightWidth: borderRight,
							borderBottomWidth: itsHeight,
							height: itsHeight + 10
						}
					]}
				/>
			</View>
			<View style={[s.enclosing, { paddingTop: itsHeight + 10 }]}>
				{children}
			</View>
		</View>
	);
};

const s = StyleSheet.create({
	wrapper: {
		flex: 1,
		marginBottom: -40
	},
	shape: {
		width: '100%',
		position: 'absolute',
		transform: [
			{
				rotate: '180deg'
			}
		]
	},
	enclosing: {
		flex: 1
	},
	arrows: {
		position: 'absolute',
		left: 0,
		bottom: 0,
		width: '100%',
		height: 0,
		borderBottomColor: COLORS.TRANSPARENT,
		borderLeftColor: COLORS.WHITE,
		borderRightColor: COLORS.WHITE
	}
});

export default Background;
