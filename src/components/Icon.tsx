import { StyleProp, ViewStyle } from 'react-native';

import { RbkColor, useTheme } from '@react-bulk/core';

export type IconProps = {
  color?: RbkColor;
  mirrored?: boolean;
  name: keyof typeof icons;
  size?: number | string;
  style?: StyleProp<ViewStyle>;
  weight?: 'bold' | 'duotone' | 'fill' | 'light' | 'regular' | 'thin';
};

/**
 * https://phosphoricons.com/
 */
export default function Icon({ name, color, mirrored, size, style, weight }: IconProps) {
  const theme = useTheme();

  size = typeof size === 'string' ? theme.rem(Number(size.replace(/\D/g, ''))) : size;

  const Component = icons[name];

  return (
    <Component
      color={theme.color(color ?? 'primary')}
      mirrored={mirrored}
      size={size ?? theme.rem()}
      style={style}
      weight={weight ?? 'bold'}
    />
  );
}

/* eslint-disable */
const icons = {
  User: require('phosphor-react-native/src/icons/User').default,
  House: require('phosphor-react-native/src/icons/House').default,
  Eye: require('phosphor-react-native/src/icons/Eye').default,
  EyeSlash: require('phosphor-react-native/src/icons/EyeSlash').default,
  Info: require('phosphor-react-native/src/icons/Info').default,
  CreditCard: require('phosphor-react-native/src/icons/CreditCard').default,
  CookingPot: require('phosphor-react-native/src/icons/CookingPot').default,
  Heartbeat: require('phosphor-react-native/src/icons/Heartbeat').default,
  Bicycle: require('phosphor-react-native/src/icons/Bicycle').default,
  File: require('phosphor-react-native/src/icons/File').default,
  ArrowsClockwise: require('phosphor-react-native/src/icons/ArrowsClockwise').default,
  Bag: require('phosphor-react-native/src/icons/Bag').default,
  Hamburger: require('phosphor-react-native/src/icons/Hamburger').default,
  CaretUp: require('phosphor-react-native/src/icons/CaretUp').default,
  CaretDown: require('phosphor-react-native/src/icons/CaretDown').default,
  Square: require('phosphor-react-native/src/icons/Square').default,
  CaretRight: require('phosphor-react-native/src/icons/CaretRight').default,
};
