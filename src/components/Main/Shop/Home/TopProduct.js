import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import sp1 from '../../../../../images/temp/sp1.jpeg';
import sp2 from '../../../../../images/temp/sp2.jpeg';
import sp3 from '../../../../../images/temp/sp3.jpeg';
import sp4 from '../../../../../images/temp/sp4.jpeg';
import sp5 from '../../../../../images/temp/sp5.jpeg';
export default class TopProduct extends Component{
    gotoProductDetail(){
        const {navigator} = this.props;
        navigator.push('ProductDetail');
    }
	render(){
		const { 
            container, titleContainer, title, 
            body, productContainer, productImage,
            produceName, producePrice 
        } = styles;
		return(
			<View style={container}>
				<View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={body}>
                	<TouchableOpacity style={productContainer} onPress={()=>this.gotoProductDetail()}>
                		<Image source={sp1} style={productImage} /> 
                		<Text style={produceName}>Uchiha</Text>
                        <Text style={producePrice}>100$</Text>
                	</TouchableOpacity>
                	<TouchableOpacity style={productContainer} onPress={()=>this.gotoProductDetail()}>
                		<Image source={sp2} style={productImage} /> 
                		<Text style={produceName}>Uchiha</Text>
                        <Text style={producePrice}>100$</Text>
                	</TouchableOpacity>
                	<TouchableOpacity style={productContainer} onPress={()=>this.gotoProductDetail()}>
                		<Image source={sp2} style={productImage} /> 
                		<Text style={produceName}>Uchiha</Text>
                        <Text style={producePrice}>100$</Text>
                	</TouchableOpacity>
                	<TouchableOpacity style={productContainer} onPress={()=>this.gotoProductDetail()}>
                		<Image source={sp2} style={productImage} /> 
                		<Text style={produceName}>Uchiha</Text>
                        <Text style={producePrice}>100$</Text>
                	</TouchableOpacity>
                	<TouchableOpacity style={productContainer} onPress={()=>this.gotoProductDetail()}>
                		<Image source={sp2} style={productImage} /> 
                		<Text style={produceName}>Uchiha</Text>
                        <Text style={producePrice}>100$</Text>
                	</TouchableOpacity>
                </View>
			</View>
		);
	}
}
const { width } = Dimensions.get('window');
const produtWidth = (width - 60) / 2;
const productImageHeight = (produtWidth / 361) * 452; 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        color: '#D3D3CF',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productContainer: {
        width: produtWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: produtWidth,
        height: productImageHeight
    },
    produceName: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500'
    },
    producePrice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90'
    }
});