import { ColorValue } from 'react-native';

export enum COLORS {
	TRANSPARENT = 'transparent',
	WHITE = '#FFFFFF',
	BLACK = '#000000',
	PRIMARY = '#6E4DFF',
	SECONDARY = '#7D44F2',
	DARKTEXT = '#777777',
	DARKERTEXT = '#555555',
	DARKBORDER = '#999999',
	LIGHTTEXT = '#AAAAAA',
	LIGHTBORDER = '#EEEEEE',
	RED = '#EC2B3C',
	GREEN = '#74CF4D',
	BLUE = '#4990E2',
	YELLOW = '#FFDB00',
	ORANGE = '#FF8000',
	DARKERRED = '#DD0000',
	BACKGROUNDGRADIENT1 = '#7828e4',
	BACKGROUNDGRADIENT2 = '#2F84CB',
	LIGHTPRIMARY = '#FFAAAA',
	LIGHTINFO = '#aaccFF'
}

export const colorList: ColorValue[] = [
	COLORS.RED,
	COLORS.GREEN,
	COLORS.BLUE,
	COLORS.ORANGE,
	COLORS.YELLOW
];

export function* getColor() {
	const colorsUsed: ColorValue[] = [];

	while (true) {
		const nextColor = colorList[colorsUsed.length % 5];
		colorsUsed.push(nextColor);
		yield nextColor;
	}
}
