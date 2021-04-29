import { Share } from 'react-native';
import { toDecimalPlaces } from '@utils/Math';
import i18n from 'i18n-js';

export const onShare = (lat: number, lon: number, city: string | null) => {
	const formatedLat = toDecimalPlaces(lat, 5).toFixed(5);
	const formatedLon = toDecimalPlaces(lon, 5).toFixed(5);
	(async () => {
		const message = i18n.t('alert_shareText', {
			lat: formatedLat,
			lon: formatedLon,
			city: city
		});

		const result = await Share.share({ message: message });
		return result;
	})().then(() => {
		// Success
	});
};
