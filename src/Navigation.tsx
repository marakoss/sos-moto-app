import React, { PropsWithChildren, FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Menu, About } from '@screens/index';
import { SCREENS } from '@dictionaries/screens';

const Drawer = createDrawerNavigator();

export const Navigation: FC<PropsWithChildren> = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName={SCREENS.ABOUT.toString()}
				screenOptions={{
					headerShown: false,
					drawerStyle: {
						width: 200
					},
					drawerType: 'back',
					overlayColor: 'transparent'
				}}
				//drawerContent={CustomDrawerContent}
				screenListeners={({ navigation, route }) => ({
					state: e => {
						// console.log('Navigation state changed', e);
					}
				})}
			>
				<Drawer.Screen
					name={SCREENS.MENU.toString()}
					component={Menu}
				/>
				<Drawer.Screen
					name={SCREENS.ABOUT.toString()}
					component={About}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
};
