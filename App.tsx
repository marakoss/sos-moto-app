import 'react-native-gesture-handler'; // Must be at top for some reason

import React, { useEffect } from 'react';

import { activateKeepAwake } from 'expo-keep-awake';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Main, Filter, Menu } from '@screens/index';

import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import { cs, en } from '@translations/index';

i18n.translations = {
    en: cs, // TODO: Translate to english
    cs: cs,
};
i18n.locale = Localization.locale;
i18n.fallbacks = true;

const Stack = createStackNavigator();

export default function App() {
    useEffect(() => {
        if (__DEV__) {
            activateKeepAwake();
        }
    },[]);

    return (
        <NavigationContainer>
            <Stack.Navigator  initialRouteName="Home" headerMode="none">
                <Stack.Screen name="Home" component={Main} />
                <Stack.Screen name="Filter" component={Filter} />
                <Stack.Screen name="Menu" component={Menu} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
