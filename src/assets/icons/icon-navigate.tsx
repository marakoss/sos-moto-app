import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgIcon } from 'types/svg';

const IconNavigate: ISvgIcon = ({ width, height, fillColor }): JSX.Element => {
	return (
		<Svg
			width={Number(width) || 20}
			height={Number(height) || 20}
			viewBox="0 0 512 512"
			fill={String(fillColor || '#000000')}
		>
			<Path d="M505.743,6.249c-6.08-6.101-15.211-7.893-23.168-4.672l-469.333,192c-8.768,3.605-14.123,12.544-13.12,21.973 c0.981,9.429,8.064,17.067,17.387,18.773l220.139,40.021l40.043,220.139c1.685,9.323,9.323,16.405,18.752,17.408 c0.747,0.064,1.493,0.107,2.219,0.107c8.576,0,16.448-5.184,19.755-13.269l192-469.333 C513.658,21.459,511.823,12.329,505.743,6.249z" />
		</Svg>
	);
};

export default IconNavigate;
