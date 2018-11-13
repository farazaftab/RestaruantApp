
import React from 'react';
import { Button, View, Text, Alert, BackHandler } from 'react-native';
import * as menu from '../../assets/menu.json';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Cart extends React.Component {

  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
}

  static navigationOptions = {
    tabBarLabel: 'Cart 1',
    tabBarIcon: ({ tintColor, focused, horizontal }) => (
      <Ionicons
        name={focused ? 'ios-cart' : 'ios-cart-outline'}
        size={horizontal ? 20 : 26}
        style={{ color: tintColor }}
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Cart Page</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <Button
            title="Go to Details... again"
            onPress={() =>
              this.props.navigation.push('Details', {
                itemId: Math.floor(Math.random() * 100),
              })}
          />
          <Button
            title="Go to Home"
            onPress={() => 
              {
                console.log("this is onpress:::::", this.props )
                this.props.navigation.navigate('MainScreen')
              }}
          />
          <Button
            title="Go back"
            onPress={() => 
              {
                console.log("this is onpress:::::", this.props )
                this.props.navigation.goBack()
              }}
          />
        </View>
      );
    }
  }