import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/Home';
import ScannerScreen from '../screens/ScannerScreen';

const NavigatorStack = createStackNavigator(
  {
    HomeScreen,
    ScannerScreen,
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

const App = () => <NavigatorStack/>;

export default App;