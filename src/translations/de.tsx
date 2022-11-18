const headlines = {
	'Help in area': 'Hilfe im Gebiet',
	'Filter by': 'Art von Hilfe',
	Navigate: 'Navigation',
	Authors: 'Autoren',
	Application: 'Applikation',
	'Register with SOS Moto': 'Serviceregistrierung in SOS Moto'
};

const services = {
	HELP_SITE: 'Hilfe am Ort',
	TOW: 'Abschleppen',
	TIRE: 'Reifenservice',
	WORKBENCH: 'Werkstatt',
	GARAGE: 'Garage',
	SLEEPOVER: 'Notunterkunft',
	REPAIR_SHOP: 'Service'
};

const buttons = {
	call: 'anrufen',
	Call: 'Anrufen',
	confirm: 'bestätigen',
	Cancel: 'Beenden',
	navigate: 'navigieren',
	Radar: 'Radar',
	Register: 'sich registrieren',
	About: 'über die Applikation',
	back: 'zurück',
	menu: 'menü',
	Menu: 'Menü',
	'back to application': 'zurück zur Applikation',
	'Allow access to location services':
		'Zugriff zu Ortungsdiensten ermöglichen',
	'Share location': 'Lage teilen',
	'filters settings': 'Filtereinstellungen',
	Ok: 'Ok'
};

const errors = {
	'Access to location services was denied':
		'Zugriff zu Ortungsdiensten wurde abgelehnt',
	'Location services inactive': 'Ortungsdienste inaktiv',
	'Empty result':
		'Es tut uns Leid, aber wir konnten innerhalb von 100 Kilometern keine registrierten Benutzer in Ihrer Nähe finden',
	'Try to change': 'Versuche zu ändern'
};

const modals = {
	'Ask for help': 'um Hilfe bitten',
	'Are you sure to make this call? Contacts in this application serves for emergency situations only':
		'Sind Sie sicher, dass Sie anrufen möchten? Die Kontakte in dieser Applikation sind nur für Notfälle',
	'Registration is also available online':
		'Diese Registrierung ist auch online verfügbar'
};

const labels = {
	offers: 'bietet an: ',
	note: 'Notiz: ',
	'Loading GPS location': 'GPS-Standort einlesen'
};

const fragments = {
	filters_helpText:
		'* Hier können Sie die Art der Hilfe auswählen. Wenn Sie zum Beispiel nur Abschleppen brauchen, deaktivieren Sie alle anderen Kategorien und wir zeigen Ihnen die nächstgelegenen Kontakte, die diesen Service anbieten.',
	menu_registerText:
		'Erwägen Sie, anderen Motorradfahrern im Not zu helfen und registrieren Sie sich in der Applikation SOS Moto.',
	menu_aboutText:
		'Diese Applikation besteht aus einem Team engagierten Motorradfahrer, lesen Sie mehr über sie.',
	alert_registerText:
		'Möglicherweise möchten Sie diese Registrierung bequem von Ihrem Computer ausfüllen. In diesem Fall besuchen Sie die Seite https://sos.motoprerov.cz/register'
};

export default {
	...headlines,
	...services,
	...buttons,
	...errors,
	...modals,
	...labels,
	...fragments,
	'back to': 'Zurück zu '
};
