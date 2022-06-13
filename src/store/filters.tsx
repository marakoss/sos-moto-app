import { createContext, Dispatch } from 'react';
import { SERVICES, NUMBERED_SERVICES } from '@dictionaries/services';

type IAction = { type: 'switch'; value: string };

type IKeyValuePair = {
	[key: string]: boolean;
};

type IState = {
	items: IKeyValuePair;
};

type ICtx = {
	items: IKeyValuePair;
	dispatch: Dispatch<IAction>;
};

/**
 * This transforms services enum
 * { item1, item2, ...}
 * to object
 * { item1: true, item2: true, ...}
 */
function transform(obj: object, defaultState: boolean = true): IKeyValuePair {
	return Object.values(obj)
		.filter(value => typeof value === 'string')
		.reduce((acc: any, cur) => {
			acc[cur] = defaultState;
			return acc;
		}, {});
}

export const getActive = (items: object) => {
	const keys = Object.keys(items).filter(value => typeof value === 'string');
	const values = Object.values(items);

	return keys
		.filter((cur, i) => {
			if (values[i] === true) {
				return true;
			}
			return false;
		})
		.map(cur => {
			return NUMBERED_SERVICES.get(cur);
		});
};

export const getDisabled = (items: object) => {
	const keys = Object.keys(items).filter(value => typeof value === 'string');
	const values = Object.values(items);

	return keys
		.filter((cur, i) => {
			if (values[i] === false) {
				return true;
			}
			return false;
		})
		.map(cur => {
			return NUMBERED_SERVICES.get(cur);
		});
};

const getSwitched = (oldState: IState, item: string): IState => {
	if (oldState.items) {
		const { items } = oldState;
		const newItem = items[item] !== true;
		const newState = Object.assign(items, {
			[item]: newItem
		});
		return { items: newState };
	}
	return oldState;
};

export const filters = {
	items: transform(SERVICES)
};

const ctx = {
	...filters,
	dispatch: () => {}
};

export const FiltersContext = createContext<ICtx>(ctx);
FiltersContext.displayName = 'FiltersContext';

export function filtersReducer(state: IState, action: IAction): IState {
	switch (action.type) {
		case 'switch':
			return getSwitched(state, action.value);
		default:
			throw new Error();
	}
}
