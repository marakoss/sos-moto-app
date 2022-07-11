import React, { FC, useState } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

import Button from '@components/Button/Button';
import ButtonInversed from '@components/Button/ButtonInversed';
import Avatar from '@components/Avatar/Avatar';
import { IconPhone, IconNavigate, IconMore } from '@icons/index';
import { COLORS, THEME, SERVICES } from '@dictionaries/index';

import i18n from 'i18n-js';
import { ICard } from 'types/card';

import { makeCall, navigate, shareViaPhone } from './Actions';


const getServices = (services: Array<number> | undefined) => {
	if (!services) return '';

	return services.map((item, index, array) => {
		const text: string = Object.values(SERVICES)[item].toString();
		return i18n.translate(text) + (array.length - 1 > index ? ', ' : '');
	});
};


const Vcard: FC<ICard> = ({
	id,
	name,
	surname,
	phone,
	lat,
	lon,
	services,
	distance,
	note,
	language,
	rating
}) => {
	
	const [isExpanded, setIsExpanded] = useState(false);

	const expand = () => {
		setIsExpanded(!isExpanded);
	};
	const noteNotEmpty = typeof note !== 'undefined' ? note : ' ';

	return (
		
			<View style={s.container}>

				<View style={s.header}>
					<View style={s.avatar}>
						<Avatar uuid={id} name={name}></Avatar>
					</View>

					<View style={s.column}>
							<Text style={s.columnHeader}>{i18n.t('distance')}</Text>
							<Text style={s.columnContent}>
								{distance}{' '}
								<Text style={s.columnMeta}>{i18n.t('kilometers')}</Text>
							</Text>
							
					</View>
					<View style={s.column}>
						<Text style={s.columnHeader}>{i18n.t('reccommended')}</Text>
						<Text style={s.columnContent}>
							{rating || '0'}{' '}
							<Text style={s.columnMeta}>{i18n.t('times')}</Text>
						</Text>
					</View>
					<View style={s.column}>
						<Text style={s.columnHeader}>{i18n.t('language')}</Text>
						<Text style={s.columnContent}>{language}</Text>
					</View>
				</View>

				<View style={s.name}>
					<Text style={s.nameText}>
						{name} {surname}
					</Text>
				</View>

				<View style={s.services}>
					<View>
						<Text>
							{getServices(services)}
						</Text>
					</View>
					<View>
						<Text>{noteNotEmpty}</Text>
					</View>
				</View>

				<View style={s.actionbuttons}>
					<Button
						onPress={() => makeCall(phone)}
						icon={() => IconPhone}
						iconWidth={16}
						iconHeight={16}
						iconFillColor={COLORS.DARKTEXT}
						iconHoverFillColor={COLORS.WHITE}
					>
						{i18n.t('call')}
					</Button>
					<ButtonInversed
						onPress={() => expand()}
						
						icon={() => IconMore}
						iconWidth={12}
						iconHeight={12}
						iconFillColor={COLORS.WHITE}
						iconHoverFillColor={COLORS.BLACK}
					>
						{i18n.t('more')}
					</ButtonInversed>
					{isExpanded && (
						<View>
							<Button
								onPress={() => navigate(lat, lon)}
								icon={() => IconNavigate}
								iconWidth={16}
								iconHeight={16}
								iconFillColor={COLORS.DARKTEXT}
								iconHoverFillColor={COLORS.WHITE}
							>
								{i18n.t('navigate')}
							</Button>

							<Button
								onPress={() => shareViaPhone(lat, lon, '')}
								icon={() => IconNavigate}
								iconWidth={16}
								iconHeight={16}
								iconFillColor={COLORS.DARKTEXT}
								iconHoverFillColor={COLORS.WHITE}
							>
								{i18n.t('share')}
							</Button>
						</View>
					)}
				</View>
			</View>
	);
};

const theme = THEME.LIGHT;

const s = StyleSheet.create({
	container: {
		backgroundColor: theme.ACTIVEBACKGROUND,
		borderColor: theme.BORDER,
		borderRadius: 20,
		borderWidth: 1,
		padding: 20,
		marginBottom: 10
	},
	header: {
		flex: 1,
		alignItems: 'stretch',
		flexDirection: 'row'
	},
	avatar: {
		maxWidth: 100
	},
	column: {
		padding: 10,
		marginTop: 16
	},
	columnHeader: {
		fontSize: 10
	},
	columnContent: {
		fontSize: 14,
		fontWeight: '800'
	},
	columnMeta: {
		fontSize: 10,
		fontWeight: '800'
	},
	name: {
		padding: 20,
		paddingBottom: 6
	},
	nameText: {
		fontSize: 20,
		paddingBottom: 8
	},
	services: {

	},
	distance: {

	},
	distanceText: {
	},
	actionbuttons: {
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	
});

export default Vcard;
