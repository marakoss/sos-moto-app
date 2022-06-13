import React, { ReactNode, FC } from 'react';
import {
	StyleSheet,
	View,
	Pressable,
	ColorValue,
	NativeTouchEvent,
	NativeSyntheticEvent
} from 'react-native';

import { IconBlob } from '@icons/index';
import { COLORS } from '@dictionaries/colors';

interface IButtonFilter {
	styles?: {
		container: any;
	};
	title?: string;
	onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
	color?: ColorValue;
	accessibilityLabel?: string;
	disabled?: boolean;
	testID?: string;
	wrapperStyle?: object;
	icon?: ReactNode;
	iconFillColor?: ColorValue;
	iconHoverFillColor?: ColorValue;
	iconWidth?: number;
	iconHeight?: number;
}

const ButtonFilter: FC<IButtonFilter> = ({
	accessibilityLabel,
	icon,
	onPress,
	disabled,
	testID,
	wrapperStyle,
	iconFillColor,
	iconHoverFillColor,
	iconWidth,
	iconHeight
}): React.ReactElement => {
	const container = wrapperStyle || {};

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
			style={container}
		>
			{({ pressed }) => (
				<View style={s.container}>
					<View style={s.overlay}>
						{pressed && <IconBlob fillColor={COLORS.WHITE} />}
						{!pressed && <IconBlob fillColor={COLORS.PRIMARY} />}
					</View>
					<View style={[s.overlay, pressed && s.overlayPressed]}>
						{getIcon(icon, pressed)}
					</View>
				</View>
			)}
		</Pressable>
	);
};

const s = StyleSheet.create({
	container: {
		width: 80,
		height: 80,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: COLORS.BLACK,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.2,
		shadowRadius: 2
	},
	overlay: {
		position: 'absolute'
	},
	overlayPressed: {
		opacity: 0.8
	}
});

export default ButtonFilter;
