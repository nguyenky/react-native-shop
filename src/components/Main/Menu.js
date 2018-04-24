import React, {Component} from 'react';
import{
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import profileIcon from '../../../images/temp/profile.png'; 
export default class Menu extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
      isLogedIn:false
    };
  }
  closeMenu(){
    const { close } = this.props;
    close();
  }
  signIn(){
    const {navigator} = this.props;
    navigator.push('Authentication');
  }
  goToOrderHistory(){
    const {navigator} = this.props;
    navigator.push('OrderHistory');
  }
  goToChangeInfor(){
    const {navigator} = this.props;
    navigator.push('ChangeInfor');
  }
  render(){
    const {container,profile,button,btnText,btnStyle,btnSignInStyle,btnTextSignIn,username,loginContainer} = styles;
    const logoutJSX = (
        <View style ={{flex:1}}> 
          <TouchableOpacity onPress={()=>this.signIn()} style ={btnStyle}>
            <Text style={btnText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      );
    const loginJSX = (
      <View style={loginContainer}>
        <Text style={username}>Le Nguyen Ky</Text>
          <View style ={{flex:1}}> 
            <TouchableOpacity onPress={()=>this.goToOrderHistory()} style ={btnSignInStyle}>
            <Text style={btnTextSignIn}>Order history</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.goToChangeInfor()} style ={btnSignInStyle}>
            <Text style={btnTextSignIn}>Change infor</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{alert(1)}} style ={btnSignInStyle}>
            <Text style={btnTextSignIn}>Sign out</Text>
          </TouchableOpacity>
          </View>
        </View>
      );
    const mainJSX = this.state.isLogedIn ? loginJSX : logoutJSX;
    return(
        <View style={container}>
          <Image source={profileIcon} style = {profile} />
          {mainJSX}
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,backgroundColor:'#34B089',
    borderRightColor: '#fff',
    borderRightWidth: 2,
    alignItems:  'center',
  },
  profile:{
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,

  },
  btnStyle:{
    height: 40,
    paddingHorizontal: 70,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
  },
  btnSignInStyle: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    width: 200,
    marginBottom: 10,
    justifyContent: 'center',
    paddingLeft: 10
  },
  btnText:{
    color: '#34B089'
  },
  btnTextSignIn: {
      color: '#34B089',
      fontSize: 15
  },
    loginContainer: {
        flex: 1, 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    username: {
        color: '#fff', 
        fontFamily: 'Avenir', 
        fontSize: 15
    }
});
