export interface ICard {
	index?: number;
	id: string;
	name?: string;
	surname?: string;
	phone?: string;
	lat: number;
	lon: number;
	services?: number[];
	distance?: number;
	note?: string;
	language?: string;
	rating?: number;
}
