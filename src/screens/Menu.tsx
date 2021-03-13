import React, { FC, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import i18n from 'i18n-js';
import { Headline, Button  } from '@components/index';
import { IconNavigate  } from '@icons/index';
import globalStyle from '@components/platform/globalStyle';


const Menu: FC<StackScreenProps<any>> = ({ navigation }) => {

    return (
        <View style={s.container}>
            <SafeAreaView style={s.safeArea}>
                <View style={s.header}>
                    <Headline headline={i18n.t('Navigate')} textColor={{color: '#000'}} />
                </View>

                <View style={s.content}>
                  
                  <Button onPress={() => navigation.navigate('Home')} icon={<IconNavigate/>} >
                    { i18n.t('back to') } {''} 
                    { i18n.t('Radar') }
                  </Button>

                  <Button onPress={() => navigation.navigate('Home')} >
                    { i18n.t('Register') }
                  </Button>

                  <Button onPress={() => navigation.navigate('Home')} >
                    { i18n.t('About') }
                  </Button>

                </View>
            </SafeAreaView>
        </View>
    );
}


const s = StyleSheet.create({
    header: {
        paddingBottom: 20
    },
    content: {
      paddingHorizontal: 20,
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    safeArea: {
      ...globalStyle.droidSafeArea
    },
});

export default Menu;