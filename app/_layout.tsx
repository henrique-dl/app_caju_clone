import ReactBulk, { Box } from '@react-bulk/native';
import { Slot } from 'expo-router';

import theme from '@/src/themes/main';

export default function App() {
  return (
    <ReactBulk theme={theme}>
      <Box flex bg="background.secondary">
        <Slot />
      </Box>
    </ReactBulk>
  );
}
