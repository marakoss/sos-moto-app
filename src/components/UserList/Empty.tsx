import React, {FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import i18n from 'i18n-js';

const Empty: FC = ({
 }) => {

    return (
        <View style={s.container}>
            <View>
                <Text>{i18n.t('No users were found in your area')}</Text>
            </View>
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        width: '100%',
        color: '#fff',
        backgroundColor: '#fff',
    }
});

export default Empty;