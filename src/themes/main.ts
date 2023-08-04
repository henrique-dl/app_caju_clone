import { ThemeEditProps } from '@react-bulk/core';

const theme: ThemeEditProps = {
  colors: {
    primary: {
      main: '#e80537',
    },
    secondary: '#FFBC6DFF',
    lightPurple: '#DDA5FFFF',
    lighter: '#E090DF',
    lightOrange: '#FF946DFF',
    grey: '#F1F0F0FF',
    blue: '#0000FF',
    lightYellow: '#FFDC83FF',
    lightGreen: '#92FF90FF',
    black: '#000000',
  },

  components: {
    Button: {
      defaultProps: {
        color: 'secondary',
      },
    },
  },
};

export default theme;
