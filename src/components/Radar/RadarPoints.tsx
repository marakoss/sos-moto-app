import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { hexToRgbA } from '@utils/Colors';
import { coordsDistance } from '@utils/Geo';
import { COLORS, colorList } from '@dictionaries/colors';

import type { coordinate } from 'types/gps';
import type { point } from 'types/cartesian';
import type { Card } from 'types/card';

interface MyProps {
    people: Card[],
    lat: number,
    lon: number,
}

const RadarPoints: FC<MyProps> = ({
    people,
    lat,
    lon,
}) => {
    let n = 0;
    
    const list = people.map((point: Card) => {

        // average between points
        const maxDistance = 20;
        const points = getPoints(point, {lat: lat, lon: lon}, 100, maxDistance);
        const color = colorList[Number(n)];

        n += 1; // RN screams each child should have unique key
        
        return (
        <View key={n} style={[s.points, { top: points.x - 6, right: points.y - 6 }]}>
            <View style={[s.shadow, {borderColor: hexToRgbA(color)}]}>
                <View style={s.shadowSpace}>
                    <View style={[s.point, {backgroundColor: color}]} />
                </View>
            </View>
        </View>);
    });

    return (
        <View style={s.container}>
            {list}
        </View>
    );
};


const s = StyleSheet.create({
    container: {
        width: 1,
        height: 1,
        position: 'absolute',
        left: '49%',
        top: '49%',
        // Debug
        //borderColor: COLORS.BLACK,
        //borderWidth: 1,
    },
    points: {
        shadowColor: COLORS.BLACK,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        position: 'absolute',
    },
    point: {
        width: 13,
        height: 13,
        borderRadius: 13,
        backgroundColor: '#f00',
    },
    shadowSpace: {
        width: 17,
        height: 17,
        borderRadius: 17,
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 2,
    },
    shadow: {
        width: 19,
        height: 19,
        borderRadius: 19,
        borderColor: 'rgba(255, 0, 0, 0.5)',
        borderWidth: 1,
    },
    
});

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
    const distance = coordsDistance(gps.lat, gps.lon, origin.lat, origin.lon);
    const normalizedGPS = getNormalizedCoords(gps.lat, gps.lon, origin.lat, origin.lon); // Move to origin

    let angleFromOrigin = Math.atan2(normalizedGPS.lat, normalizedGPS.lon);

    if (angleFromOrigin < 0) angleFromOrigin = (2 * Math.PI) + angleFromOrigin;

    // Limit distance 
    let zone = maxDistance;
    if (distance > 0 && distance <= 5) zone = 5;
    if (distance > 5 && distance <= 10) zone = 7.5;
    if (distance > 10 && distance <= 15) zone = 10;
    if (distance > 15 && distance <= 20) zone = 12;
    if (distance > 20 ) zone = 12;

    const x = zone * (Math.sin((Math.PI / 2) - angleFromOrigin));
    const y = zone * (Math.sin(angleFromOrigin));


    return {
        x: x * scale,
        y: y * scale,
    }

};

export default RadarPoints;