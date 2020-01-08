import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, ImageBackground, TextInput  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Header, Button } from 'react-native-elements';


//page d'inscription 
export default class Register extends Component {
    
    render() {
      return (
        <View >
           <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
           <ScrollView>
           <View style={styles.container}>
            <Text style={styles.text}>Inscrivez-vous</Text>

                <View style={styles.center}>
                <TextInput
                    style={{ height: 50, color: 'grey', borderWidth: 0, backgroundColor:'white', padding:15, marginTop:10 }}
                    //onChangeText={text => onChangeText(text)}
                    placeholder="Nom"
                    />
                <TextInput
                    style={{ height: 50, color: 'grey', borderWidth: 0, backgroundColor:'white', padding:15, marginTop:10 }}
                    //onChangeText={text => onChangeText(text)}
                    placeholder="Prenom"
                    />
                <TextInput
                    style={{ height: 50, color: 'grey', borderWidth: 0, backgroundColor:'white', padding:15, marginTop:10 }}
                    //onChangeText={text => onChangeText(text)}
                    placeholder="Telephone"
                    />
                <TextInput
                    style={{ height: 50, color: 'grey', borderWidth: 0, backgroundColor:'white', padding:15, marginTop:10 }}
                    //onChangeText={text => onChangeText(text)}
                    placeholder="Adresse mail"
                    />

                <TextInput secureTextEntry={true} style={{ height: 50, color: 'grey', borderWidth: 0, backgroundColor:'white', padding:15, marginTop:10 }} placeholder="Mot de passe" />
                <TextInput secureTextEntry={true} style={{ height: 50, color: 'grey', borderWidth: 0, backgroundColor:'white', padding:15, marginTop:10 }} placeholder="Confirmer Mot de passe" />

                <Button
                    title="VALIDER"
                    buttonStyle={{backgroundColor:"#C00E2E", height:60, marginTop:30}}
                    titleStyle={{
                        color: 'white',
                        fontWeight:'bold',
                        fontSize:25
                    }}
                    onPress={() => this.props.navigation.navigate('Login')}
                  />
                
                </View>
               
              </View>

               </ScrollView>  
                       </ImageBackground>
        </View>
      )
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
  