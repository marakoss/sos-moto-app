import React, { FC } from 'react';
import { Text } from 'react-native';

import { ComposedContextProvider } from './Stores';
import Localization from './Localization';

Localization();

const Main: FC = () => {
	return (
		<>
			<ComposedContextProvider>
				<Text>
					Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem
					ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
					dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor
					sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
					ametLorem ipsum dolor sit ametLorem ipsum dolor sit
					ametLorem ipsum dolor sit ametLorem ipsum dolor sit
					ametLorem ipsum dolor sit ametLorem ipsum dolor sit
					ametLorem ipsum dolor sit ametLorem ipsum dolor sit
					ametLorem ipsum dolor sit ametLorem ipsum dolor sit
					ametLorem ipsum dolor sit ametLorem ipsum dolor sit
					ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
				</Text>
			</ComposedContextProvider>
		</>
	);
};

export default Main;
