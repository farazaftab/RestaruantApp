
import React from 'react';
import { Button, View, Alert, BackHandler,ScrollView, StyleSheet   } from 'react-native';
import * as menu from '../../assets/menu.json';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import {  Card, Divider, Icon, Avatar } from 'react-native-elements';



export default class Cart extends React.Component {

  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
}

  static navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({ tintColor, focused, horizontal }) => (
      <Icon
      name='cart'
      type='material-community'
      color= {tintColor}
      />
  ),

  };

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
 
  Alert.alert(
    '',
    'Are you sure you want to exit the checkout?',
    [
    //  {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {text: 'OK', onPress: () => this.props.navigation.navigate('MainScreen')},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    ],
    { cancelable: true }
  )

  return true;
}

    onPress() {
      alert('This is a button! %j', menu );
    }
  
    render() {
      /* 2. Get the param, provide a fallback value if not available */
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID');
      const otherParam = navigation.getParam('otherParam', 'some default value');
  
      return (
        <ScrollView style={styles.container}>
       
       <Icon
          name='menu'
          type='material-community'
          color='#517fa4'

        />
       
      
      </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    textStyle: {
      fontSize: 18,
      textAlign: 'center',
      padding: 10,
    },
  });