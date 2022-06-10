import React, { FC, useEffect, useRef, useCallback, useContext } from 'react';

import { AppState, AppStateStatus } from 'react-native';
import * as Network from 'expo-network';
import { MobileContext, iMobileTypes } from '@store/index';
// TODO: airplane mode

interface iMobile {}

const Mobile: FC<iMobile> = () => {
	const state = useRef<AppStateStatus>('unknown');
	const { dispatch } = useContext(MobileContext);
	useEffect(() => {
		(async () => {
			const response = await Network.getNetworkStateAsync();
			return response;
		})()
			.then(response => {
				dispatch({
					type: iMobileTypes.setIsConnected,
					value: response.isConnected ? response.isConnected : false
				});
			})
			.catch(() => {
				dispatch({
					type: iMobileTypes.setIsConnected,
					value: false
				});
			});
	}, [dispatch]);

	const handleAppStateChange = useCallback(
		(nextAppState: AppStateStatus) => {
			if (
				// state.current.match(/inactive|background|unknown/) &&
				nextAppState === 'active'
			) {
				dispatch({
					type: iMobileTypes.setIsForeground,
					value: true
				});
			} else {
				dispatch({
					type: iMobileTypes.setIsForeground,
					value: false
				});
			}
			state.current = nextAppState;
		},
		[dispatch]
	);

	useEffect(() => {
		state.current = AppState.currentState;
		const event = AppState.addEventListener('change', s => handleAppStateChange(s));

		return () => {
			event.remove()
		};
	}, [handleAppStateChange]);

	return <></>;
};

export default Mobile;
