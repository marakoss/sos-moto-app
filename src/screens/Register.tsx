import React, { FC, useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { StackScreenProps } from '@react-navigation/stack';
import globalStyle from '@components/Platform/globalStyle';
import { Button, Headline } from '@components/index';
import { COLORS } from '@dictionaries/colors';
import { REGISTER_WEBVIEW_URL } from '@env';
import i18n from 'i18n-js';
import { IconMenu } from '@icons/index';

const Register: FC<StackScreenProps<any>> = ({ navigation }) => {
	const [key, setKey] = useState(0);

	return (
		<View style={s.container}>
			<SafeAreaView style={s.safeArea}>
				<Headline
					headline={i18n.t('Register with SOS Moto')}
					textColor={{ color: COLORS.BLACK }}
				/>
				<View style={s.content}>
					<Button
						onPress={() => navigation.navigate('Menu')}
						icon={() => IconMenu}
						iconFillColor={COLORS.DARKERTEXT}
						iconHoverFillColor={COLORS.WHITE}
						iconWidth={20}
						iconHeight={20}
					>
						{i18n.t('back to')} {i18n.t('menu')}
					</Button>
					{__DEV__ && (
						<Button onPress={() => setKey(key + 1)}>reload</Button>
					)}
				</View>

				<WebView
					source={{ uri: REGISTER_WEBVIEW_URL }}
					style={s.webview}
					key={key}
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
		flex: 1
	},
	webview: {
		flex: 1
	},
	content: {
		paddingHorizontal: 20
	}
});

export default Register;
