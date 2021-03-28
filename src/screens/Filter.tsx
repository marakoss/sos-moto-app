import React, { FC } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import i18n from 'i18n-js';
import { Headline, Button, FilterItem } from '@components/index';
import { IconCheck } from '@icons/index';
import globalStyle from '@components/Platform/globalStyle';
import { COLORS } from '@dictionaries/colors';
import { filters, FiltersContext } from '@store/filters';

const renderFilters = (items: object, dispatch: Function) => {
	if (!items) return [];
	return Object.keys(items)
		.filter((value) => typeof value === 'string')
		.map((v) => {
			return (
				<FilterItem
					key={v}
					itemText={i18n.t(v.toString())}
					onClick={() => dispatch({ type: 'switch', value: v })}
					initialState={filters.items[v]}
				/>
			);
		});
};

const Filter: FC<StackScreenProps<any>> = ({ navigation }) => {
	return (
		<FiltersContext.Consumer>
			{({ items, dispatch }) => (
				<View style={s.container}>
					<SafeAreaView style={s.safeArea}>
						<View style={s.header}>
							<Headline
								headline={i18n.t('Filter by')}
								textColor={{ color: COLORS.BLACK }}
							/>
						</View>
						<View style={s.content}>
							{renderFilters(items, dispatch)}
						</View>
						<View style={s.button}>
							<Button
								onPress={() => navigation.navigate('Home')}
								icon={() => IconCheck}
								iconFillColor={COLORS.PRIMARY}
								iconHoverFillColor={COLORS.WHITE}
							>
								{i18n.t('confirm')}
							</Button>
						</View>
					</SafeAreaView>
				</View>
			)}
		</FiltersContext.Consumer>
	);
};

const s = StyleSheet.create({
	header: {
		paddingBottom: 20
	},
	content: {},
	container: {
		backgroundColor: COLORS.WHITE,
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
