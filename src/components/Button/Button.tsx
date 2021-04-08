import React, { ReactNode, FC } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Pressable,
	ColorValue,
	NativeTouchEvent,
	NativeSyntheticEvent
} from 'react-native';
import { COLORS } from '@dictionaries/index';

interface iMyButton {
	styles?: {
		button?: any;
		text?: any;
	};
	stylesPressed?: {
		button?: any;
		text?: any;
	};
	title?: string;
	onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
	color?: ColorValue;
	accessibilityLabel?: string;
	disabled?: boolean;
	testID?: string;
	icon?: ReactNode;
	iconFillColor?: ColorValue;
	iconHoverFillColor?: ColorValue;
	iconWidth?: number;
	iconHeight?: number;
}

const Button: FC<iMyButton> = ({
	children,
	accessibilityLabel,
	onPress,
	disabled,
	testID,
	icon,
	iconFillColor,
	iconHoverFillColor,
	iconWidth,
	iconHeight,
	styles,
	stylesPressed
}): React.ReactElement => {
	const buttonStyles = { ...s.button, ...(styles ? styles.button : {}) };
	const buttonPressed = {
		...s.buttonPressed,
		...(stylesPressed ? stylesPressed.button : {})
	};
	const textStyles = { ...s.text, ...(styles ? styles.text : {}) };
	const textPressed = {
		...s.textPressed,
		...(stylesPressed ? stylesPressed.text : {})
	};

	const getIcon = (Component: ReactNode, pressed: boolean) => {
		if (Component instanceof Function) {
			if (!pressed) {
				return React.createElement(Component(), {
					fillColor: iconFillColor,
					width: iconWidth,
					height: iconHeight
				});
			}
			return React.createElement(Component(), {
				fillColor: iconHoverFillColor,
				width: iconWidth,
				height: iconHeight
			});
		}
		return Component;
	};

	return (
		<Pressable
			accessibilityLabel={accessibilityLabel}
			testID={testID}
			disabled={disabled}
			onPress={onPress}
			style={s.container}
		>
			{({ pressed }) => (
				<View style={[s.inner, buttonStyles, pressed && buttonPressed]}>
					<View style={s.gap}>{getIcon(icon, pressed)}</View>

					<View style={s.gap}>
						<Text style={[textStyles, pressed && textPressed]}>
							{children}
						</Text>
					</View>
				</View>
			)}
		</Pressable>
	);
};

const s = StyleSheet.create({
	container: {
		marginVertical: 8
	},
	inner: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignContent: 'center'
	},
	gap: {
		paddingHorizontal: 8
	},
	text: {
		color: COLORS.BLACK
	},
	textPressed: {
		color: COLORS.WHITE
	},
	button: {
		color: COLORS.PRIMARY,
		borderWidth: 2,
		borderColor: COLORS.LIGHTBORDER,
		borderRadius: 12,
		backgroundColor: COLORS.WHITE,
		paddingHorizontal: 5,
		paddingVertical: 8
	},
	buttonPressed: {
		backgroundColor: COLORS.PRIMARY,
		borderColor: COLORS.TRANSPARENT
	}
});

export default Button;
