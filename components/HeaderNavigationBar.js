import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { createDrawerNavigator  } from 'react-navigation-drawer'; 
import { Input, Header, Button, Icon  } from 'react-native-elements';

//bar de navigation qui est intégrée dans les différentes pages 

export default class HeaderNavigationBar extends Component {
    render() {
        return (
            /*
            header importé depuis react native element pour rendre la bar plus jolie avec ses differents elements allant de la gauche 
            vers la droite on peut modifier les composants du headers pour y mettre les notres comme c'est le cas ici 
            */
            <Header
            backgroundColor="#EF1D43"
            placement="left"
            leftComponent={ 
                        <TouchableHighlight style={{ marginLeft: 10, marginTop: 15 }}
                        onPress={() => { this.props.navigation.openDrawer() }}>
                        <Icon 
                            name ='menu'
                            color = 'white'
                        />
                        </TouchableHighlight>
                        }
            centerComponent={{ text: 'Tontine', style: { color: '#fff', alignSelf:'center', marginTop: 15, fontWeight:'bold',fontSize:20 } }}
            
            
            rightComponent={
                            <View style={{flexDirection:"row"}}>
                                <TouchableHighlight style={{ marginLeft: 10, marginTop: 15 }}
                            //onPress={() => { this.props.navigation.openDrawer() }}
                            >
                            <Icon 
                                name ='search'
                                color = 'white'
                            />
                            </TouchableHighlight>
                            <TouchableHighlight style={{ marginLeft: 10, marginTop: 15 }}
                            //onPress={() => { this.props.navigation.openDrawer() }}
                            >
                            <Icon 
                                name ='md-more'
                                type='ionicon'
                                color='#fff'

                            />
                            </TouchableHighlight>
                            </View>
                        }
            />
         );
    }
}
