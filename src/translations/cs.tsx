const headlines = {
	'Help in area': 'Pomoc v oblasti',
	'Filter by': 'Druh pomoci',
	Navigate: 'Navigace',
	Authors: 'Autoři',
	Application: 'Aplikace',
	'Register with SOS Moto': 'Registrace služeb v SOS Moto'
};

const services = {
	HELP_SITE: 'pomoc na místě',
	TOW: 'odtah',
	TIRE: 'pneuservis',
	WORKBENCH: 'dílna',
	GARAGE: 'ustájení',
	SLEEPOVER: 'nouzové ubytování',
	REPAIR_SHOP: 'servis'
};

const buttons = {
	call: 'volat',
	Call: 'Volat',
	confirm: 'Potvrdit',
	Cancel: 'Zrušit',
	navigate: 'navigovat',
	Radar: 'Radar',
	Register: 'Registrovat se',
	About: 'O aplikaci',
	back: 'zpět',
	menu: 'menu',
	Menu: 'Menu',
	'back to application': 'zpět do aplikace',
	'Allow access to location services': 'Povolit přistup k polohovým službám',
	'Share location': 'Sdílet polohu',
	'filters settings': 'nastavení filterů',
	Ok: 'Ok'
};

const errors = {
	'Access to location services was denied':
		'Přístup k polohovým službám byl odepřen',
	'Location services inactive': 'Polohové služby neaktivní',
	'Empty result':
		'Velmi se omlouváme, ale nepodařilo se nám najít žádné registrované uživatele ve vaší oblasti do vzdálenosti 100 kilometrů',
	'Try to change': 'Zkuste změnit'
};

const modals = {
	'Ask for help': 'Požádat o pomoc',
	'Are you sure to make this call? Contacts in this application serves for emergency situations only':
		'Opravdu chcete volat? Kontakty v této aplikaci slouží pouze pro stav nouze',
	'Registration is also available online':
		'Tato registrace je také k dispozici online'
};

const labels = {
	offers: 'nabízí: ',
	note: 'poznámka: ',
	'Loading GPS location': 'Načítám GPS polohu'
};

const fragments = {
	filters_helpText:
		'* Zde můžete zvolit druh pomoci, kterou hledáte. Pokud potřebujete jen např. odtah. deaktivujte všechny ostatní kategorie a my vám zobrazíme nejbližší kontakty, které tuto službu nabízejí.',
	menu_registerText:
		'Zvažte nabídnutí pomoci ostatním motorkářům v nouzové situaci a zaregistrujte se v aplikaci SOS Moto',
	menu_aboutText:
		'Tuto aplikaci tvoří tým oddaných motorkářů, přečtěte si o nich více',
	alert_registerText:
		'Možná byste tuto registraci chtěli vyplnit z pohodlí svého počítače. V takovém případě navštivte adresu: https://sos.motoprerov.cz/register',
	alert_shareText:
		'Mám potíže na cestě. Nacházím se blízko místa: {{city}}. Moje GPS souřadnice jsou: {{lat}}, {{lon}}. https://www.google.com/maps/dir/?api=1&travelmode=driving&destination={{lat}},{{lon}}',
	alert_shareTextCityUnknown: 'Nezjištěno'
};

export default {
	...headlines,
	...services,
	...buttons,
	...errors,
	...modals,
	...labels,
	...fragments,
	'back to': 'Zpět na '
};
