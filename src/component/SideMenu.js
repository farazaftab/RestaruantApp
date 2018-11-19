
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Button } from 'react-native-elements'
import * as menu from '../../assets/menu.json';
import { NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements';

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
        <View style={[styles.container]}>

           <View
            style={[styles.logoContainer]}
          >
            <Icon
              name='food-fork-drink'
              iconStyle={[]}
              type='material-community'
              size={40}
              color='#4d0000'
            />
            <Text style={[styles.menuText]}> My Retaurant
                        </Text>
          </View>


            <View
            style={[styles.mainContainer]}
            >

            <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Page is under construction")}
          >

          <Icon
              name='food-fork-drink'
              iconStyle={[]}
              type='material-community'
              color='black'
            />

            <Text
            //style={styles.buttonText}
            >
             {'  '} Cart
                        </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Page is under construction")}
          >

          <Icon
              name='food-fork-drink'
              iconStyle={[]}
              type='material-community'
              color='black'
            />

            <Text
            //style={styles.buttonText}
            >
             {'  '} Previous Orders
                        </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Page is under construction")}
          >

          <Icon
              name='food-fork-drink'
              iconStyle={[]}
              type='material-community'
              color='black'
            />

            <Text
            //style={styles.buttonText}
            >
             {'  '} Pick Up Later
                        </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Page is under construction")}
          >

          <Icon
              name='food-fork-drink'
              iconStyle={[]}
              type='material-community'
              color='black'
            />

            <Text
            //style={styles.buttonText}
            >
             {'  '} My Account
                        </Text>
          </TouchableOpacity>


              </View>

          <View
           style={[styles.sideFooterContainer]}
          >

            <View
             style={[styles.logoutView, styles.borderView]}>
              <Icon
              name='logout'
              iconStyle={[]}
              type='material-community'
              size={20}
              color='#4d0000'
            />

             <Text>
             {'  '} Logout 
              </Text>
            </View>

          <View
           style={[styles.footerRow]}
           >
          
            <Text  style={[styles.discText]} >Version 0.0.1</Text>
            <Text>{'    |    '}</Text>
            <Text  style={[styles.discText]} >Privacy & Terms</Text>
          </View>

          <View
           style={[styles.footerRow]}
           >
          
            <Text>©2018 My Restaurant pvt limited Inc</Text>
          </View>

          </View>
         
         
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'space-between',
      backgroundColor: 'white',
    },
    logoContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 15

    },
    mainContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      marginTop: 30
    },
    sideFooterContainer: {
    //  flex: -0.5,
   //   alignItems: 'flex-end',
    //  flexDirection: 'row',
    //  justifyContent: 'stretch',
    //  borderTopWidth: 1,
     // borderTopColor: 'red',
     // height: 50,
     // backgroundColor: 'black',

    },
    menuText: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
    },

    borderView: {
      borderTopWidth: 1,
      borderTopColor: 'black',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
     // padding: 5,
    },
    buttonTest: {
      width: '100%',
     // backgroundColor: 'red',
      paddingBottom: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
     marginLeft: 0,

    },
    logoutView: {

    //  flex: 1,
   //   alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    footerRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
      padding: 5,
    },
    discText: {
      fontStyle: 'italic',
      textDecorationLine: 'underline'
    },
    button: {
      marginTop: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#ffe6e6',
      paddingLeft: 10,
      height: 60,
    },

  })

  187283,185781,172072,721542,112505