import React, { FC, useCallback, useRef, useEffect } from 'react';
import {
	Animated,
	StyleSheet,
	View,
	Pressable,
	NativeTouchEvent,
	NativeSyntheticEvent
} from 'react-native';
import { COLORS } from '@dictionaries/colors';
import { IconMenu } from '@icons/index';

interface IButtonMenu {
	styles?: {
		container: any;
	};
	onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
	accessibilityLabel?: string;
	disabled?: boolean;
	testID?: string;
	isDrawerOpen: boolean;
}

const ButtonMenu: FC<IButtonMenu> = ({
	accessibilityLabel,
	onPress,
	disabled,
	testID,
	isDrawerOpen
}): React.ReactElement => {
	const switchPosition = useRef(new Animated.Value(0)).current;

	const runAnimation = useCallback(() => {
		Animated.sequence([
			Animated.timing(switchPosition, {
				toValue: isDrawerOpen ? 1 : 0,
				duration: 400,
				useNativeDriver: true
			})
		]).start();
	}, [switchPosition, isDrawerOpen]);

	useEffect(() => {
		runAnimation();
	}, [runAnimation, isDrawerOpen]);

	return (
		<Pressable
			accessibilityLabel={accessibilityLabel}
			testID={testID}
			disabled={disabled}
			onPress={event => {
				runAnimation();
				if (onPress) return onPress(event);
				return () => {};
			}}
			style={s.container}
		>
			{() => (
				<View style={s.track}>
					<Animated.View
						style={[
							s.circle,
							{
								transform: [
									{
										translateX: switchPosition.interpolate({
											inputRange: [0, 1],
											outputRange: [0, 24]
										})
									}
								]
							}
						]}
					>
						<View style={s.icon}>
							<IconMenu
								fillColor={m.iconColorOpen.color}
								width={20}
								height={20}
							/>
						</View>
					</Animated.View>
				</View>
			)}
		</Pressable>
	);
};

const m = {
	iconColorOpen: {
		color: COLORS.BLACK
	}
};

const s = StyleSheet.create({
	container: {
		width: 64,
		height: 40,
		alignItems: 'flex-start',
		justifyContent: 'center',
		overflow: 'visible'
	},
	track: {
		width: 64,
		height: 40,
		borderColor: COLORS.LIGHTBORDER,
		borderWidth: 1,
		borderRadius: 40
	},
	circle: {
		width: 40,
		height: 40,
		backgroundColor: COLORS.WHITE,
		borderColor: COLORS.LIGHTBORDER,
		borderWidth: 1,
		borderRadius: 40,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		left: -1
	},
	icon: {
		width: 20,
		height: 20
	}
});

export default ButtonMenu;
