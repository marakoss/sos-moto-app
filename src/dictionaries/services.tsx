export enum SERVICES {
	HELP_SITE,
	TOW,
	TIRE,
	WORKBENCH,
	GARAGE,
	SLEEPOVER,
	REPAIR_SHOP,
	HOTEL,
	GUIDE,
	RESTAURANT
}

export const NUMBERED_SERVICES = new Map([
	[SERVICES.HELP_SITE.toString(), '0'],
	[SERVICES.TOW.toString(), '1'],
	[SERVICES.TIRE.toString(), '2'],
	[SERVICES.WORKBENCH.toString(), '3'],
	[SERVICES.GARAGE.toString(), '4'],
	[SERVICES.SLEEPOVER.toString(), '5'],
	[SERVICES.REPAIR_SHOP.toString(), '6'],
	[SERVICES.HOTEL.toString(), '7'],
	[SERVICES.GUIDE.toString(), '8'],
	[SERVICES.RESTAURANT.toString(), '9'],
]);
