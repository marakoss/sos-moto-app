import React, { FC } from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import ButtonMenu from '../Button/ButtonMenu';

const CustomDrawerContent: FC<any> = (props: any) => {
	return (
	  <DrawerContentScrollView {...props} style={{overflow: 'visible'}}>
		<View style={{position: 'relative', width: 500}}>
			<ButtonMenu onPress={() => props.navigation.toggleDrawer()} />
		</View>
		<DrawerItemList {...props} />
	  </DrawerContentScrollView>
	);
  }

  export default CustomDrawerContent;
