import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SplashScreen } from './screens/Splash';
import { HomeScreen } from './screens/Home';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
};
const Stack = createStackNavigator();

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
