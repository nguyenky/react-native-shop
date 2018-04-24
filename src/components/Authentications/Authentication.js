import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import icLogo from '../../../images/icons/ic_logo.png';
import icBack from '../../../images/icons/back_white.png';
import SignIn from './SignIn';
import SignUp from './SignUp';
export default class Authentication extends Component {
  static navigationOptions = {
    header:null,
    title: 'Welcome to Cleaning nerd !!!',
  };
  constructor(props) {
    super(props);
  
    this.state = {
      isSignIn:true
    };
  }
  goBackToMain(){

  }
  signIn() {
      this.setState({ isSignIn: true });
  }

  signUp() {
      this.setState({ isSignIn: false });
  }
  gotoSignIn(){

  }
  render(){
    const {
            row1, iconStyle, titleStyle,
            container, controlStyle,
            signInStyle, signUpStyle,
            activeStyle, inactiveStyle
        } = styles;
    const { isSignIn } = this.state;
    const mainJSX = isSignIn ? <SignIn goBackToMain={this.goBackToMain.bind(this)} /> : <SignUp gotoSignIn={this.gotoSignIn.bind(this)} />;
    
    return(
      <View style={container}>
        <View style={row1}>
            <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                <Image source={icBack} style={iconStyle} />
            </TouchableOpacity>
            <Text style={titleStyle}>Wearing a Dress</Text>
            <Image source={icLogo} style={iconStyle} />
        </View>
        <View>
        {mainJSX}
        </View>
        <View style={controlStyle}>
            <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)}>
                <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={signUpStyle} onPress={this.signUp.bind(this)}>
                <Text style={!isSignIn ? activeStyle : inactiveStyle}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#3EBA77',
        padding: 20,
        justifyContent: 'space-between'
    },
  row1: { flexDirection: 'row', justifyContent: 'space-between' },

  textInput: { 
      height: Dimensions.get('window').height  / 23, 
      backgroundColor: '#FFF', 
      paddingLeft: 10,
      paddingVertical: 0 
  },

  titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 30 },

  iconStyle: { width: 30, height: 30 },

  controlStyle: {
      flexDirection: 'row',
      alignSelf: 'stretch'
  },

  inactiveStyle: {
      color: '#D7D7D7'
  },
  activeStyle: {
      color: '#3EBA77'
  },
  signInStyle: {
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingVertical: 15,
      flex: 1,
      borderBottomLeftRadius: 20,
      borderTopLeftRadius: 20,
      marginRight: 1
  },
  signUpStyle: {
      backgroundColor: '#fff',
      paddingVertical: 15,
      alignItems: 'center',
      flex: 1,
      marginLeft: 1,
      borderBottomRightRadius: 20,
      borderTopRightRadius: 20
  },
});
