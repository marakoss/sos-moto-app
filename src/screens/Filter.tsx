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
						<View style={s.buttonContainer}>
							<Button
								onPress={() => navigation.navigate('Home')}
								styles={{
									button: s.button,
									text: s.buttonText
								}}
								stylesPressed={{
									button: s.buttonPressed,
									text: s.buttonTextPressed
								}}
								icon={() => IconCheck}
								iconFillColor={COLORS.WHITE}
								iconHoverFillColor={COLORS.PRIMARY}
								iconWidth={24}
								iconHeight={24}
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
	buttonContainer: {
		width: '100%',
		paddingHorizontal: 20
	},
	button: {
		backgroundColor: COLORS.PRIMARY,
		borderColor: COLORS.PRIMARY
	},
	buttonText: {
		color: COLORS.WHITE
	},
	buttonPressed: {
		backgroundColor: COLORS.TRANSPARENT,
		borderColor: COLORS.PRIMARY
	},
	buttonTextPressed: {
		color: COLORS.PRIMARY
	}
});

export default Filter;
