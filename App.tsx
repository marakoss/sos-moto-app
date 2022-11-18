import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Main from './src/Main';

export default function App() {
	return (
		<React.StrictMode>
			<>
				<StatusBar style="auto" />
				<Main />
			</>
		</React.StrictMode>
	);
}
