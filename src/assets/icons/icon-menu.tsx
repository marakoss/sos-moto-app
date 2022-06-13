import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';
import { ISvgIcon } from 'types/svg';

const IconMenu: ISvgIcon = ({ width, height, fillColor }): JSX.Element => {
	return (
		<Svg
			width={Number(width) || 34}
			height={Number(height) || 34}
			viewBox="0 0 512 512"
			fill={String(fillColor || '#000000')}
		>
			<Rect width={512} height={10} x={0} y={0} />
			<Rect width={300} height={10} x={0} y={120} />
		</Svg>
	);
};

export default IconMenu;
