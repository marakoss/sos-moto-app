import React, { FC, useRef, useContext } from 'react';
import {
	StyleSheet,
	View,
	SafeAreaView,
	ActivityIndicator
} from 'react-native';
import { WebView } from 'react-native-webview';
import { StackScreenProps } from '@react-navigation/stack';
import globalStyle from '@components/Platform/globalStyle';
import { Button, Headline } from '@components/index';
import { COLORS } from '@dictionaries/colors';
import { REGISTER_WEBVIEW_URL } from '@env';
import i18n from 'i18n-js';
import { IconMenu } from '@icons/index';
import { LocationContext } from '@store/index';

const Register: FC<StackScreenProps<any>> = ({ navigation }) => {
	const key = useRef(0);
	const { latitude, longitude } = useContext(LocationContext);
	const cachebust = Math.floor(Math.random() * 1000000);

	const renderLoadingView = () => {
		return (
			<ActivityIndicator
				animating
				color={COLORS.PRIMARY}
				size="large"
				style={s.activityIndicator}
				hidesWhenStopped
			/>
		);
	};

	return (
		<View style={s.container}>
			<SafeAreaView style={s.safeArea}>
				<Headline
					headline={i18n.t('Register')}
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
						{i18n.t('back to')}
						{i18n.t('menu')}
					</Button>
				</View>

				<WebView
					source={{
						uri: `${REGISTER_WEBVIEW_URL}?lat=${latitude}&lon=${longitude}&cachebust=${cachebust}`
					}}
					style={s.webview}
					key={key.current}
					renderLoading={renderLoadingView}
					startInLoadingState
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
	},
	activityIndicator: {
		position: 'relative'
	}
});

export default Register;
