const headlines = {
	'Help in area': 'Pomoc w okolicy',
	'Filter by': 'Rodzaj pomocy',
	Navigate: 'Nawigacja',
	Authors: 'Twórcy',
	Application: 'Aplikacje',
	'Register with SOS Moto': 'Rejestracja usług w SOS Moto'
};

const services = {
	HELP_SITE: 'pomoc na miejscu',
	TOW: 'hol',
	TIRE: 'serwis opon',
	WORKBENCH: 'warsztat',
	GARAGE: 'przechowanie motocykla',
	SLEEPOVER: 'awaryjny nocleg',
	REPAIR_SHOP: 'serwis'
};

const buttons = {
	call: 'dzwoń',
	Call: 'Dzwoń',
	confirm: 'Potwierdź',
	Cancel: 'Anuluj',
	navigate: 'nawiguj',
	Radar: 'Radar',
	Register: 'Rejestracja',
	About: 'O aplikacji',
	back: 'cofnij',
	menu: 'menu',
	Menu: 'Menu',
	'back to application': 'powrót do aplikacji',
	'Allow access to location services': 'Zezwól na udostępnianie lokalizacji',
	'Share location': 'Udostępnij lokalizację',
	'filters settings': 'ustawienia filtrów',
	Ok: 'Ok'
};

const errors = {
	'Access to location services was denied':
		'Odmówiono dostępu do usług lokalizacyjnych',
	'Location services inactive': 'Usługi lokalizacji nieaktywne',
	'Empty result':
		'Bardzo przepraszamy, nie udało się nam wyszukać żadnego zarejestrowanego użytkownika w promieniu 100 kilometrów',
	'Try to change': 'Spróbuj zmienić'
};

const modals = {
	'Ask for help': 'Zapytaj o pomoc',
	'Are you sure to make this call? Contacts in this application serves for emergency situations only':
		'Naprawdę chcesz zadzwonić? Kontakty w tej aplikacji służą tylko do nagłych wypadków',
	'Registration is also available online':
		'Ta rejestracja jest dostępna również online'
};

const labels = {
	offers: 'oferuje: ',
	note: 'uwaga: ',
	'Loading GPS location': 'Ładuję pozycję GPS'
};

const fragments = {
	filters_helpText:
		'* Tutaj możesz wybrać rodzaj pomocy, której szukasz. Jeżeli potrzebujesz tylko np. odholowania, dezaktywuj resztę kategorii a my wyświetlimy ci najbliższe kontakty, które oferują tę usługę.',
	menu_registerText:
		'Rozważ zaoferowanie pomocy innym motocyklistom w nagłych wypadkach i zarejestruj się w aplikacji SOS Moto.',
	menu_aboutText:
		'Tę aplikację tworzy zespół oddanych motocyklistów, przeczytaj o nich więcej',
	alert_registerText:
		'Może chcesz dokończyć tę rejestrację w zaciszu swojego komputera, w takim przypadku odwiedz adres: https://sos.motoprerov.cz/register'
};

export default {
	...headlines,
	...services,
	...buttons,
	...errors,
	...modals,
	...labels,
	...fragments,
	'back to': 'Wróć na '
};
