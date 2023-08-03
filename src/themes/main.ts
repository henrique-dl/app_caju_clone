import { ThemeEditProps } from '@react-bulk/core';

const theme: ThemeEditProps = {
  colors: {
    primary: {
      light: '#8800C7',
      lighter: '#E090DF',
      main: '#e80537',
    },
    secondary: '#ff7500',
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
