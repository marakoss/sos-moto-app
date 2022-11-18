import React, {
	createContext,
	Dispatch,
	FC,
	PropsWithChildren,
	useReducer
} from 'react';

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

export const mobileState = {
	isForeground: true,
	isConnected: false,
	isAirplaneMode: false
};

export const MobileContext = createContext<ICtx>({
	...mobileState,
	dispatch: () => {}
});

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

export const MobileProvider: FC<PropsWithChildren> = ({ children }) => {
	const [mobile, dispatchMobile] = useReducer(mobileReducer, mobileState);

	return (
		<MobileContext.Provider value={{ ...mobile, dispatch: dispatchMobile }}>
			{children}
		</MobileContext.Provider>
	);
};
