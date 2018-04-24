import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';
import Drawer from 'react-native-drawer';
import Shop from './Shop/Shop.js';
import Menu from './Menu.js';
export default class Main extends Component {
  static navigationOptions = {
    header:null,
    title: 'Welcome to Cleaning nerd !!!',
  };
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render(){
    return(
      <Drawer
      // type="overlay"
      tapToClose={true}
      ref={(ref) => this._drawer = ref}
      openDrawerOffset={150}
      content={
        <Menu close ={this.closeControlPanel.bind(this)} navigator= {this.props.navigation} />
      }
      >
        <Shop open ={this.openControlPanel.bind(this)}  />
    </Drawer>
    )
  }
}
