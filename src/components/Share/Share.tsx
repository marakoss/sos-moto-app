import React, { FC } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import ButtonInversed from '@components/Button/ButtonInversed';

import { COLORS } from '@dictionaries/colors';
import { IconShare } from '@icons/index';

import { onShare } from '@utils/Share';
import { toDecimalPlaces } from '@utils/Math';

import i18n from 'i18n-js';

interface IShare {
	lat: number;
	lon: number;
	loading: boolean;
	city: string | null | undefined;
}

const Share: FC<IShare> = ({ lat, lon, city, loading }) => {
	const readableCity = city ? city : i18n.t('alert_shareTextCityUnknown');
	return (
		<View style={s.shareBtn}>
			{loading && (
				<>
					<ButtonInversed
						styles={{ button: s.button, text: {} }}
						icon={<ActivityIndicator style={s.indicator} />}
					>
						<Text style={s.shareText}>
							{i18n.t('Loading GPS location')}
						</Text>
					</ButtonInversed>
				</>
			)}
			{!loading && (
				<ButtonInversed
					onPress={() => onShare(lat, lon, readableCity)}
					icon={<IconShare fillColor={COLORS.WHITE} />}
				>
					<Text style={s.shareText}>
						{'N '}
						{toDecimalPlaces(lat, 5).toFixed(5)}
						{', E '}
						{toDecimalPlaces(lon, 5).toFixed(5)}
					</Text>
				</ButtonInversed>
			)}
		</View>
	);
};

const s = StyleSheet.create({
	shareBtn: {
		position: 'relative',
		marginLeft: 20,
		alignItems: 'flex-start'
	},
	shareText: {
		fontSize: 10
	},
	indicator: {
		width: 26,
		height: 10,
		position: 'absolute',
		left: 0,
		top: -5
	},
	button: {
		position: 'relative'
	}
});

export default Share;
