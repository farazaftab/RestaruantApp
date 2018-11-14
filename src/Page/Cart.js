
import React from 'react';
import { Button, View, Alert, BackHandler,ScrollView, StyleSheet   } from 'react-native';
import * as menu from '../../assets/menu.json';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import {  Card, Divider, Icon, Text, Avatar } from 'react-native-elements';



export default class Cart extends React.Component {

  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
}

  static navigationOptions = {
    tabBarLabel: 'Cart 1',

  };

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
  Alert.alert("Are you sure you want to exit the checkout");
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