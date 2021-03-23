import React, { useState, useEffect, ReactNode, FC } from 'react';
import { StyleSheet, Text, View, Pressable, ColorValue, NativeTouchEvent, NativeSyntheticEvent } from 'react-native';

import { IconBlob } from '@icons/index';
import { COLORS } from '@dictionaries/colors';

interface MyProp {
    styles?: {
        container: any,
    },
    icon?: ReactNode,
    title?: string,
    onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void,
    color?: ColorValue,
    accessibilityLabel?: string,
    disabled?: boolean,
    testID?: string,
    wrapperStyle?: object
};

const ButtonFilter: FC<MyProp> = ({
    accessibilityLabel,
    icon,
    onPress,
    disabled,
    testID,
    wrapperStyle
}): React.ReactElement => {
    
    const container = wrapperStyle ? wrapperStyle : {};

    return (
        <Pressable
            accessibilityLabel={accessibilityLabel}
            testID={testID}
            disabled={disabled}
            onPress={onPress}
            style={container}
        >
            {({pressed}) => (
                <View style={s.container}>
                    <View style={s.overlay}><IconBlob fillColor={COLORS.PRIMARY} /></View>
                    <View style={s.overlay}>{icon}</View>
                </View>
            ) }
        </Pressable>
    );
}

const s = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: COLORS.BLACK,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.2,
        shadowRadius: 2
      },
      overlay: {
        position: 'absolute',
      },
});

export default ButtonFilter;