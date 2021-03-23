import React from "react";
import Svg, { Polygon } from 'react-native-svg';
import { mySvgIcon } from 'types/svg';

const IconArrow: mySvgIcon = ({
  fillColor,
  fillColor2,
  width,
  height
}): JSX.Element => {

  const myWidth = width ? width : 50;
  const myHeight = height ? height : 50;

  return (
    <Svg
      width={myWidth}
      height={myHeight}
      viewBox="0 0 50 50"
    >
      <Polygon fill={fillColor ? fillColor : '#000000'} points="25,35 45,49 25,0 5,49 "/>
      <Polygon fill={fillColor2 ? fillColor2 : '#ff0000'} points="25,35 45,49 25,0 "/>
    </Svg>
  )
};

export default IconArrow;