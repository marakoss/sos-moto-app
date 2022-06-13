import React from 'react';
import Svg, { Polygon } from 'react-native-svg';
import { IMySvgIcon } from 'types/svg';

const IconArrow: IMySvgIcon = ({
	fillColor,
	fillColor2,
	width,
	height
}): JSX.Element => {
	return (
		<Svg
			width={Number(width) || 50}
			height={Number(height) || 50}
			viewBox="0 0 50 50"
		>
			<Polygon
				fill={fillColor || '#000000'}
				points="25,35 45,49 25,0 5,49 "
			/>
			<Polygon
				fill={fillColor2 || '#ff0000'}
				points="25,35 45,49 25,0 "
			/>
		</Svg>
	);
};

export default IconArrow;
