/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

// import Login from '../../components/auths/Login.js';
// import Home from '../../components/home/Home.js';
import Main from './Main/Main.js';
import Authentication from './Authentications/Authentication.js';
import OrderHistory from './OrderHistory/OrderHistory.js';
import ChangeInfor from './ChangeInfor/ChangeInfor.js';

const Navigation = StackNavigator({
  // Login:{screen:Login},
  ChangeInfor:{screen:ChangeInfor},
  Main:{screen:Main},
  OrderHistory:{screen:OrderHistory},
  Authentication:{screen:Authentication},
  },{
    initialRouteName: 'Main',
    headerMode: 'screen'
  }
);
export default Navigation;
