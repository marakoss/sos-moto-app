import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Magnetometer } from 'expo-sensors';
import * as Location from 'expo-location';

export default function App() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [location, setLocation] = useState({ magHeading: 33 });
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let remove = Location.watchHeadingAsync(_updateCords);

    })();
  }, []);

  const _updateCords = (location) => {
    setLocation(location);
  };

  const _fast = () => {
    Magnetometer.setUpdateInterval(100);
  };

  const _subscribe = () => {
      Magnetometer.addListener(result => {
        setData(result);
      })
  };
  _fast();
  _subscribe();

  const { x, y, z } = data;

  return (
    <View style={styles.container}>
      <Text>Splash screen{"\n"}
        x: {Math.round(x)} {"\n"}
        y: {Math.round(y)} {"\n"}
        z: {Math.round(z)} {"\n"}
        heading: {location.magHeading} {"\n"}
        { errorMsg }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
