import React, {Component} from 'react';
import{
  View,
  Text,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
import Home from './Home.js';
export default class Products extends Component{
  static navigationOptions = {
    header:null,
    title: 'Welcome to Cleaning nerd !!!',
  };
  gotoHome(){
    const {navigator} = this.props;
    navigator.push('Home');
  }
  render(){
    return(
        <View>
          <Text>Products</Text>
          <TouchableOpacity onPress={this.gotoHome.bind(this)}>
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
    );
  }
}
