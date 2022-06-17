import React, { FC, useReducer } from 'react';

// import { useKeepAwake } from 'expo-keep-awake';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Homepage, Filter, Menu, Register, About } from '@screens/index';
import { SCREENS } from '@dictionaries/screens';

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
							initialRouteName={SCREENS.HOME}
							screenOptions={{
								headerShown: false,
								drawerStyle: {
									width: 200
								},
								drawerType: 'back',
								overlayColor: 'transparent'
							}}
							drawerContent={CustomDrawerContent}
							screenListeners={({ navigation, route }) => ({
								state: e => {
									// console.log('Navigation state changed', e);
								}
							})}
						>
							<Drawer.Screen
								name={SCREENS.HOME}
								component={Homepage}
							/>
							<Drawer.Screen
								name={SCREENS.FILTER}
								component={Filter}
							/>
							<Drawer.Screen
								name={SCREENS.MENU}
								component={Menu}
							/>
							<Drawer.Screen
								name={SCREENS.REGISTER}
								component={Register}
							/>
							<Drawer.Screen
								name={SCREENS.ABOUT}
								component={About}
							/>
						</Drawer.Navigator>
					</NavigationContainer>
				</FiltersContext.Provider>
			</LocationContext.Provider>
		</MobileContext.Provider>
	);
};

export default App;
