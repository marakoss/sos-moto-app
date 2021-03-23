import React, { FC } from 'react';
import { StyleSheet, View, FlatList, ListRenderItem } from 'react-native';

import Vcard from '@components/Vcard/Vcard';
import { COLORS } from '@dictionaries/colors';
import { iCard } from 'types/card';
import Empty from './Empty';

interface iListView {
	people: iCard[];
	loading: boolean;
	onRefresh: Function;
}

const List: FC<iListView> = ({ people, loading, onRefresh }) => {
	const renderItem: ListRenderItem<iCard> = ({ item, index }) => (
		/* eslint-disable react/jsx-props-no-spreading */
		<Vcard {...item} index={index} />
	);

	return (
		<View style={s.container}>
			<FlatList
				contentContainerStyle={s.list}
				data={people}
				renderItem={renderItem}
				keyExtractor={(item) => (item.id ? item.id : '').toString()}
				ListEmptyComponent={<Empty />}
				initialNumToRender={3}
				// onEndReached={load more}
				// onEndReachedThreshold
				onRefresh={() => onRefresh()}
				refreshing={loading}
				extraData={people}
			/>
		</View>
	);
};

const s = StyleSheet.create({
	container: {
		width: '100%',
		minHeight: '100%',
		backgroundColor: COLORS.WHITE
	},
	list: {
		paddingBottom: 50 // Last item might be unreachable
	}
});

export default List;
