import { createContext, Dispatch } from 'react';

export enum iMobileTypes {
	setIsForeground,
	setIsConnected,
	setItAirplaneMode
}

type iAction =
	| { type: iMobileTypes.setIsForeground; value: boolean }
	| { type: iMobileTypes.setIsConnected; value: boolean };

type iState = {
	isForeground: boolean;
	isConnected: boolean;
	isAirplaneMode: boolean;
};

type iCtx = iState & {
	dispatch: Dispatch<iAction>;
};

const isForeground = (oldState: iState, nextState: boolean): iState => {
	return { ...oldState, ...{ isForeground: nextState } };
};

const isConnected = (oldState: iState, nextState: boolean): iState => {
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

export const MobileContext = createContext<iCtx>(ctx);
MobileContext.displayName = 'MobileContext';

export function mobileReducer(state: iState, action: iAction): iState {
	switch (action.type) {
		case iMobileTypes.setIsForeground:
			return isForeground(state, action.value);
		case iMobileTypes.setIsConnected:
			return isConnected(state, action.value);
		default:
			throw new Error();
	}
}
