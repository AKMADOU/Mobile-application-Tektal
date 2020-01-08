import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { createDrawerNavigator  } from 'react-navigation-drawer'; 
import { Input, Header, Button, Icon  } from 'react-native-elements';
import HeaderNavigationBar from '../components/HeaderNavigationBar'
import Settings from './settings';

/*
Page home utilisé pour configurer le menu drawer plus bas
*/

export class Home extends Component {
    
    render() {
      return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <HeaderNavigationBar {...this.props} />
            <View style={{
                flex: 1,
                backgroundColor: '#4885ed',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    This is Home Screen
                </Text>
                
            </View>
        </View>
      )
    }
}


export default createDrawerNavigator  (
    {
      Home:{
        screen:Home
      },
      Settings:{
        screen:Settings
      }
    },{
        initialRouteName:'Home'
    }
)

