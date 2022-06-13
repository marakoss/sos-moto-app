import { createContext, Dispatch } from 'react';

export enum ILocationTypes {
	setLocation,
	setLatitude,
	setLongitude,
	setIsLocationResolved,
	setIsLocationGranted,
	updateLocation,
	setCity
}

type IAction =
	| { type: ILocationTypes.setLocation; value: object }
	| { type: ILocationTypes.setLatitude; value: number }
	| { type: ILocationTypes.setLongitude; value: number }
	| { type: ILocationTypes.setIsLocationResolved; value: boolean }
	| { type: ILocationTypes.setIsLocationGranted; value: boolean }
	| { type: ILocationTypes.updateLocation; value: IState }
	| { type: ILocationTypes.setCity; value: string };

type IState = {
	location: object;
	latitude: number;
	longitude: number;
	isLocationResolved: boolean;
	isLocationGranted?: boolean;
	city?: string | null;
};

type ICtx = IState & {
	dispatch: Dispatch<IAction>;
};

const setLocation = (oldState: IState, nextState: object): IState => {
	return { ...oldState, ...{ location: nextState } };
};

const setLatitude = (oldState: IState, nextState: number): IState => {
	return { ...oldState, ...{ latitude: nextState } };
};

const setLongitude = (oldState: IState, nextState: number): IState => {
	return { ...oldState, ...{ longitude: nextState } };
};

const setCity = (oldState: IState, nextState: string): IState => {
	return { ...oldState, ...{ city: nextState } };
};

const setIsLocationResolved = (
	oldState: IState,
	nextState: boolean
): IState => {
	return { ...oldState, ...{ isLocationResolved: nextState } };
};

const setIsLocationGranted = (oldState: IState, nextState: boolean): IState => {
	return { ...oldState, ...{ isLocationGranted: nextState } };
};

const updateLocation = (oldState: IState, nextState: IState): IState => {
	return {
		...oldState,
		...{
			location: nextState.location,
			latitude: nextState.latitude,
			longitude: nextState.longitude,
			isLocationResolved: nextState.isLocationResolved
		}
	};
};

export const location = {
	location: {},
	latitude: 0,
	longitude: 0,
	isLocationResolved: false,
	isLocationGranted: false,
	city: null
};

const ctx = {
	...location,
	dispatch: () => {}
};

export const LocationContext = createContext<ICtx>(ctx);
LocationContext.displayName = 'LocationContext';

export function locationReducer(state: IState, action: IAction): IState {
	switch (action.type) {
		case ILocationTypes.setLocation:
			return setLocation(state, action.value);
		case ILocationTypes.setLatitude:
			return setLatitude(state, action.value);
		case ILocationTypes.setLongitude:
			return setLongitude(state, action.value);
		case ILocationTypes.setIsLocationResolved:
			return setIsLocationResolved(state, action.value);
		case ILocationTypes.setIsLocationGranted:
			return setIsLocationGranted(state, action.value);
		case ILocationTypes.updateLocation:
			return updateLocation(state, action.value);
		case ILocationTypes.setCity:
			return setCity(state, action.value);
		default:
			throw new Error();
	}
}
