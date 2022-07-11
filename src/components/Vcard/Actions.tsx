import { Linking, Alert } from 'react-native';
import i18n from 'i18n-js';
import { onShare } from '@utils/Share';

export const makeCall = (phoneNumber: string | undefined) => {
	Alert.alert(
		i18n.t('Ask for help'),
		i18n.t(
			'Are you sure to make this call? Contacts in this application serves for emergency situations only'
		),
		[
			{
				text: i18n.t('Cancel'),
				style: 'cancel'
			},
			{
				text: i18n.t('Call'),
				onPress: () => Linking.openURL(`tel:${phoneNumber}`)
			}
		],
		{ cancelable: true }
	);
};

export const navigate = (lat: number, lon: number) => {
	if (!lat || !lon) return;

	Linking.openURL(
		`https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=${lat},${lon}`
	);
};

export const shareViaPhone = onShare;
