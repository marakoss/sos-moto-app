import React, {FC, useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import * as Location from 'expo-location';
import { LocationHeadingObject, PermissionStatus } from 'expo-location';

import Arrow from '@components/Radar/RadarArrow';

import { IconPoint } from '@icons/index';

import { radiansToDegrees, coordsDistance } from '@utils/Geo';
import { COLORS } from '@dictionaries/colors';
import i18n from 'i18n-js';

import type { coordinate } from 'types/gps';
import type { point } from 'types/cartesian';
import type { Card } from 'types/card';



/*
const mypos: coordinate = { lat: 49.454232 , lon: 17.452700};
const data: Array<coordinate> = [
    { lat: 49.454226 , lon: 17.455272},
    { lat: 49.454736, lon: 17.452689 },
    { lat: 49.454084, lon: 17.452123 },
    { lat: 49.453857, lon: 17.454027 },
    { lat: 49.418700, lon: 17.502790 },
    { lat: 49.318700, lon: 17.502790 },
];
*/

// Inverse of Moove coordinate origin to our current location
const getNormalizedCoords = (
    lat: number,
    lon: number,
    center_lat: number = 0,
    center_lon: number = 0
): coordinate => {
    return {
        lat: (lat-center_lat),
        lon: (lon-center_lon)
    };
}

/*
*
*/
const getPoints = (
    gps: coordinate,
    origin: coordinate,
    radius: number,
    maxDistance: number = 10
): point => {
    
    // Get viewport rectangle [square]
    const viewportSize = radius * 2;

    const scale = viewportSize / maxDistance;

    // lat => y !
    // lon => x !
    //const pointCenter: coordinate = { lat: radius, lon: radius };

    const normalizedGPS = getNormalizedCoords(gps.lat, gps.lon, origin.lat, origin.lon); //test

    let angleFromOrigin = Math.atan2(normalizedGPS.lat, normalizedGPS.lon); //correct

    let distance = coordsDistance(gps.lat, gps.lon, origin.lat, origin.lon); //possibly correct

    if (angleFromOrigin < 0) angleFromOrigin = (2 * Math.PI) + angleFromOrigin;

    // Limit distance 
    let zone = maxDistance;
    if (distance > 0 && distance <= 5) zone = 5;
    if (distance > 5 && distance <= 10) zone = 7.5;
    if (distance > 10 && distance <= 15) zone = 10;
    if (distance > 15 && distance <= 20) zone = 12;
    if (distance > 20 ) zone = 12;

    const x = zone * Math.sin((Math.PI / 2) - angleFromOrigin);
    const y = zone * Math.sin(angleFromOrigin);


    //console.log(gps, normalizedGPS, angleFromOrigin, radiansToDegrees(angleFromOrigin), distance, x, y);

    //console.log(x * scale, y * scale);

    return {
        x: x * scale,
        y: y * scale,
    }

};

//getPoints({lat: 1, lon: 1}, {lat: 2, lon: 2}, 20);



const colorlist: Array<string> = [
    COLORS.RED,
    COLORS.GREEN,
    COLORS.BLUE,
    COLORS.YELLOW,
    COLORS.ORANGE,
];

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
            const remove = await Location.watchHeadingAsync(_updateCords);
            return remove;
        })();
    }, []);

    const _updateCords = (location: LocationHeadingObject) => {
        if (location.trueHeading !== -1) {
            setLocation(location);
        }
    };


    const renderPoints = (points: Array<Card>) => {
        let n = 0;
        const list = points.map((point) => {
            n += 1; // RN screams each child should have unique key

            // average between points
            const maxDistance = 20;
            const points = getPoints(point, {lat: lat, lon: lon}, 100, maxDistance);
            const color = colorlist[Number(n)];
            return (
            <View key={n} style={[s.points, { top: points.x-6, right: points.y-6 }]}>
                <IconPoint width="6" height="6" fillColor={color} />
            </View>);
        });

        return (list);
    };




    const memoizedPoints = renderPoints(people);

    return (
        <View style={s.container}>
            <View style={s.radarContainer}>
                <View style={{ transform: [{ rotate: -location.trueHeading + 'deg' }] }}>
                    <Arrow />
                    <View style={s.pointsContainer}>
                        {memoizedPoints}
                    </View>
                </View>
            </View>
        </View>
    );
}

const s = StyleSheet.create({
    pointsContainer: {
        width: 1,
        height: 1,
        position: 'absolute',
        left: '49%',
        top: '49%',
        // Debug
        //borderColor: '#000',
        //borderWidth: 1,
    },
    points: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        position: 'absolute',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: '100%',
    },
    radarContainer: {

    },
    radar: {

    },
});

export default Radar;