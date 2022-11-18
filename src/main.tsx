import React, { FC } from 'react';
import { Text } from 'react-native';

import { ComposedContextProvider } from './Store';
import Localization from './Localization';

const Main: FC = () => {
	Localization();

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
