import React from 'react'
import { StyleSheet, View, StatusBar, Text, AppRegistry, Button } from 'react-native'
import RootStack from './src/Navigation/Rootstack'


export default class App extends React.Component {
  render() {
  return (
   

        <RootStack/>

      
   
);
  }
}


// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  'MyRestaurant',
  () => App);