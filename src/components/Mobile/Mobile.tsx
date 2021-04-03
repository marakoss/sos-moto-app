import React, { FC, useEffect, useRef } from 'react';
import { AppState, AppStateStatus } from 'react-native';

// airplane mode

// is connected

// is in foreground

interface iMobile {
	setIsForeground?: Function;
}

const Mobile: FC<iMobile> = ({ setIsForeground }) => {
	const state = useRef<AppStateStatus>('unknown');

	const handleAppStateChange = (nextAppState: AppStateStatus) => {
		if (typeof setIsForeground === 'function') {
			if (
				//state.current.match(/inactive|background|unknown/) &&
				nextAppState === 'active'
			) {
				setIsForeground(true);
			} else {
				setIsForeground(false);
			}
		}
		state.current = nextAppState;
	};

	useEffect(() => {
		state.current = AppState.currentState;
		AppState.addEventListener('change', (s) => handleAppStateChange(s));

		return () => {
			AppState.removeEventListener('change', (s) =>
				handleAppStateChange(s)
			);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <></>;
};

export default Mobile;
