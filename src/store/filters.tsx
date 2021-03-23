import { SERVICES, NUMBERED_SERVICES } from '@dictionaries/services';

/**
 * This transforms services enum
 * { item1, item2, ...}
 * to object
 * { item1: true, item2: true, ...}
 */
function transform(obj: object, defaultState: boolean = true) {
	return Object.values(obj)
		.filter((value) => typeof value === 'string')
		.reduce((acc: any, cur) => {
			acc[cur] = defaultState;
			return acc;
		}, {});
}

export const filters = {
	items: transform(SERVICES),
	switch(Item: string) {
		this.items[Item] = this.items[Item] !== true;
		return this;
	},

	getActive(items: object) {
		const keys = Object.keys(items).filter(
			(value) => typeof value === 'string'
		);
		const values = Object.values(items);

		return keys
			.filter((cur, i) => {
				if (values[i] === true) {
					return true;
				}
				return false;
			})
			.map((cur) => {
				return NUMBERED_SERVICES.get(cur);
			});
	},

	getDisabled(items: object) {
		const keys = Object.keys(items).filter(
			(value) => typeof value === 'string'
		);
		const values = Object.values(items);

		return keys
			.filter((cur, i) => {
				if (values[i] === false) {
					return true;
				}
				return false;
			})
			.map((cur) => {
				return NUMBERED_SERVICES.get(cur);
			});
	}
};
