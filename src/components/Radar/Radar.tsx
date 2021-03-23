import React, {FC, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import * as Location from 'expo-location';
import { LocationHeadingObject } from 'expo-location';

import RadarArrow from '@components/Radar/RadarArrow';
import RadarPoints from '@components/Radar/RadarPoints';

import type { Card } from 'types/card';

interface MyProps {
    people: Card[],
    lat: number,
    lon: number,
}

const Radar: FC<MyProps> = ({
    people,
    lat,
    lon
}) => {

    const [location, setLocation] = useState({ trueHeading: 0 });

    useEffect(() => {
        (async () => {
            try {
                const remove = await Location.watchHeadingAsync(_updateCords);
                return remove;
            } catch {
                //console.log('Location services were not granted');
            }
        })();
    }, []);

    const _updateCords = (location: LocationHeadingObject) => {
        if (location.trueHeading !== -1) {
            setLocation(location);
        }
    };

    return (
        <View style={s.container}>
            <View style={s.radarContainer}>
                <View style={{ transform: [{ rotate: -location.trueHeading + 'deg' }] }}>
                    <RadarArrow />
                    <RadarPoints lat={lat} lon={lon} people={people} />
                </View>
            </View>
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: '100%',
    },
    radarContainer: {

    }
});

export default Radar;