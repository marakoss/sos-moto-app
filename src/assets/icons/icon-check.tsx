import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IMySvgIcon } from 'types/svg';

const IconCheck: IMySvgIcon = ({ width, height, fillColor }): JSX.Element => {
	return (
		<Svg
			width={Number(width) || 30}
			height={Number(height) || 30}
			viewBox="0 0 405 405"
			fill={String(fillColor || '#000000')}
		>
			<Path d="M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z" />
		</Svg>
	);
};

export default IconCheck;
