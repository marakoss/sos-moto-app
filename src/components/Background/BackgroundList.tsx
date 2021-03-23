import React, { FC } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';

interface background {
    height?: number
}

const Background: FC<background> = ({
    height,
    children
}) => {
    const windowWidth = useWindowDimensions().width;
    //const windowHeight = useWindowDimensions().height;

    const borderLeft = (windowWidth * 0.25);
    const borderRight = (windowWidth * 0.75);

    const itsHeight = height ? height : 20;

    return (
        <View style={s.wrapper}>
            <View style={s.container}>
                <View style={[s.arrows, {
                    borderLeftWidth: borderLeft,
                    borderRightWidth: borderRight,
                    borderBottomWidth: itsHeight,
                    height: (itsHeight + 10)
                }]} />
            </View>
            <View style={{ paddingTop: itsHeight + 10 }}>
                {children}
            </View>
        </View>
    );

};

const s = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginBottom: -40,
    },
    container: {
        width: '100%',
        position: 'relative',
        transform: [{
            rotate: '180deg'
        }],
    },
    arrows: {
        position: "absolute",
        left: 0,
        bottom: 0,
        width: '100%',
        height: 0,
        borderBottomColor: "transparent",
        borderLeftColor: "white",
        borderRightColor: "white",
    },
});

export default Background;