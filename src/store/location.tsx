import { createContext, Dispatch } from 'react';

export enum iLocationTypes {
	setLocation,
	setLatitude,
	setLongitude,
	setIsLocationResolved,
	setIsLocationGranted,
	updateLocation
}

type iAction =
	| { type: iLocationTypes.setLocation; value: object }
	| { type: iLocationTypes.setLatitude; value: number }
	| { type: iLocationTypes.setLongitude; value: number }
	| { type: iLocationTypes.setIsLocationResolved; value: boolean }
	| { type: iLocationTypes.setIsLocationGranted; value: boolean }
	| { type: iLocationTypes.updateLocation; value: iState };

type iState = {
	location: object;
	latitude: number;
	longitude: number;
	isLocationResolved: boolean;
	isLocationGranted?: boolean;
};

type iCtx = iState & {
	dispatch: Dispatch<iAction>;
};

const setLocation = (oldState: iState, nextState: object): iState => {
	return { ...oldState, ...{ location: nextState } };
};

const setLatitude = (oldState: iState, nextState: number): iState => {
	return { ...oldState, ...{ latitude: nextState } };
};

const setLongitude = (oldState: iState, nextState: number): iState => {
	return { ...oldState, ...{ longitude: nextState } };
};

const setIsLocationResolved = (
	oldState: iState,
	nextState: boolean
): iState => {
	return { ...oldState, ...{ isLocationResolved: nextState } };
};

const setIsLocationGranted = (oldState: iState, nextState: boolean): iState => {
	return { ...oldState, ...{ isLocationGranted: nextState } };
};

const updateLocation = (oldState: iState, nextState: iState): iState => {
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
	isLocationGranted: false
};

const ctx = {
	...location,
	dispatch: () => {}
};

export const LocationContext = createContext<iCtx>(ctx);
LocationContext.displayName = 'LocationContext';

export function locationReducer(state: iState, action: iAction): iState {
	switch (action.type) {
		case iLocationTypes.setLocation:
			return setLocation(state, action.value);
		case iLocationTypes.setLatitude:
			return setLatitude(state, action.value);
		case iLocationTypes.setLongitude:
			return setLongitude(state, action.value);
		case iLocationTypes.setIsLocationResolved:
			return setIsLocationResolved(state, action.value);
		case iLocationTypes.setIsLocationGranted:
			return setIsLocationGranted(state, action.value);
		case iLocationTypes.updateLocation:
			return updateLocation(state, action.value);
		default:
			throw new Error();
	}
}
