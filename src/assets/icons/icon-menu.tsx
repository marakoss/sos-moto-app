import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';
import { ISvgIcon } from 'types/svg';

const IconMenu: ISvgIcon = ({ width, height, fillColor }): JSX.Element => {
	return (
		<Svg
			width={Number(width) || 20}
			height={Number(height) || 20}
			viewBox="0 0 100 100"
			fill={String(fillColor || '#000000')}
		>
			<Rect width={100} height={5} x={0} y={38} />
			<Rect width={60} height={5} x={0} y={62} />
		</Svg>
	);
};

export default IconMenu;
