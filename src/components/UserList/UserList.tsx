import React, { FC } from 'react';
import { StyleSheet, View, FlatList, ListRenderItem } from 'react-native';

import Vcard from '@components/Vcard/Vcard';
import { COLORS } from '@dictionaries/colors';
import { ICard } from 'types/card';
import Empty from './Empty';

interface iListView {
	people: ICard[];
	loading: boolean;
	onRefresh: Function;
	navigation?: any;
	route?: any;
}

const List: FC<iListView> = ({
	people,
	loading,
	onRefresh,
	navigation,
	route
}) => {
	const renderItem: ListRenderItem<ICard> = ({ item, index }) => (
		/* eslint-disable react/jsx-props-no-spreading */
		<Vcard {...item} index={index} />
	);

	return (
		<View style={s.container}>
			<FlatList
				contentContainerStyle={s.list}
				data={people}
				renderItem={renderItem}
				keyExtractor={item => (item.id ? item.id : '').toString()}
				ListEmptyComponent={
					<Empty navigation={navigation} route={route} />
				}
				initialNumToRender={5}
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
		paddingTop: 10,
		paddingBottom: 100 // Last item might be unreachable
	}
});

export default List;
