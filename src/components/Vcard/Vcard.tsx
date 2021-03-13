import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Linking, Alert } from 'react-native';
import Button from '@components/Button/Button'; // require cycle?
import { IconPhone, IconNavigate, IconPoint } from '@icons/index';
import { COLORS, SERVICES } from '@dictionaries/index';
import i18n from 'i18n-js';
import { Card } from 'types/card';


const makeCall = (phoneNumber: string|undefined) => {
    Alert.alert(
        'Požádat o pomoc',
        'Opravdu chcete volat? Kontakty v této aplikaci slouží pouze pro stav nouze.',
        [
          {
            text: 'Zrušit',
            style: 'cancel'
          },
          {
            text: 'Volat',
            onPress: () => Linking.openURL(`tel:${phoneNumber}`)
        }
        ],
        { cancelable: true }
    );
}

const navigate = (lat: number, lon: number) => {
    if (!lat || !lon) return;

    //console.log('https://www.google.com/maps/dir/?api=1&travelmode=driving&destination='+lat+','+lon+'');
    Linking.openURL('https://www.google.com/maps/dir/?api=1&travelmode=driving&destination='+lat+','+lon+'');
    
}

const getServices = (services: Array<number> | undefined) => {

    if (!services) return '';

    return services.map((item, index, array) => {
        const text: string = Object.values(SERVICES)[item].toString();
        return (i18n.translate(text)+(((array.length-1) > index) ? ', ':''));
    })

};

const Vcard: FC<Card> = ({
    id,
    name,
    surname,
    phone,
    lat,
    lon,
    services,
    distance,
    index
}) => {


    const colorlist: Array<string> = [
        COLORS.RED,
        COLORS.GREEN,
        COLORS.BLUE,
        COLORS.YELLOW,
        COLORS.ORANGE,
    ];

    const color = colorlist[Number(index)];

    return (
    <View style={s.container}>

        <View style={s.sideLine} />
        <View style={s.point}>
            <IconPoint width="16" height="16" fillColor={color} />
        </View>

        <View style={s.distance}>
            <Text style={s.distanceText}>{distance} km</Text>
        </View>

        <View style={s.name}>
            <Text style={[s.nameText, {color: color}]}>{name} {surname}</Text>
            <Text>{i18n.translate('offers')}{getServices(services)}</Text>
        </View>

        <View style={s.contact}>
            <Button
                onPress={() => makeCall(phone)}
                icon={<IconPhone width="16" height="16" fillColor={COLORS.DARKTEXT} />}
            >
                {i18n.t('call')}
            </Button>
            <Button
                onPress={() => navigate(lat, lon)}
                icon={<IconNavigate width="16" height="16" fillColor={COLORS.DARKTEXT} />}
            >
                {i18n.t('navigate')}
            </Button>
        </View>
    </View>
    );
};

const s = StyleSheet.create({
    container: {
        paddingLeft: 90,
        paddingRight: 20,
        paddingBottom: 10
    },
    name: {
        paddingBottom: 4,
    },
    nameText: {
        fontSize: 20,
        paddingBottom: 8,
    },
    point: {
        position: 'absolute',
        left: 53,
        top: 0,
    },
    distance: {
        position: 'absolute',
        top: 6,
        left: 0,
        width: 47,
        //borderColor: 'black',
        //borderWidth: 1
    },
    distanceText: {
        fontSize: 10,
        textAlign: 'right',
    },
    sideLine: {
        width: 1,
        position: 'absolute',
        top: 30,
        bottom: 5,
        left: 65,
        backgroundColor: COLORS.LIGHTTEXT
    },
    contact: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        
    },
});

export default Vcard;


