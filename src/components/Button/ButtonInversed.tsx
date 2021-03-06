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

interface IButtonInversed {
	styles?: {
		button: any;
		text: any;
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

const ButtonInversed: FC<IButtonInversed> = ({
	children,
	accessibilityLabel,
	onPress,
	disabled,
	testID,
	icon,
	iconFillColor,
	iconHoverFillColor,
	iconWidth,
	iconHeight
}): React.ReactElement => {
	const buttonStyles = [s.button];
	const buttonPressed = [s.buttonPressed];
	const textStyles = [s.text];
	const textPressed = [s.textPressed];

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
		marginRight: 8,
		marginVertical: 8
	},
	inner: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	gap: {
		paddingHorizontal: 8
	},
	text: {
		color: COLORS.WHITE
	},
	textPressed: {
		color: COLORS.WHITE
	},
	button: {
		color: COLORS.PRIMARY,
		borderWidth: 1,
		borderColor: COLORS.LIGHTBORDER,
		borderRadius: 8,
		backgroundColor: COLORS.TRANSPARENT,
		paddingHorizontal: 0,
		paddingVertical: 6
	},
	buttonPressed: {
		backgroundColor: COLORS.PRIMARY,
		borderColor: COLORS.TRANSPARENT
	}
});

export default ButtonInversed;
