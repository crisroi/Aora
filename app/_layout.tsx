import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    PoppinsRegular: require('../assets/fonts/poppins/Poppins-Regular.ttf'),
    PoppinsBold: require('../assets/fonts/poppins/Poppins-Bold.ttf'),
    PoppinsSemiBold: require('../assets/fonts/poppins/Poppins-SemiBold.ttf'),
    PoppinsMedium: require('../assets/fonts/poppins/Poppins-Medium.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(home)" options={{headerShown: false}} />
        {/* <Stack.Screen name="+not-found" /> */}
      </Stack>
      
  );
}
