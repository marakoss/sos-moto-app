import React, { ReactNode, FC, useCallback, useRef, useState } from 'react';
import {
	Animated,
	StyleSheet,
	View,
	Pressable,
	ColorValue,
	NativeTouchEvent,
	NativeSyntheticEvent
} from 'react-native';
import { COLORS } from '@dictionaries/colors';
import { IconMenu } from '@icons/index';

interface IButtonMenu {
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

const ButtonMenu: FC<IButtonMenu> = ({
	children,
	accessibilityLabel,
	icon,
	onPress,
	disabled,
	testID,
	iconFillColor,
	iconHoverFillColor,
	iconWidth,
	iconHeight
}): React.ReactElement => {
	const switchPosition = useRef(new Animated.Value(0)).current;
	const [isMenuopen, setIsMenuOpen] = useState(true);

	const runAnimation = useCallback(() => {
		console.log('click');
		switchPosition.setValue(isMenuopen ? 1 : 0);

		Animated.sequence([
			Animated.timing(switchPosition, {
				toValue: isMenuopen ? 0 : 1,
				duration: 200,
				useNativeDriver: false
			})
		]).start();
		setIsMenuOpen(!isMenuopen);
	}, [switchPosition, isMenuopen]);

	return (
		<Pressable
			accessibilityLabel={accessibilityLabel}
			testID={testID}
			disabled={disabled}
			onPress={event => {
				runAnimation();
				if (onPress) return onPress(event);
			}}
			style={s.container}
		>
			{({ pressed }) => (
				<Animated.View
					style={[
						s.container,
						{
							transform: [
								{
									translateX: switchPosition.interpolate({
										inputRange: [0, 1],
										outputRange: [0, 50]
									})
								}
							]
						}
					]}
				>
					<View style={s.gap}>
						<IconMenu fillColor={iconFillColor || '#000000'} />
					</View>
				</Animated.View>
			)}
		</Pressable>
	);
};

const s = StyleSheet.create({
	container: {
		width: 80,
		height: 80,
		alignItems: 'center',
		justifyContent: 'center'
	},
	gap: {
		paddingHorizontal: 8
	},
	text: {
		color: COLORS.BLACK
	},
	textPressed: {
		color: COLORS.WHITE
	}
});

export default ButtonMenu;
