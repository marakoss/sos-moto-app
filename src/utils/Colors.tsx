import { ColorValue } from 'react-native';

export const hexToRgbA = (
	hex: ColorValue | string,
	alpha: number = 0.5
): string => {
	const stringHex = hex.toString();

	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(stringHex) === false) {
		throw new Error('Bad Hex value for color');
	}

	const chars = stringHex.substring(1).split('');
	const colorHex =
		chars.length === 3
			? Number(
					`0x${[
						chars[0],
						chars[0],
						chars[1],
						chars[1],
						chars[2],
						chars[2]
					].join('')}`
			  )
			: Number(`0x${chars.join('')}`);

	return `rgba(${[
		(colorHex >> 16) & 255,
		(colorHex >> 8) & 255,
		colorHex & 255
	].join(',')},${alpha})`;
};
