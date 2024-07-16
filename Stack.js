import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutScreen from './views/AboutScreen';
import HomeScreen from './views/HomeScreen';
import CareersScreen from './views/CareersScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Careers" component={CareersScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
