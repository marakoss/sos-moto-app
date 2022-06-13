/* eslint-disable @typescript-eslint/naming-convention */

type Color = string;

export enum COLORS {
	TRANSPARENT = 'transparent',
	WHITE = '#FFFFFF',
	BLACK = '#000000',
	PRIMARY = '#EC2B3C',
	DARKTEXT = '#777777',
	DARKERTEXT = '#555555',
	LIGHTTEXT = '#AAAAAA',
	LIGHTBORDER = '#EEEEEE',
	RED = '#EC2B3C',
	GREEN = '#74CF4D',
	BLUE = '#4990E2',
	YELLOW = '#FFDB00',
	ORANGE = '#FF8000',
	DARKERRED = '#d00',
	BACKGROUNDGRADIENT1 = '#7828e4',
	BACKGROUNDGRADIENT2 = '#2F84CB',
	LIGHTPRIMARY = '#FFAAAA',
	LIGHTINFO = '#aaccFF'
}

export const colorList: Color[] = [
	COLORS.RED,
	COLORS.GREEN,
	COLORS.BLUE,
	COLORS.ORANGE,
	COLORS.YELLOW,
	// error state?
	COLORS.RED,
	COLORS.GREEN,
	COLORS.BLUE,
	COLORS.ORANGE,
	COLORS.YELLOW
];
