import React from 'react';
import { Share } from 'react-native';
import { toDecimalPlaces } from '@utils/Math';

export const onShare = async (lat: number, lon: number) => {
  try {
    const result = await Share.share({
      message: 'Mám potíže na cestě. Moje poloha je: '
      + toDecimalPlaces(lat, 5).toFixed(5)
      + ', '
      + toDecimalPlaces(lon, 5).toFixed(5),
    });
  } catch (error) {
    
  }
};