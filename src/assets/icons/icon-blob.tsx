import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IMySvgIcon } from 'types/svg';

const IconBlob: IMySvgIcon = ({ width, height, fillColor }): JSX.Element => {
	return (
		<Svg
			width={Number(width) || 80}
			height={Number(height) || 80}
			viewBox="0 0 120 120"
			fill={String(fillColor || '#000000')}
		>
			<Path d="M 108.833 7.593 C 98.709 -2.531 17.717 -2.531 7.593 7.593 C -2.531 17.717 -2.531 98.709 7.593 108.833 C 17.717 118.957 98.709 118.957 108.833 108.833 C 118.957 98.709 118.957 17.717 108.833 7.593 Z" />
		</Svg>
	);
};

export default IconBlob;
