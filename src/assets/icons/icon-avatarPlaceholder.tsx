import React from 'react';
import Svg, { Rect } from 'react-native-svg';
import { ISvgIcon } from 'types/svg';

const IconAvatarPlaceholder: ISvgIcon = ({
	fillColor,
	fillColor2,
	fillColor3,
	width,
	height
}): JSX.Element => {
	return (
		<Svg
			width={Number(width) || 100}
			height={Number(height) || 100}
			viewBox="0 0 100 100"
		>
			<Rect
				fill={fillColor || '#F46F43'}
				width={50}
				height={50}
				x={0}
				y={0}
			/>
			<Rect
				fill={fillColor2 || '#F68B65'}
				width={50}
				height={50}
				x={0}
				y={50}
			/>
			<Rect
				fill={fillColor3 || '#F35021'}
				width={50}
				height={100}
				x={50}
				y={0}
			/>
		</Svg>
	);
};

export default IconAvatarPlaceholder;
