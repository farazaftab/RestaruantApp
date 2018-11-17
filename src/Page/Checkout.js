
import React from 'react';
import { Button, View, Text } from 'react-native';
import * as menu from '../../assets/menu.json';
import {  Card, Divider, Icon, Avatar } from 'react-native-elements';

export default class Checkout extends React.Component {


  static navigationOptions = {
    tabBarLabel: 'Checkout',
    tabBarIcon: ({ tintColor, focused, horizontal }) => (
      <Icon
      name='credit-card'
      type='material-community'
      color= {tintColor}
      />
    ),
  };


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
          <Text>Checkout Screen</Text>
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
            onPress={() => this.props.navigation.navigate('MainScreen')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }