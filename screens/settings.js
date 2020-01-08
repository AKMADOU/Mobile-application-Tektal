import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { createDrawerNavigator  } from 'react-navigation-drawer'; 
import { Input, Header, Button, Icon  } from 'react-native-elements';
import HeaderNavigationBar from '../components/HeaderNavigationBar'

//page settings
export default class Settings extends Component {
  
    render() {
      return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderNavigationBar {...this.props} />
            <View style={{
                flex: 1,
                backgroundColor: '#4734ac',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    This is Info Screen
                </Text>
                
            </View>
        </View>
      );
    }
  }