import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutScreen from './views/AboutScreen';
import HomeScreen from './views/HomeScreen';
import CareersScreen from './views/CareersScreen';
import ContactScreen from './views/ContactScreen';
import TrailScreen from './views/TrailScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Careers" component={CareersScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="Trail" component={TrailScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
