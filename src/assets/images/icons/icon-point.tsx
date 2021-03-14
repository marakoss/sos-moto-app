import * as React from "react";
import Svg, { Circle } from 'react-native-svg';
import { mySvgIcon } from 'types/svg';

const IconPoint: mySvgIcon = ({
  width,
  height,
  fillColor
}): JSX.Element => {
  return (
    <Svg
      width={Number(width) | 10}
      height={Number(height) | 10}
      viewBox="0 0 12 12"
    >
      <Circle cx="6" cy="6" r="6" fill={fillColor ? fillColor : 'red'} />
    </Svg>
  )
};

export default IconPoint;
