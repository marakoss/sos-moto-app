import React, { FC, useReducer } from 'react';

import { useKeepAwake } from 'expo-keep-awake';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Main, Filter, Menu, Register, About } from '@screens/index';

import {
	FiltersContext,
	filtersReducer,
	filters,
	MobileContext,
	mobileReducer,
	mobile,
	LocationContext,
	locationReducer,
	location
} from '@store/index';

import { CustomDrawerContent } from '@components/index';

import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import { cs, en, de, sk, pl } from '@translations/index';

if (__DEV__) {
	console.log('Language was set to: ', Localization.locale);
}

i18n.translations = {
	en: en,
	cs: cs,
	sk: sk,
	de: de,
	pl: pl
};
i18n.locale = Localization.locale;
i18n.defaultLocale = 'en';
i18n.fallbacks = true;

const Drawer = createDrawerNavigator();

const App: FC = () => {
	// TODO: Rework as HOC?
	const [filterState, dispatchFilter] = useReducer(filtersReducer, filters);
	const [mobileState, dispatchMobile] = useReducer(mobileReducer, mobile);
	const [locationState, dispatchLocation] = useReducer(
		locationReducer,
		location
	);

	if (__DEV__) {
	//	useKeepAwake();
	}

	return (
		<MobileContext.Provider
			value={{ ...mobileState, dispatch: dispatchMobile }}
		>
			<LocationContext.Provider
				value={{ ...locationState, dispatch: dispatchLocation }}
			>
				<FiltersContext.Provider
					value={{ ...filterState, dispatch: dispatchFilter }}
				>
					<NavigationContainer>
						<Drawer.Navigator
							initialRouteName="Home"
							screenOptions={{
								headerShown: false
							}}
							drawerContent={CustomDrawerContent}	
						>
							<Drawer.Screen name="Home" component={Main} />
							<Drawer.Screen name="Filter" component={Filter} />
							<Drawer.Screen name="Menu" component={Menu} />
							<Drawer.Screen
								name="Register"
								component={Register}
							/>
							<Drawer.Screen name="About" component={About} />
						</Drawer.Navigator>
					</NavigationContainer>
				</FiltersContext.Provider>
			</LocationContext.Provider>
		</MobileContext.Provider>
	);
};

export default App;
