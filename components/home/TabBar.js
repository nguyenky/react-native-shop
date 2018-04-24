import React,{ Component} from 'react';
import{
  View,
  Text,
  Button,
  Image,
  StyleSheet,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Products from './Products.js';
import Home from './Home.js';

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
  render(){
    const { open } = this.props;
    return(
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          renderIcon={() => <Image style={styles.icons} source={require("../../images/icons/home-befor.png")} />}
          renderSelectedIcon={() => <Image style={styles.icons} source={require("../../images/icons/home-after.png")} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <Home navigator= {this.props.navigation} open = {open} />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'product'}
          renderIcon={() => <Image style={styles.icons} source={require("../../images/icons/product-befor.png")} />}
          renderSelectedIcon={() => <Image style={styles.icons} source={require("../../images/icons/product-after.png")} />}
          onPress={() => this.setState({ selectedTab: 'product' })}>
          <Products navigator= {this.props.navigation}  />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'orders'}
          renderIcon={() => <Image style={styles.icons} source={require("../../images/icons/order-befor.png")} />}
          renderSelectedIcon={() => <Image style={styles.icons} source={require("../../images/icons/order-after.png")} />}
          onPress={() => this.setState({ selectedTab: 'orders' })}>
          <View style={{flex:1,backgroundColor:'green'}}></View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'settings'}
          renderIcon={() => <Image style={styles.icons} source={require("../../images/icons/settings-befor.png")} />}
          renderSelectedIcon={() => <Image style={styles.icons} source={require("../../images/icons/settings-after.png")} />}
          onPress={() => this.setState({ selectedTab: 'settings' })}>
          <View style={{flex:1,backgroundColor:'pink'}}></View>
        </TabNavigator.Item>
      </TabNavigator>

    );
  }
}
const styles = StyleSheet.create({
  icons:{
    width:30,
    height:30
  }

})
