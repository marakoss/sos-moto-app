import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mySvgIcon } from 'types/svg';

const IconPerson: mySvgIcon = ({ width, height, fillColor }): JSX.Element => {
	return (
		<Svg
			width={Number(width) || 20}
			height={Number(height) || 20}
			viewBox="0 0 27 27"
			fill={fillColor || '#000000'}
		>
			<Path d="M17.855,21.223c0-1.902,1.049-3.55,2.588-4.44c-0.963-0.308-2-0.552-3.09-0.722c2.342-1.299,3.929-3.794,3.929-6.663 c0-4.207-3.41-7.617-7.617-7.617s-7.617,3.41-7.617,7.617c0,2.868,1.587,5.364,3.929,6.663C4.223,16.958,0,19.897,0,23.389h18.35 C18.041,22.727,17.855,22,17.855,21.223z" />
			<Path d="M23.004,17.206c-2.218,0-4.018,1.797-4.018,4.018c0,2.219,1.8,4.017,4.018,4.017c2.219,0,4.018-1.798,4.018-4.017 C27.02,19.002,25.223,17.206,23.004,17.206z M25.627,21.936h-1.909v1.91h-1.427v-1.91h-1.91v-1.429h1.91v-1.911h1.427v1.911h1.909 V21.936z" />
		</Svg>
	);
};

export default IconPerson;
