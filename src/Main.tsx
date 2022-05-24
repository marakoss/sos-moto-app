import React, { FC, useEffect, useReducer } from 'react';

import { activateKeepAwake } from 'expo-keep-awake';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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

const Stack = createStackNavigator();

const App: FC = () => {
	// TODO: Rework as HOC?
	const [filterState, dispatchFilter] = useReducer(filtersReducer, filters);
	const [mobileState, dispatchMobile] = useReducer(mobileReducer, mobile);
	const [locationState, dispatchLocation] = useReducer(
		locationReducer,
		location
	);

	useEffect(() => {
		if (__DEV__) {
			activateKeepAwake();
		}
	}, []);

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
						{/* @ts-expect-error Wrong typing in React */}
						<Stack.Navigator
							initialRouteName="Home"
							screenOptions={{
								headerShown: false
							}}
						>
							<Stack.Screen name="Home" component={Main} />
							<Stack.Screen name="Filter" component={Filter} />
							<Stack.Screen name="Menu" component={Menu} />
							<Stack.Screen
								name="Register"
								component={Register}
							/>
							<Stack.Screen name="About" component={About} />
						</Stack.Navigator>
					</NavigationContainer>
				</FiltersContext.Provider>
			</LocationContext.Provider>
		</MobileContext.Provider>
	);
};

export default App;
