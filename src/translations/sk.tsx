const headlines = {
	'Help in area': 'Pomoc v okolí',
	'Filter by': 'Druh pomoci',
	Navigate: 'Navigovať',
	Authors: 'Autori',
	Application: 'Aplikácia',
	'Register with SOS Moto': 'Registrácia služieb v SOS Moto'
};

const services = {
	HELP_SITE: 'pomoc na mieste',
	TOW: 'odťah',
	TIRE: 'pneuservis',
	WORKBENCH: 'dielňa',
	GARAGE: 'uskladnenie motocykla',
	SLEEPOVER: 'núdzové ubytovanie',
	REPAIR_SHOP: 'servis'
};

const buttons = {
	call: 'volať',
	Call: 'Volať',
	confirm: 'Potvrdiť',
	Cancel: 'Zrušiť',
	navigate: 'navigovať',
	Radar: 'Radar',
	Register: 'Registrovať sa',
	About: 'O aplikácii',
	back: 'späť',
	menu: 'menu',
	Menu: 'Menu',
	'back to application': 'späť do aplikácie',
	'Allow access to location services': 'Povoliť prístup k polohovým službám',
	'Share location': 'Zdieľať polohu',
	'filters settings': 'nastavenie filtrov',
	Ok: 'Ok'
};

const errors = {
	'Access to location services was denied':
		'Prístup k polohovým službám bol odmietnutý',
	'Location services inactive': 'Polohové služby neaktívne',
	'Empty result':
		'Veľmi sa ospravedlňujeme, ale nepodarilo sa nám nájsť žiadnych registrovaných uživateľov vo vašej oblasti do vzdialenosti 100 kilometrov',
	'Try to change': 'Skuste zmeniť'
};

const modals = {
	'Ask for help': 'Požiadať o pomoc',
	'Are you sure to make this call? Contacts in this application serves for emergency situations only':
		'Skutočne chcete uskutočniť tento hovor? Kontakty v tejto aplikácii slúžia iba pre stav núdze',
	'Registration is also available online':
		'Táto registrácia je k dispozícii aj online'
};

const labels = {
	offers: 'ponúka: ',
	note: 'poznámka: ',
	'Loading GPS location': 'Načítavam GPS polohu'
};

const fragments = {
	filters_helpText:
		'* Tu môžete zvoliť druh pomoci, ktorú hľadáte. Pokiaľ potrebujete napríklad iba odtiahnutie, deaktivujte všetky ostatné kategórie a my vám zobrazíme najbližšie kontakty, ktoré túto službu ponúkaju.',
	menu_registerText:
		'Zvážte možnosť poskytnutia pomoci ostatným motorkárom v núdzovej situácii a zaregistrujte sa v aplikácii SOS Moto',
	menu_aboutText:
		'Túto aplikáciu tvorí tím oddaných motorkárov, prečítajte si o nich viac',
	alert_registerText:
		'Možno by ste túto registráciu chceli vyplniť z pohodlia vášho počítača. V takom prípade navštivte adresu: https://sos.motoprerov.cz/register'
};

export default {
	...headlines,
	...services,
	...buttons,
	...errors,
	...modals,
	...labels,
	...fragments,
	'back to': 'Späť na '
};
