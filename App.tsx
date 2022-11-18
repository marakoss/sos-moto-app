import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<React.StrictMode>
			<View style={styles.container}>
				<StatusBar style="auto" />
				<Text>Open up App.tsx to start working on your app!as</Text>
			</View>
		</React.StrictMode>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
