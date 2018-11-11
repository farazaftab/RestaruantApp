
import React from 'react';
import { Button, View, Text, WebView } from 'react-native';
//import MapView from 'react-native-maps';

export default class LocateUs extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
      title: 'Our Location',
      headerLeft: (
        <Button
          onPress={() =>  {
            navigation.goBack()}}
          title="Back"
        />)
    }
  };


    onPress() {
      alert('This is a button! %j' );
    }
  
    render() {
      /* 2. Get the param, provide a fallback value if not available */
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID');
      const otherParam = navigation.getParam('otherParam', 'some default value');
    const url = "https://www.google.com/maps/place/CenturyLink+Field/@47.5951518,-122.3338281,17z/data=!4m5!3m4!1s0x54906aa3b9f1182b:0xa636cd513bba22dc!8m2!3d47.5951518!4d-122.3316394"
     
    //const url = "https://www.bjs.com"
   // const url = "https://maps.google.com"
    return (
       
          <WebView
        source={{uri: url}}
        style={{marginTop: 20}}
      />

      
/*
      <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
    */
          
      
      );
    }
  }