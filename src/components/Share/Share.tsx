import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ButtonInversed from '@components/Button/ButtonInversed';

import { COLORS } from '@dictionaries/colors';
import { IconShare } from '@icons/index';

import { onShare } from '@utils/Share';
import { toDecimalPlaces } from '@utils/Math';

interface myprops {
	lat: number;
	lon: number;
}

const Share: FC<myprops> = ({ lat, lon }) => {
	return (
		<View style={s.share}>
			<ButtonInversed
				onPress={() => onShare(lat, lon)}
				icon={<IconShare fillColor={COLORS.WHITE} />}
			>
				<Text style={s.shareText}>
					{'N '}
					{toDecimalPlaces(lat, 5).toFixed(5)}
					{', E '}
					{toDecimalPlaces(lon, 5).toFixed(5)}
				</Text>
			</ButtonInversed>
		</View>
	);
};

const s = StyleSheet.create({
	share: {
		position: 'absolute',
		zIndex: 20,
		marginLeft: 20,
		top: 5
	},
	shareText: {
		fontSize: 10
	}
});

export default Share;
