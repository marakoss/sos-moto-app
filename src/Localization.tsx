import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';
import { cs, en, de, sk, pl } from '@translations/index';

if (__DEV__) {
	console.log('Language was set to: ', Localization.locale);
}
const i18n = new I18n();

i18n.store({
	en: en,
	cs: cs,
	sk: sk,
	de: de,
	pl: pl
});

i18n.locale = Localization.locale;
i18n.defaultLocale = 'en';
i18n.enableFallback = true;

export default i18n;
