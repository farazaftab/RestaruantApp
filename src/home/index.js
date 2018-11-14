import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { Alert, AppRegistry, ScrollView, Image, Text, View, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Hero } from '../component/Hero';
import SideSwipe from 'react-native-sideswipe'; // 1.3.0
//import Icon from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import { Constants, Font } from 'expo';
import {  Card, Divider, Icon, Avatar, Badge } from 'react-native-elements';

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
    //const myIcon = (<Icon name="rocket" size={30} color="#900" />)
   // console.log("myIcon ----- ", myIcon);
    const headerCorrection = {paddingTop: Platform.OS === 'android'  ? 0 : 0};//Expo.Constants.statusBarHeight} ; // 24

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

        <View style={[ styles.container,  headerCorrection ]}>



            <View style={[styles.headingContainer]} >



  
                  <Icon
                  name='menu'
                  iconStyle={[styles.iconStyle]}
                  //type='material-community'
                  size = {40}
                 color='white'
                  onPress={() => this.props.navigation.toggleDrawer()}
                 />




                <View
                style={[styles.LogoContainer]}
                >
                        <Icon
                          name='food-fork-drink'
                          iconStyle={[styles.iconStyle]}
                          type='material-community'
                          size = {40}
                          color='white'
                        />

                        <Text style={[styles.title]}> My Retaurant
                        </Text>

                </View>


              <View
               onPress={() => {
                this.props.navigation.navigate('Cart', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                });
              }}
              >
          
                    <Text style={[styles.cartCount]}>
                      97
                    </Text>
            

                  <Icon
                  name='cart'
                  iconStyle={[styles.iconStyle]}
                  type='material-community'
                  size = {40}
                 color='white'
                 onPress={() => {
                  this.props.navigation.navigate('Cart', {
                    itemId: 86,
                    otherParam: 'anything you want here',
                  });
                }}
                 />

              </View>

              

          </View>

          <View style={[styles.CarouselContainer]}>
            
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
            </View>

            <View style={[styles.bottomContainer]}
            >
                  

                  <TouchableOpacity
                        style={styles.button}

                        onPress={() => {
                          /* 1. Navigate to the Details route with params */
                          this.props.navigation.navigate('LocateUs', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                          });
                        }}
                      >
                        <Text
                          
                          >
                          Locate US
                        </Text>
                  </TouchableOpacity>


                 <TouchableOpacity
                        style={styles.button}
                      >
                        <Text> Hello there
                          </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                        style={styles.button}
                      >
                        <Text 
                            onPress={() => Alert.alert("Page is under construction")}
                            >
                            Pick Up Your Order ASAP
                        </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                          /* 1. Navigate to the Details route with params */
                          this.props.navigation.navigate('Menu', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                          });
                        }}>
                      
                    <Text >
                      
                      Choose Your Items
                  </Text>
                

                  </TouchableOpacity>


                  

                 

          </View>

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
    backgroundColor: '#918b88',
  },

  headingContainer: {
   // flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    //paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    backgroundColor: '#594a43',
    height: 50,
    zIndex: 2,
    width: '100%',
    marginBottom: 5,
    
  },
  CarouselContainer: {
    //padding: 10,
  },
  LogoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
  },

  bottomContainer:{
    alignItems: 'center',
    justifyContent: 'space-around',
  } ,

  title: {
   // fontFamily: 'dhurjati',
    //fontSize: 20,
    //letterSpacing: 1.6,
   // opacity: 0.6,
   color: 'white'

  },
  cartCount: {
    fontSize: 8,
    position: 'absolute',
  },
  row1: {
   
   // width: '100%'
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
  button: {
    alignItems: 'center',
    backgroundColor: '#594a43',
    padding: 10,
    width: '80%',
    margin: 10
  },
  iconStyle: {
    marginLeft: 5,
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

