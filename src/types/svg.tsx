import { FC } from 'react';
import { ColorValue } from 'react-native';

interface ISvgIconConstituentValues {
	strokeColor?: ColorValue;
	strokeWidth?: string;
	strokeWidth2?: string;
	strokeWidth3?: string;
	strokeFill?: string;
	fillColor?: ColorValue;
	fillColor2?: ColorValue;
	fillColor3?: ColorValue;
	fillColor4?: ColorValue;
	fillColor5?: ColorValue;
	fillColor6?: ColorValue;
	fillColor7?: ColorValue;
	imageWidth?: string;
	imageHeight?: string;
	width?: string | number;
	height?: string | number;
	rotateCenter?: number;
	className?: string;
	className2?: string;
	className3?: string;
	className4?: string;
	className5?: string;
}

export default ISvgIconConstituentValues;

export interface ISvgIcon extends FC<ISvgIconConstituentValues> {}
