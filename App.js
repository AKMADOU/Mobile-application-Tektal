import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login.js';
import Register from './screens/register';
import Home from './screens/home';
import Settings from './screens/settings';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/*
Page app.js qu'on a utilisé pour faire la configuration du routage avec react navigation
*/
const AppNavigator = createStackNavigator(
  {
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      headerShown: false //this will hide the header
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      headerShown: false
      //header: null //this will hide the header
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register',
      headerShown: false
      //header: null //this will hide the header
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
      headerShown: false
      //header: null //this will hide the header
    },
  },
},

{
  initialRouteName: 'Login',
}
);


/*const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  //   The header config from HomeScreen is now here 
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
*/

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}






/*const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  //   The header config from HomeScreen is now here 
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
*/