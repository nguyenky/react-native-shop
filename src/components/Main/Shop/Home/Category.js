import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity,ImageBackground } from 'react-native';

import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window');
import littleIcon from '../../../../../images/temp/little.jpg';
import maxiIcon from '../../../../../images/temp/maxi.jpg';
import partyIcon from '../../../../../images/temp/party.jpg';
 
export default class Home extends Component{
    gotoListProduct(){

    }
    gotoCategory(){
        const {navigator} = this.props;
        navigator.push('ListProduct');
    }
    render(){
        const { wrapper, textStyle, imageStyle,caseTitle } = styles;
        return(
            <View style={wrapper}>
                 <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={textStyle} >SPRING COLLECTION</Text>
                </View>
                <Swiper showsPagination width={imageWidth} height={imageHeight}>
                    <TouchableOpacity onPress={()=>this.gotoCategory()} >
                        <ImageBackground source={littleIcon} style={imageStyle}>
                            <Text style={caseTitle}>Little</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.gotoCategory()} >
                        <ImageBackground source={maxiIcon} style={imageStyle}>
                            <Text style={caseTitle}>maxi</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.gotoCategory()} >
                        <ImageBackground source={partyIcon} style={imageStyle}>
                            <Text style={caseTitle}>Party</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </Swiper>
            </View>
        );
    }
}
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
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
        width: imageWidth,
        justifyContent:'center',
        alignItems:'center',
    },
    caseTitle:{
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9A9A9A'
    }
})