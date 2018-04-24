import React,{ Component} from 'react';
import{
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Demensions,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home.js';
import Cart from './Cart/Cart.js';

import homeIconS from '../../../../images/icons/home.png';
import homeIcon from '../../../../images/icons/home0.png';
import cartIconS from '../../../../images/icons/cart.png';
import cartIcon from '../../../../images/icons/cart0.png';
import searchIconS from '../../../../images/icons/search.png';
import searchIcon from '../../../../images/icons/search0.png';
import contactIconS from '../../../../images/icons/contact.png';
import contactIcon from '../../../../images/icons/contact0.png';
// import Products from './Products.js';
import Header from './Header.js';
// const height = Demensions.get('window').height;
const height = 60;
export default class TabBar extends Component{
  static navigationOptions = {
    header:null,
    title: 'Welcome to Cleaning nerd !!!',
  };
  constructor(props){
    super(props);
    this.state={
      selectedTab:'home'
    }
  }
  openMenu(){
    const { open } = this.props;
    open();
  }
  render(){
    // const { navitigation } = this.props;
    const { iconStyle } = styles;
    return(
      <View style={{flex:1}}>
        <Header onOpen={this.openMenu.bind(this)}  />
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            renderIcon={() => <Image source={homeIcon} style={iconStyle} />}
            renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
            onPress={() => this.setState({ selectedTab: 'home' })}
            selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
          >
            <Home />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'cart'}
            renderIcon={() => <Image source={cartIcon} style={iconStyle} />}
            renderSelectedIcon={() => <Image source={cartIconS} style={iconStyle} />}
            onPress={() => this.setState({ selectedTab: 'cart' })}>
            <Cart />
          </TabNavigator.Item>
          
          <TabNavigator.Item
            selected={this.state.selectedTab === 'orders'}
            renderIcon={() => <Image source={homeIcon} style={iconStyle} />}
            renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
            onPress={() => this.setState({ selectedTab: 'orders' })}>
            <View style={{flex:1,backgroundColor:'green'}}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'settings'}
            renderIcon={() => <Image source={homeIcon} style={iconStyle} />}
            renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
            onPress={() => this.setState({ selectedTab: 'settings' })}>
            <View style={{flex:1,backgroundColor:'pink'}}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  icons:{
    width:30,
    height:30
  },
  iconStyle: {
      width: 20, height: 20
  }
})

