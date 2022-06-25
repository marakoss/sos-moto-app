import { createContext, Dispatch } from 'react';
import type { ICard } from 'types/card';

export enum IVCardTypes {
	setUsers
}

type IAction =
	| { type: IVCardTypes.setUsers; value: ICard[] }

type IState = {
	users: Array<ICard>
};

type ICtx = IState & {
	dispatch: Dispatch<IAction>;
};

const setUsers = (oldState: IState, nextState: ICard[]): IState => {
	return { ...oldState, ...{ users: nextState } };
};

/*
	{
		index: 0,
		id: '1',
		name: 'empty',
		surname: 'empty',
		phone: '0',
		lat: 0,
		lon: 0,
		services: [1],
		distance: 0,
		note: '',
		lang: 'cz'
	}
*/

export const vcards = {
	users: []
};

const ctx = {
	...vcards,
	dispatch: () => {}
};

export const VCardContext = createContext<ICtx>(ctx);
VCardContext.displayName = 'VcardContext';

export function vcardReducer(state: IState, action: IAction): IState {
	switch (action.type) {
		case IVCardTypes.setUsers:
			return setUsers(state, action.value);
		default:
			throw new Error('Action not implemented');
	}
}
