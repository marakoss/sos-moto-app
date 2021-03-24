import React, { FC } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { StackScreenProps } from '@react-navigation/stack';
import globalStyle from '@components/Platform/globalStyle';
import { Button } from '@components/index';
import { COLORS } from '@dictionaries/colors';
import { REGISTER_WEBVIEW_URL } from '@env';
import i18n from 'i18n-js';

const Register: FC<StackScreenProps<any>> = ({ navigation }) => {
	return (
		<View style={s.container}>
			<SafeAreaView style={s.safeArea}>
				<Button onPress={() => navigation.navigate('Home')}>
					{i18n.t('back to application')}
				</Button>
				<WebView
					source={{ uri: REGISTER_WEBVIEW_URL }}
					style={s.webview}
				/>
			</SafeAreaView>
		</View>
	);
};

const s = StyleSheet.create({
	container: {
		backgroundColor: COLORS.WHITE,
		flex: 1
	},
	safeArea: {
		...globalStyle.droidSafeArea,
		width: '100%',
		height: '100%'
	},
	webview: {
		width: '100%',
		height: '100%'
	}
});

export default Register;
