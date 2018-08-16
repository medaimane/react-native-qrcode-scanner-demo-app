import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';

import Home from './Home';
import Main from './Main';


const RootStack = createStackNavigator(
  {
    Home,
    Main,
  },
  {
    initialRouteName: 'Home',
  }
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <RootStack />;
  }
}
