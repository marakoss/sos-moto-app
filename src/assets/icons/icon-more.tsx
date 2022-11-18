import React from 'react';
import Svg, { Rect } from 'react-native-svg';
import { ISvgIcon } from 'types/svg';

const IconMore: ISvgIcon = ({
	fillColor,
	width,
	height
}): JSX.Element => {
	return (
		<Svg
			width={Number(width) || 20}
			height={Number(height) || 20}
			viewBox="0 0 100 100"
			>
			<Rect
				fill={fillColor || '#000'}
				width={20}
				height={20}
				x={40}
				y={0}
			/>
			<Rect
				fill={fillColor || '#000'}
				width={20}
				height={20}
				x={40}
				y={40}
			/>
			<Rect
				fill={fillColor || '#000'}
				width={20}
				height={20}
				x={40}
				y={80}
			/>
		</Svg>
	);
};

export default IconMore;
