type iJSONResponse = {
	data?: Array<object>;
	errors?: Array<{ message: string }>;
};

export const getJson = async (url: string): Promise<Array<object>> => {
	const response = await fetch(url);
	const { data, errors }: iJSONResponse = await response.json();

	if (response.ok) {
		if (data) {
			return data;
		}
		return Promise.reject(
			new Error(`No data was returned for query ${url}`)
		);
	}
	const error = new Error(
		errors?.map(e => e.message).join('\n') ?? 'unknown'
	);
	return Promise.reject(error);
};
