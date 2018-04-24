import React, { Component } from 'react';
import { ScrollView, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';
export default class Home extends Component{
	static navigationOptions = {
        header:null,
        title: 'Welcome to Cleaning nerd !!!',
      };
	render(){
		return(
			<ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
				<Collection />
				<Category navigator = {this.props.navigation} />
				<TopProduct navigator = {this.props.navigation} />
			</ScrollView>
		);
	}
}