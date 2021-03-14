import React, { FC } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import i18n from 'i18n-js';
import { Headline, ButtonFilter, FilterItem } from '@components/index';
import { IconCheck } from '@icons/index';
import globalStyle from '@components/platform/globalStyle';
//import { SERVICES } from '@dictionaries/services';

import { filters } from '../store/filters';


const renderFilters = () => {
    // INFO: not sure if using objects like this has any sideeffects
    //Object.values(SERVICES).filter(value => typeof value === 'string')
    return Object.keys(filters.items).filter(value => typeof value === 'string').map((v, i, a)=>{
        return <FilterItem
            key={v}
            itemText={i18n.t(v.toString())}
            onClick={() => filters.switch(v)}
            initialState={filters.items[v]}
            />
    });
}

const Filter: FC<StackScreenProps<any>> = ({ navigation }) => {

    return (
        <View style={s.container}>
            <SafeAreaView style={s.safeArea}>
                <View style={s.header}>
                    <Headline headline={i18n.t('Filter by')} textColor={{color: '#000'}} />
                </View>
                <View style={s.content}>
                    {renderFilters()}
                </View>
                <View style={s.button}>
                    <ButtonFilter
                        onPress={() => navigation.navigate('Home')}
                        icon={<IconCheck fillColor='#fff' />}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
}


const s = StyleSheet.create({
    header: {
        paddingBottom: 20
    },
    content: {

    },
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    safeArea: {
        ...globalStyle.droidSafeArea
    },
    button: {
        alignItems: 'flex-end',
        paddingHorizontal: 20
    }
});

export default Filter;