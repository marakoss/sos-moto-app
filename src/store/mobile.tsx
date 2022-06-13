import { createContext, Dispatch } from 'react';

export enum IMobileTypes {
	setIsForeground,
	setIsConnected,
	setItAirplaneMode
}

type IAction =
	| { type: IMobileTypes.setIsForeground; value: boolean }
	| { type: IMobileTypes.setIsConnected; value: boolean };

type IState = {
	isForeground: boolean;
	isConnected: boolean;
	isAirplaneMode: boolean;
};

type ICtx = IState & {
	dispatch: Dispatch<IAction>;
};

const isForeground = (oldState: IState, nextState: boolean): IState => {
	return { ...oldState, ...{ isForeground: nextState } };
};

const isConnected = (oldState: IState, nextState: boolean): IState => {
	return { ...oldState, ...{ isConnected: nextState } };
};

export const mobile = {
	isForeground: true,
	isConnected: false,
	isAirplaneMode: false
};

const ctx = {
	...mobile,
	dispatch: () => {}
};

export const MobileContext = createContext<ICtx>(ctx);
MobileContext.displayName = 'MobileContext';

export function mobileReducer(state: IState, action: IAction): IState {
	switch (action.type) {
		case IMobileTypes.setIsForeground:
			return isForeground(state, action.value);
		case IMobileTypes.setIsConnected:
			return isConnected(state, action.value);
		default:
			throw new Error();
	}
}
