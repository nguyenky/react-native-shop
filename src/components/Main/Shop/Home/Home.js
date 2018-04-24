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

import Home from './HomeView.js';
import ProductDetail from '../ProductDetail/ProductDetail.js';
import ListProduct from '../ListProduct/ListProduct.js';

const Navigation = StackNavigator({
  Home:{screen:Home},
  ProductDetail:{screen:ProductDetail},
  ListProduct:{screen:ListProduct},
  },{
    initialRouteName: 'Home',
    headerMode: 'screen'
  }
);
export default Navigation;
