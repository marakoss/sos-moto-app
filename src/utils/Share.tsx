import { Share } from 'react-native';
import { toDecimalPlaces } from '@utils/Math';
import * as Location from 'expo-location';

export const onShare = (lat: number, lon: number) => {
	const formatedLat = toDecimalPlaces(lat, 5).toFixed(5);
	const formatedLon = toDecimalPlaces(lon, 5).toFixed(5);

	(async () => {
		const geoCode = await Location.reverseGeocodeAsync({
			latitude: lat,
			longitude: lon
		});

		const message = `Mám potíže na cestě. Nacházím se blízko místa: ${geoCode[0].city}. Moje GPS souřadnice jsou: ${formatedLat}, ${formatedLon}. https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=${lat},${lon}`;

		const result = await Share.share({ message: message });
		return result;
	})().then(() => {
		// Success
	});
};
