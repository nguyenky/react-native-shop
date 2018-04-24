import React, {Component} from 'react';
import{
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';
import PropTypes from 'prop-types';
import Logo from './Logo';
export default class Wallpaper extends Component{
  static navigationOptions = {
    header: null,
    title: 'Welcome to Cleaning nerd !!!',
  };

  render(){
    return(
      <ImageBackground
          source={{uri: 'https://raw.githubusercontent.com/dwicao/react-native-login-screen/master/src/images/wallpaper.png'}}
          style={styles.picture}>
          {this.props.childen}
          <Logo></Logo>
      </ImageBackground >
    )
  };
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
  },
});
