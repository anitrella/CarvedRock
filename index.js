/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import HomeScreen from './views/HomeScreen';
import About from './views/AboutScreen';

AppRegistry.registerComponent(appName, () => App);

Navigation.registerComponent(
  'Home',
  () => gestureHandlerRootHOC(HomeScreen),
  () => HomeScreen,
);

Navigation.registerComponent(
  'About',
  () => gestureHandlerRootHOC(About),
  () => About,
);

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
  },
  statusBar: {
    backgroundColor: '#000000',
    style: 'light',
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'carved',
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});
