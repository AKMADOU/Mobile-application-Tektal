import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, ImageBackground, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Header, Button } from 'react-native-elements';


//Page de connexion

export default class Login extends Component {
    
    render() {
      return (
        <View >
           <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
            <Text style={styles.text}>Connectez-vous</Text>
                <ScrollView>
                <View style={styles.center}>
                <TextInput
                    style={{ height: 60, color: 'grey', borderWidth: 0, backgroundColor:'white', padding:15 }}
                    //onChangeText={text => onChangeText(text)}
                    placeholder="Adresse mail"
                    />

                <TextInput secureTextEntry={true} style={{ height: 60, color: 'grey', borderWidth: 0, backgroundColor:'white', padding:15, marginTop:30 }} placeholder="Mot de passe" />

                <Button
                    title="VALIDER"
                    buttonStyle={{backgroundColor:"#C00E2E", height:60, marginTop:30}}
                    titleStyle={{
                        color: 'white',
                        fontWeight:'bold',
                        fontSize:25
                    }}
                    onPress={() => this.props.navigation.navigate('Home')}
                  />
                <Button
                        title='Mot de passe oublié?'
                        //onPress={this.goToForgotPassword}
                        titleStyle={{
                            color: 'white'
                        }}
                        type='clear'
                        buttonStyle={{alignSelf: 'flex-end'}}
                />
                 <Button
                    title="INSCRIPTION"
                    buttonStyle={{backgroundColor:"#C00E2E", height:60, marginTop:30}}
                    titleStyle={{
                        color: 'white',
                        fontWeight:'bold',
                        fontSize:25
                    }}
                    onPress={() => this.props.navigation.navigate('Register')}
                  />
        
                </View>
               
                </ScrollView>
                
              </View>
           </ImageBackground>
           
      </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:70
        
        
    },
    center: {
        flex:1,
        //alignItems: 'center',
        marginTop:50,
        padding: 15
       // justifyContent: 'center',
       
        
    },
    text:{
        color: 'white',
        alignSelf: 'center',
        fontSize:30,
        paddingTop:20,
    }
  });
  