import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <StatusBar backgroundColor={'red'} barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}/>
      <Stack>
        <Stack.Screen name="index" options={{ headerShadowVisible: false, headerStyle: { backgroundColor: '#fff' }, headerTitle: '', headerShown: false}} />
        <Stack.Screen name="login" options={{ headerShadowVisible: false, headerStyle: { backgroundColor: '#fff' }, headerTitle: '', headerShown: false}} />
        <Stack.Screen name="signup" options={{ headerShadowVisible: false, headerStyle: { backgroundColor: '#fff' }, headerTitle: '', headerShown: false}} />
        <Stack.Screen name="otp" options={{ headerShadowVisible: false, headerStyle: { backgroundColor: '#fff' }, headerTitle: '', headerShown: false}} />
        <Stack.Screen name="forgotPassword" options={{ headerShadowVisible: false, headerStyle: { backgroundColor: '#fff' }, headerTitle: '', headerShown: false}} />
        <Stack.Screen name="resetPassword" options={{ headerShadowVisible: false, headerStyle: { backgroundColor: '#fff' }, headerTitle: '', headerShown: false}} />
        <Stack.Screen name="dashboard" options={{ headerShadowVisible: false, headerStyle: { backgroundColor: '#fff' }, headerTitle: '', headerShown: false}} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
    </GestureHandlerRootView>
  );
}
