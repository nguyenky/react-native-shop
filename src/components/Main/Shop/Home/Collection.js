import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
const { width } = Dimensions.get('window');
import bannerImage from '../../../../../images/temp/banner.jpg';
export default class Home extends Component{
	gotoListProduct(){

	}
	render(){
		const { wrapper, textStyle, imageStyle } = styles;
		return(
			<View style={wrapper}>
				 <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={textStyle} >SPRING COLLECTION</Text>
                </View>
                <TouchableOpacity style={{ flex: 4, justifyContent: 'flex-end' }} onPress={this.gotoListProduct.bind(this)}>
                    <Image source={bannerImage} style={imageStyle} />
                </TouchableOpacity>
			</View>
		);
	}
}
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;
const styles = StyleSheet.create({
	wrapper:{
		height: Dimensions.get('window').height /3 ,
		width:  Dimensions.get('window').width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
	},
	textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight, 
        width: imageWidth
    }
})