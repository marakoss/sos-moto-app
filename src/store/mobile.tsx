import { createContext, Dispatch } from 'react';

type iAction = { type: 'isForeground'; value: boolean };

type iState = {
	isForeground: boolean;
};

type iCtx = iState & {
	dispatch: Dispatch<iAction>;
};

const isForeground = (oldState: iState, nextState: boolean): iState => {
	return { ...oldState, ...{ isForeground: nextState } };
};

export const mobile = {
	isForeground: false
};

const ctx = {
	...mobile,
	dispatch: () => {}
};

export const MobileContext = createContext<iCtx>(ctx);
MobileContext.displayName = 'MobilaContext';

export function mobileReducer(state: iState, action: iAction): iState {
	switch (action.type) {
		case 'isForeground':
			return isForeground(state, action.value);
		default:
			throw new Error();
	}
}
