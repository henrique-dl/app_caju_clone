import { useTheme } from '@react-bulk/core';

export default function useScreenOptions() {
  const theme = useTheme();

  return {
    headerShown: true,
    headerStyle: {
      backgroundColor: theme.color('primary'),
    },
    headerTintColor: theme.color('white'),
    tabBarActiveTintColor: theme.color('primary'),
  };
}
