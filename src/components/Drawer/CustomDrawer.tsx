import React, { FC } from 'react';
import { View } from 'react-native';
import {
	DrawerContentScrollView,
	DrawerItemList
} from '@react-navigation/drawer';
const CustomDrawerContent: FC<any> = (props: any) => {
	return (
		<DrawerContentScrollView {...props} style={{ paddingTop: 40 }}>
			<View style={{ flex: 1, minHeight: '100%' }}>
				<DrawerItemList {...props} />
			</View>
		</DrawerContentScrollView>
	);
};

export default CustomDrawerContent;
