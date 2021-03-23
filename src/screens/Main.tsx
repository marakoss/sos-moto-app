import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Pressable, Text, Linking } from 'react-native';

import globalStyle from '@components/Platform/globalStyle';

import { LinearGradient } from 'expo-linear-gradient';
import { StackScreenProps } from '@react-navigation/stack';

import i18n from 'i18n-js';

import { UserList, Background, Headline, Radar, RadarAnimation, ButtonFilter, Share, Mobile } from '@components/index';
import { IconMenu, IconFilters } from '@icons/index';
import { COLORS } from '@dictionaries/colors';

import * as Location from 'expo-location';
import { PermissionStatus } from 'expo-location';

import * as Network from 'expo-network';

import { Card } from 'types/card';
import { API_BASE } from "@env";

import { filters } from '../store/filters';

const location_initial = {
  coords: {
    latitude: 0,
    longitude: 0
  }
};

const Main: FC<StackScreenProps<any>> = ({navigation}) => {

  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const [location, setLocation] = useState(location_initial);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [network, setNetwork] = useState({});
  const [isConnected, setIsConnected] = useState(false);
  const [people, setPeople] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastCheckTime, setLastCheckTime] = useState(0);

  useEffect(() => {
      (async () => {
        try {
          let { status } = await Location.requestPermissionsAsync();
          if (status !== PermissionStatus.GRANTED) {
              setStatus(status);
              setIsError(true);
          }else{
              setIsError(false);
          }
          //console.log('status change', status);
        } catch {
          setIsError(true);
        }
      })();

  }, [status]);

  useEffect(() => {
    if (isError) return;

    (async() => {
      try {
        let location = await Location.getLastKnownPositionAsync({requiredAccuracy: 100});
        if (location != null){
          setLocation(location);
          setLatitude(location.coords.latitude);
          setLongitude(location.coords.longitude);

          //console.log(location, 'last known was called at', new Date().getTime());
        }
      } catch {
          // do nothing
      }
    })();
  },[isError]);

  useEffect(() => {
    if (isError) return;
    (async() => {
      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);

        //console.log(location, 'current was called at', new Date().getTime());
      } catch {
        setLocation(location_initial);
      }
    })();
  }, [isError]); //[location]);

  useEffect(() => {
    ( async () => {
      try {
        let response = await Network.getNetworkStateAsync();
        //console.log('connected', response.isConnected);
        setNetwork(response);
        setIsConnected(response.isConnected ? response.isConnected : false);
      } catch {
        setIsConnected(false);
      }
      
    })();
    
  }, []); 
  //[network]);


  const fetchData = (
    lat: number, lon: number
  ) => {
    let data = fetchJson(lat, lon);
    data.then((people) => {
      if (typeof people === 'object') {
        setPeople(people);
      }
    });
  }

  const fetchJson = async (
    lat: number, lon: number
  ): Promise<Array<Card> | boolean> => {
    setLoading(true);

    if (lat === 0 || lon == 0) {
      console.log('still zero');
      setLoading(false);
      return false;
    }

    try {
      const response = await fetch(API_BASE + '/v1/users/?lat=' + lat + '&lon=' + lon + '&services=' + filters.getActive(filters.items).join(','));
      const json = await response.json();
      setLoading(false);
      setLastCheckTime(new Date().getTime());
      return json;
    } catch (error) {
      setLoading(false);
      console.error('error: ', error);
      return false;
    }
  };

  const loadData = () => {
    // TODO: redo as if last position is different by 1 km.
    console.log('Started loading', latitude, longitude);
      const timeLimit = (1000 * 3); // thirty seconds
      if ((lastCheckTime + timeLimit) <= new Date().getTime()) {
        
        fetchData(latitude, longitude);
 
      } else {
          console.warn('Too many requests in a time period');
      }
  }

  useEffect(() => {
    //console.log('how many times?', latitude, longitude);
    if (!isError)
      loadData();
  }, [isError, filters.items]); //[location.coords.latitude, location.coords.longitude]);



  return (
    <View style={s.container}>
      {<Mobile />}
      <LinearGradient
        colors={[ COLORS.BACKGROUNDGRADIENT1, COLORS.BACKGROUNDGRADIENT2 ]}
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
            {<RadarAnimation />}

            {!isError && (
              <Share lat={latitude} lon={longitude} />
            )}

            {!isError && (
              <Radar
                people={people}
                lat={latitude}
                lon={longitude}
              />
            )}
            
          </View>
          <ButtonFilter
            wrapperStyle={s.filter}
            onPress={() => navigation.navigate('Filter')}
            icon={<IconFilters fillColor={COLORS.WHITE} />}
            />
          <Background>
            {isConnected && (
              <UserList
                people={people}
                loading={loading}
                onRefresh={() => loadData()}
              />
            )}
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
    paddingRight: 20,
    marginTop: 2, // TODO: can we get rid of this?
    backgroundColor: 'rgba(0, 0, 0, 0.0001)',
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

});

export default Main;