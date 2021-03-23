export const hexToRgbA = (hex: string): string => {
	let c;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
		c = hex.substring(1).split('');
		if (c.length === 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = `0x${c.join('')}`;
		// @ts-ignore
		return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
			','
		)},0.5)`;
	}
	throw new Error('Bad Hex');
};
