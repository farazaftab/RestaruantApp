
import React from 'react';
import { Button, View, Text } from 'react-native';
import * as menu from '../../assets/menu.json';
import { NavigationActions } from 'react-navigation'

export default class SideMenu extends React.Component {
    

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
          <Text>Side Menu Screen</Text>
          <Text>Display whaever you want here</Text>
         
        </View>
      );
    }
  }