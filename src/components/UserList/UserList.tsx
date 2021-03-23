import React, {FC, useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, ListRenderItem} from 'react-native';

import Empty from './Empty';

import Vcard from '@components/Vcard/Vcard';
import { COLORS } from '@dictionaries/colors';
import { Card } from 'types/card';

interface ListView {
    people: Card[],
    loading: boolean,
    onRefresh: Function,
}

const List: FC<ListView> = ({
    people,
    loading,
    onRefresh,
 }) => {


    const renderItem: ListRenderItem<Card> = ({ item, index })  => <Vcard {...item} index={index}  />;

    return (
        <View style={s.container}>
            <FlatList
                contentContainerStyle={s.list}
                data={people}
                renderItem={renderItem}
                keyExtractor={(item) => (item.id ? item.id : '').toString()}
                ListEmptyComponent={<Empty />}
                initialNumToRender={3}
                //onEndReached={load more}
                //onEndReachedThreshold
                onRefresh={() => onRefresh()}
                refreshing={loading}
                extraData={people}
            />
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: '100%',
        backgroundColor: COLORS.WHITE,
    },
    list: {
        paddingBottom: 50 // Last item might be unreachable
    }
});

export default List;