const headlines = {
	'Help in area': 'Help in area',
	'Filter by': 'Filter by',
	Navigate: 'Navigation',
	Authors: 'Authors',
	Application: 'Application',
	'Register with SOS Moto': 'Register with SOS Moto'
};

const services = {
	HELP_SITE: 'help on site',
	TOW: 'tow',
	TIRE: 'tire change',
	WORKBENCH: 'workbench',
	GARAGE: 'garage',
	SLEEPOVER: 'emergency sleepover',
	REPAIR_SHOP: 'repair shop'
};

const buttons = {
	call: 'call',
	Call: 'Call',
	confirm: 'confirm',
	Cancel: 'Cancel',
	navigate: 'navigate',
	Radar: 'Radar',
	Register: 'Register',
	About: 'About',
	back: 'back',
	menu: 'menu',
	Menu: 'Menu',
	'back to application': 'back to application',
	'Allow access to location services': 'Allow access to location services',
	'Share location': 'Share location',
	'filters settings': 'filter settings',
	Ok: 'Ok'
};

const errors = {
	'Access to location services was denied':
		'Access to location services was denied',
	'Location services inactive': 'Location services are inactive',
	'Empty result':
		'We are sorry, but we couldnt find any registered users within 100kilometers',
	'Try to change': 'Try to change'
};

const modals = {
	'Ask for help': 'Ask for help',
	'Are you sure to make this call? Contacts in this application serves for emergency situations only':
		'Are you sure to make this call? Contacts in this application serves for emergency situations only',
	'Registration is also available online':
		'Registration is also available online'
};

const labels = {
	offers: 'offers: ',
	note: 'note: ',
	'Loading GPS location': 'Loading GPS location'
};

const fragments = {
	filters_helpText:
		'* Here you can choose a type of help you are looking for. If you only need for example towing, deactivate all other categories and we show you just the closest contacts who offers this service.',
	menu_registerText:
		'Consider offering help to others in emergency situation by registering in SOS moto application',
	menu_aboutText:
		'This application is created by a team of devoted bikers, read more about them',
	alert_registerText:
		'You might want to fill out this register form through the comfort of your computer. In that case navigate to: https://sos.motoprerov.cz/register'
};

export default {
	...headlines,
	...services,
	...buttons,
	...errors,
	...modals,
	...labels,
	...fragments,
	'back to': 'Back to '
};
