import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Pressable, Text, Linking, Share} from 'react-native';

import globalStyle from '@components/platform/globalStyle';

import { LinearGradient } from 'expo-linear-gradient';
import { StackScreenProps } from '@react-navigation/stack';

import i18n from 'i18n-js';

import { UserList, Background, Headline, Radar, RadarAnimation, ButtonFilter, ButtonInversed } from '@components/index';
import { IconMenu, IconFilters, IconShare } from '@icons/index';
import { COLORS } from '@dictionaries/colors';
import { toDecimalPlaces } from '@utils/Math';

import * as Location from 'expo-location';
import { LocationHeadingObject, PermissionStatus } from 'expo-location';

import { Card } from 'types/card';
import { API_BASE } from "@env";

import { filters } from '../store/filters';

const encodeDataToURL = (data: object) => {
  return Object
    .keys(data)
    .map(value => `${value}=${encodeURIComponent(data[value])}`)
    .join('&');
};

const Main: FC<StackScreenProps<any>> = ({navigation}) => {

  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const [location, setLocation] = useState({coords: {latitude:0, longitude:0}});
  const [people, setPeople] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastCheckTime, setLastCheckTime] = useState(0);

  useEffect(() => {
      (async () => {
          let { status } = await Location.requestPermissionsAsync();
          if (status !== PermissionStatus.GRANTED) {
              setStatus(status);
              setIsError(true);
              return;
          }else{
              setIsError(false);
          }

          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);

          console.log('status change', status);

      })();
  }, [status]);




  const fetchData = async (
      lat: number, lon: number
  ): Promise<Array<Card>> => {
      setLoading(true);
      //return await fetch(API_BASE + '/people')
      if (lat === 0 || lon == 0){
          return Promise.reject('Location is not updated');
      }

      console.log(encodeURIComponent(filters.items), filters.items);

      return await fetch(API_BASE + '/?lat=' + lat + '&lon=' + lon + '&services=' + encodeURIComponent(filters.items))
          .then((response) => response.json())
          .then((json) => {
              //console.log(json);
              setLoading(false);
              setPeople(json);
              setLastCheckTime(new Date().getTime());
              return json;
          })
          .catch((error) => {
              setLoading(false);
              console.error(error);
          }); 
  };

  const loadData = (lat: number, lon: number) => {
      const timeLimit = (1000 * 30); // thirty seconds
      if ((lastCheckTime + timeLimit) <= new Date().getTime()) {
          fetchData(lat, lon);
      } else {
          console.warn('Too many requests in a time period');
      }
  } 

  useEffect(() => {
      console.log('how many times?');
      loadData(location.coords.latitude, location.coords.longitude);
  }, [location.coords.latitude, location.coords.longitude]);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Mám potíže na cestě. Moje poloha je: '+ toDecimalPlaces(location.coords.latitude, 5) +', '+ toDecimalPlaces(location.coords.longitude, 5),
      });
    } catch (error) {
      //alert(error.message);
    }
  };

  return (
    <View style={s.container}>
      <LinearGradient
        colors={['#7E09D4', '#2F84CB']}
        style={s.gradient}
      >
        <SafeAreaView style={s.safeArea}>
          <View style={s.header}>
            <View>

              <Headline headline={
                 isError ?  i18n.t('Location services inactive') : i18n.t('Help in area')
              } />
            </View>
            <View>
              <Pressable onPress={() => navigation.navigate('Menu')}>
                <View style={s.menu}>
                  <IconMenu fillColor={COLORS.WHITE} />
                </View>
              </Pressable>
            </View>
          </View>
          <View style={s.radar}>
          {isError && (
            <View style={s.errorContainer}>
                <Pressable onPress={() => Linking.openURL('app-settings:')}>
                  <View style={s.error} >
                      <Text style={s.errorText}>
                          {i18n.t('Allow access to location services')}
                      </Text>
                  </View>
                </Pressable>
              </View>
              )
            }
            <RadarAnimation />
            {!isError && (
              <View style={s.share}>
                <ButtonInversed
                  onPress={onShare}
                  icon={<IconShare fillColor={COLORS.WHITE} />}
                >
                  <Text style={s.shareText}>
                    {toDecimalPlaces(location.coords.latitude, 5)}
                    {', '}
                    {toDecimalPlaces(location.coords.longitude, 5)}
                  </Text>
                </ButtonInversed>
              </View>
            )}
            {!isError && (
              <Radar
                people={people}
                lat={location.coords.latitude}
                lon={location.coords.longitude}
              />
            )}
            
          </View>
          <ButtonFilter
            wrapperStyle={s.filter}
            onPress={() => navigation.navigate('Filter')}
            icon={<IconFilters fillColor={COLORS.WHITE} />}
            />
          <Background>
            <UserList
              people={people}
              loading={loading}
              onRefresh={() => loadData(location.coords.latitude, location.coords.longitude)}
            />
          </Background>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.BLACK,
  },
  safeArea: {
    flex: 1,
    ...globalStyle.droidSafeArea
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  radar: {
    width: '100%',
    height: '40%',
  },
  gradient: {
    width: '100%',
    height: '100%'
  },
  baseButton: {
    width: 60,
    height: 60,
  },
  overlay: {
    position: 'absolute',
  },
  filter: {
    position: 'absolute',
    zIndex: 4,
    left: '70%',
    top: '45%',
  },
  menu: {
    marginRight: 20,
    marginTop: 2 // TODO: can we get rid of this?
  },
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '100%',
    zIndex: 50,
  },
  errorText: {
    color: COLORS.WHITE,
    fontSize: 18
  },
  error: {
      backgroundColor: COLORS.PRIMARY,
      paddingHorizontal: 20,
      paddingVertical: 5,
      borderRadius: 50,
  },
  share: {
    position: 'absolute',
    zIndex: 20,
    marginLeft: 20,
  },
  shareText: {
    fontSize: 10
  },
});

export default Main;