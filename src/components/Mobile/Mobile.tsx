import React, { FC, useEffect, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

const Mobile: FC = () => {
	const [state, setState] = useState<AppStateStatus>('unknown');

	const handleAppStateChange = (nextAppState: AppStateStatus) => {
		if (state.match(/inactive|background/) && nextAppState === 'active') {
			// console.log('App has come to the foreground!');
		}
		setState(nextAppState);
	};

	useEffect(() => {
		setState(AppState.currentState);
		AppState.addEventListener('change', handleAppStateChange);

		return () => {
			AppState.removeEventListener('change', handleAppStateChange);
		};
	}, []);

	return <></>;
};

export default Mobile;
