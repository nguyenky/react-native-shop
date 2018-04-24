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

import Cart from './CartView.js';
import ProductDetail from '../ProductDetail/ProductDetail.js';
import ListProduct from '../ListProduct/ListProduct.js';

const Navigation = StackNavigator({
  Cart:{screen:Cart},
  ProductDetail:{screen:ProductDetail},
  ListProduct:{screen:ListProduct},
  },{
    initialRouteName: 'Cart',
    headerMode: 'screen'
  }
);
export default Navigation;
