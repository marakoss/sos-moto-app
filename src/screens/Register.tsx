import React, {
	FC,
	useRef,
	useContext,
	useEffect,
	useCallback,
	useMemo,
	useState
} from 'react';
import {
	StyleSheet,
	View,
	SafeAreaView,
	ActivityIndicator,
	Alert
} from 'react-native';
//import { WebView } from 'react-native-webview';
import { StackScreenProps } from '@react-navigation/stack';
import globalStyle from '@components/Platform/globalStyle';
import { Button, Headline } from '@components/index';
import { COLORS } from '@dictionaries/colors';
import { REGISTER_WEBVIEW_URL } from '@env';
import i18n from 'i18n-js';
import { IconMenu } from '@icons/index';
import { LocationContext } from '@store/index';
import * as Localization from 'expo-localization';

const Register: FC<StackScreenProps<any>> = ({ navigation }) => {
	const key = useRef(0);
	const { latitude, longitude } = useContext(LocationContext);
	const cachebust = Math.floor(Math.random() * 1000000);
	const [uri, setUri] = useState('');

	const showRegisterAlert = useCallback(() => {
		Alert.alert(
			i18n.t('Registration is also available online'),
			i18n.t('alert_registerText'),
			[
				{
					text: i18n.t('Ok')
				}
			],
			{ cancelable: true }
		);
	}, []);

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

	useEffect(() => {
		if (key.current === 0) {
			setUri(
				`${REGISTER_WEBVIEW_URL}?lat=${latitude}&lon=${longitude}&lang=${Localization.locale}cachebust=${cachebust}`
			);
		}
		key.current += 1;
	}, [cachebust, latitude, longitude]);

	useEffect(() => {
		showRegisterAlert();
	}, [showRegisterAlert]);

	const webView = useMemo(
		() => (
			/*<WebView
				source={{
					uri: uri
				}}
				style={s.webview}
				key={key.current}
				renderLoading={renderLoadingView}
				startInLoadingState
			/>*/
			<></>
		),
		[key, uri]
	);

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
				{webView}
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
