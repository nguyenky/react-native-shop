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
import TabBar from '../home/TabBar.js';
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
        <View style={{flex:1,backgroundColor:'yellow'}}>
        <TouchableOpacity onPress={this.closeControlPanel} >
          <Text>close</Text>
        </TouchableOpacity >
        </View>
      }
      >
        <TabBar open ={this.openControlPanel.bind(this)} />
    </Drawer>
    )
  }
}
