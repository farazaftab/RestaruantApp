import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { Alert, AppRegistry, ScrollView, Image, Text, View, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Hero } from '../component/Hero';
import SideSwipe from 'react-native-sideswipe'; // 1.3.0
//import { Constants, Font } from 'expo';

export default class Home extends React.Component {

  _onPressButton() {
    this.props.navigation.navigate('Details', {
      itemId: 86,
      otherParam: 'anything you want here',
    });
  }
  
  
  static navigationOptions = {
    title: 'Home',
    header: null,
  };


  render() {

    const headerCorrection = 10;//{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight} ;

    const planets = [
      { title: 'Burger', value: 'Burger', abbr: 'Burger' },
      { title: 'Chicken Salad', value: 'ChickenSalad', abbr: 'Chicken Salad' },
      { title: 'Deserts', value: 'Deserts', abbr: 'Deserts' },
      { title: 'Fish Fillet', value: 'FishFillet', abbr: 'Fish Fillet' },
      { title: 'Fried', value: 'Fried', abbr: 'Fried' },
      { title: 'Pizza', value: 'Pizza', abbr: 'Pizza' },
      { title: 'Salad', value: 'Salad', abbr: 'Salad' },
      { title: 'Salmon', value: 'Salmon', abbr: 'Salmon' },
      { title: 'Shrimp', value: 'Shrimp', abbr: 'Shrimp' },
      { title: 'Spaghetti', value: 'Spaghetti', abbr: 'Spaghetti' },
      { title: 'Tako', value: 'Tako', abbr: 'Tako' }
    ];

    const { width } = Dimensions.get('window');
    const offset = (width - Hero.WIDTH) / 2;
    //this.setState({ fontsLoaded: true });

      return (

        <View style={[headerCorrection, styles.container, styles.titlePlatformSpecific,]}>



      <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
        >
          <Text style={styles.buttonText}>Open Drawer</Text>
        </TouchableOpacity>



          <Text style={[styles.title, styles.row1]}
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('Cart', {
                itemId: 86,
                otherParam: 'anything you want here',
              });
            }}
            >
            My Retaurant
          </Text>

          <Image
            resizeMode="contain"
            style={styles.fill}
            source={require('../../assets/pr-assets/space-bg.jpg')}
          />
          <SideSwipe
            data={planets}
            shouldCapture={() => true}
            style={[styles.hero, { width }]}
            contentContainerStyle={{ paddingTop: 10 }}
            itemWidth={Hero.WIDTH}
            threshold={Hero.WIDTH / 4}
            extractKey={item => item.value}
            contentOffset={offset}
            onIndexChange={index =>
              this.setState(() => ({ currentIndex: index }))}
            renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
              <Hero
                planet={item}
                index={itemIndex}
                currentIndex={currentIndex}
                animatedValue={animatedValue}
              />
            )}
          />

          <Text style={[styles.title, styles.row3]}
           
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('LocateUs', {
                itemId: 86,
                otherParam: 'anything you want here',
              });
            }}
            >
            Locate US
          </Text>

          <View style={[styles.container]}>
            <Text style={[styles.title, styles.row4]}
              onPress={() => Alert.alert("Page is under construction")}
              >
              Now
          </Text>
            <Text style={[styles.title, styles.row4]}
              onPress={() => Alert.alert("Page is under construction")}
              >
              Later
          </Text>
          </View>

           <Text style={[styles.title, styles.row4]}
              onPress={() => Alert.alert("Page is under construction")}
              >
              Pick Up Your Order ASAP
          </Text>

           <Text style={[styles.title, styles.row4]}
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('Menu', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                });
              }}>
              Choose Your Items
          </Text>

        </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
  },

  title: {
   // fontFamily: 'dhurjati',
    fontSize: 32,
    letterSpacing: 1.6,
    opacity: 0.6,

  },
  row1: {
    zIndex: 2,
    backgroundColor: '#d6ddc1',
    width: '100%'
  },
  row3: {
    zIndex: 2,
    backgroundColor: '#d6ddc1',
  },
  row4: {
    zIndex: 2,
    backgroundColor: '#d6ddc1',
  },
  fill: {
    position: 'absolute',
    //top: Constants.statusBarHeight,
    left: 0,
    right: 0,
    bottom: 0,
  },
  hero: {
   // backgroundColor: 'red',
  },
  titlePlatformSpecific: Platform.select({
    ios: {
      marginBottom: 10,
    },
    android: {
      marginBottom: 10,
    }
  }),
});

