import React from 'react';
import { View, StyleSheet } from 'react-native';

import { COLORS } from '@dictionaries/colors';
import { IconArrow } from '@icons/index';


const Arrow = () => {
    return (
        <View style={[s.arrow]}>
            <IconArrow fillColor={COLORS.PRIMARY} fillColor2='#d00' width='100' height='100' />
        </View>
    )
}


const s = StyleSheet.create({
    arrow: {
        width: 100,
        height: 100,
        shadowColor: COLORS.BLACK,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.2,
        shadowRadius: 2
    },
});


export default Arrow;