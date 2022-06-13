export interface ICard {
	id?: string;
	name?: string;
	surname?: string;
	phone?: string;
	lat: number;
	lon: number;
	services?: Array<number>;
	distance?: number;
	index?: number;
	note?: string;
}
