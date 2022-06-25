import React, { FC } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image
} from 'react-native';
import { AVATAR_BASE } from '@env';
import { COLORS } from '@dictionaries/index';

interface IAvatar {
	uuid: string;
	name?: string;
	size?: number;
}

const getAvatarResource = (uuid: string): string => {
	//return `${AVATAR_BASE}${uuid}`;
	return '';
};

const borderSize = 3;

const Tab: FC<IAvatar> = ({
	uuid,
	name,
	size
}): React.ReactElement => {

	const asize = size || 80;

	return (
		<View style={[s.container, , { width: asize, height: asize }]}>
			<View style={s.mask}>
				<View style={s.placeholder}>
					<Text style={s.letter}>{name?.substring(0, 1)}</Text>
				</View>
				<View style={s.image}>
					<Image source={{
							width: asize - (borderSize * 2),
							height: asize - (borderSize * 2),
							uri: getAvatarResource(uuid)
					}} />
				</View>
				</View>
		</View>
	);
};

const s = StyleSheet.create({
	container: {
		borderColor: COLORS.BLACK,
		borderWidth: borderSize,
		borderRadius: 1000
	},
	mask: {
		backgroundColor: COLORS.LIGHTTEXT,
		borderRadius: 1000,
		overflow: 'hidden',
		position: 'relative'
	},
	placeholder: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1
	},
	letter: {
		fontSize: 40,
		color: COLORS.WHITE
	},
	image: {
		position: 'relative',
		zIndex: 2
	},
});

export default Tab;
