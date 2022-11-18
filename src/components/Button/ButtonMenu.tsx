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

const width = 60;
const height = 40;

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
							s.switch,
							{
								transform: [
									{
										translateX: switchPosition.interpolate({
											inputRange: [0, 1],
											outputRange: [0, width - height]
										})
									}
								]
							}
						]}
					>
						<View style={s.onstate} />
						<View style={s.circle}>
							<View style={s.icon}>
								<IconMenu
									fillColor={m.iconColorOpen.color}
									width={height / 2}
									height={height / 2}
								/>
							</View>
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
		width: width,
		height: height,
		alignItems: 'flex-start',
		justifyContent: 'center',
		overflow: 'visible'
	},
	track: {
		width: width,
		height: height,
		borderRadius: height,
		borderWidth: 1,
		borderColor: COLORS.DARKBORDER,
		overflow: 'hidden'
	},
	switch: {
		height: height
	},
	circle: {
		width: height,
		height: height,
		borderRadius: height,
		borderColor: COLORS.DARKBORDER,
		backgroundColor: COLORS.WHITE,
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		left: -1,
		position: 'relative',
		zIndex: 2
	},
	onstate: {
		backgroundColor: COLORS.SECONDARY,
		width: width,
		height: height,
		right: height,
		top: 0,
		bottom: 0,
		position: 'absolute',
		zindex: 1
	},
	icon: {
		width: height / 2,
		height: height / 2,
		backgroundColor: COLORS.WHITE
	}
});

export default ButtonMenu;
