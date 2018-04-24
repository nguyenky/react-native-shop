import React, {Component} from 'react';
import{
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import icLogo from '../../../../images/icons/ic_logo.png';
import icMenu from '../../../../images/icons/ic_menu.png';
export default class Header extends Component{
  render(){
     const { wrapper, row1, textInput, iconStyle, titleStyle } = styles;
    return(
        <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wearing a Dress</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                <TextInput 
                    style={textInput}
                    placeholder="What do you want to buy?"
                    underlineColorAndroid="transparent"
                    // value={this.state.txtSearch}
                    // onChangeText={text => this.setState({ txtSearch: text })}
                    // onFocus={() => global.gotoSearch()} 
                    // onSubmitEditing={this.onSearch.bind(this)}
                />
            </View>
    );
  }
}
const styles = StyleSheet.create({
  header:{
    backgroundColor:'#ffffff',
    width:Dimensions.get('window').width,
    height:40,
    flexDirection:'row',
    justifyContent:  'space-between',
    alignItems: 'center',
  },
  text:{
    color:'black',
    fontSize: 20,
  },
  wrapper: { 
      height: Dimensions.get('window').height / 8, 
      backgroundColor: '#34B089', 
      padding: 10, 
      justifyContent: 'space-around' 
  },
  row1: { flexDirection: 'row', justifyContent: 'space-between' },
  textInput: { 
      height: Dimensions.get('window').height  / 23, 
      backgroundColor: '#FFF', 
      paddingLeft: 10,
      paddingVertical: 0 
  },
  titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 },
  iconStyle: { width: 25, height: 25 }
});
