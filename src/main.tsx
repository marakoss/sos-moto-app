import React, { FC } from 'react';

import { ComposedContextProvider } from './Store';
import { Navigation } from './Navigation';
import './Localization';

const Main: FC = () => {
	return (
		<>
			<ComposedContextProvider>
				<Navigation />
			</ComposedContextProvider>
		</>
	);
};

export default Main;
