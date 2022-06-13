type IJSONResponse = {
	data?: object[];
	errors?: { message: string }[];
};

export const getJson = async (url: string): Promise<object[]> => {
	const response = await fetch(url);
	const { data, errors }: IJSONResponse = await response.json();

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
