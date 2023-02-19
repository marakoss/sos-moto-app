import React, { StrictMode } from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Main from './src/Main';

export default function App() {
	return (
		<StrictMode>
			<GestureHandlerRootView>
				<StatusBar style="auto" />
				<Main />
			</GestureHandlerRootView>
		</StrictMode>
	);
}
