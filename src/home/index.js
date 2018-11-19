import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { Alert, AppRegistry, ScrollView, Image, Text, View, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Hero } from '../component/Hero';
import SideSwipe from 'react-native-sideswipe'; // 1.3.0
//import Icon from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import { Constants, Font } from 'expo';
import { Icon, ButtonGroup } from 'react-native-elements';

export default class Home extends React.Component {


  constructor () {
    super()
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)

  }

  _onPressButton() {
    this.props.navigation.navigate('Details', {
      itemId: 86,
      otherParam: 'anything you want here',
    });
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  static navigationOptions = {
    title: 'Home',
    header: null,
  };


  componentDidMount() {
    //this.props.navigation.openDrawer()

   

   }



  render() {
  
    const buttons = ['ASAP', 'Pick Up Later']
    const { selectedIndex } = this.state

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

      <View style={[styles.container]}>
        <View style={[styles.headingContainer]} >
          <Icon
            name='menu'
            iconStyle={[styles.iconStyle]}
            //type='material-community'
            size={40}
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
              size={40}
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
              size={40}
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
             style={styles.buttonText}
            >
              Locate US
                        </Text>
          </TouchableOpacity>



          <ButtonGroup
          //component = 
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={[styles.buttonGroup]}
            selectedBackgroundColor = '#4d0000'
            selectedTextStyle = {[styles.buttonText]}
          />




          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            })
          }
          >

            <Text
            style={styles.buttonText}
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
            <Text 
            style={styles.buttonText}
            >
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
    alignItems: 'center',
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
    backgroundColor: '#4d0000',
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

  bottomContainer: {
   // marginLeft: 30,
   // flexDirection: 'row',
   flex: 2,
    alignItems: 'stretch',
    justifyContent: 'space-around',//'space-around',
    width: "100%",
    color: 'white'
  },

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
  hero: {
    // backgroundColor: 'red',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#4d0000',
    padding: 10,
    height: 60,
    margin: 10
  },
  buttonGroup: {
    backgroundColor: 'white',
    padding: 10,
    height: 60,
    margin: 10
  },

  iconStyle: {
    marginLeft: 5,
  },
  buttonText: {
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',
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

