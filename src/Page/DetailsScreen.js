
import React from 'react';
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import * as dishDetail from '../../assets/dishDetail.json';
import { NavigationActions } from 'react-navigation'
import { WebView, Alert, TouchableOpacity, Platform } from 'react-native';
import { Badge } from 'react-native-elements';

export default class DetailsScreen extends React.Component {
   
  static navigationOptions = ({ navigation }) => {
    return {
    //  header: null,
    
  }
};


    onPress() {
      alert('This is a button! %j', menu );
    }
    onMessage(m) {
      Alert.alert(m.nativeEvent.data);
     }
  
     render2() {
      Alert.alert("here header");
    }

    render() {

      /* 2. Get the param, provide a fallback value if not available */
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID');
      const otherParam = navigation.getParam('otherParam', 'some default value');
  
      return (

       <View style={[styles.container]}>



          <ScrollView style={[styles.detailsContainer]}>

            <View style={[styles.nameNprice]}>
                <View style={[styles.nameView]} >
                  <Text style={[styles.itemName]}>
                  {dishDetail.name}
                    </Text>
                </View>
                <View style={[styles.priceView]}> 
                  <Text>
                  {dishDetail.price.amount}
                  </Text>
                </View>
              </View>

               <View style={[styles.row]}>
                  <Text>
                    {dishDetail.description}
                  </Text>
               </View>

                <View style={[styles.row]}>
                  <Text>
                    ------ Quantity & Sizes -------
                  </Text>
               </View>

               <View style={[styles.countContainer]}>

                  <Badge
                    value={1}
                    textStyle={{ color: 'orange', fontSize: 40  }}
                  />
                  <Badge
                    value={2}
                    textStyle={{ color: 'orange', fontSize: 40  }}
                  />
                 <Badge
                    value={3}
                    textStyle={{ color: 'orange', fontSize: 40  }}
                  />
                   <Badge
                    value={4}
                    textStyle={{ color: 'orange', fontSize: 40  }}
                  />
                  <Badge
                    value={5}
                    textStyle={{ color: 'orange', fontSize: 40  }}
                  />
                 <Badge
                    value={'+'}
                    textStyle={{ color: 'orange', fontSize: 40  }}
                  />

              </View>



            

          </ScrollView>
          

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Cart', {
              itemId: 86,
              otherParam: 'anything you want here',
            })
          }
          >

            <Text
            style={styles.buttonText}
            >
              Add Item To Cart
                        </Text>
          </TouchableOpacity>

         </View>
      );
    }
  }





  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      //paddingTop: Constants.statusBarHeight,
    //  backgroundColor: '#918b88',
    //  marginTop: 100
    },

    detailsContainer: {
       width: '100%',
      // height: 1350,
      
     //  backgroundColor: 'red'
     },
     footerContainer: {
      width: '100%',
      height: 50,
      backgroundColor: 'yellow'
    },
    box1: {
      height: 500,
      backgroundColor: 'red'
    },
    box2: {
      height: 500,
      backgroundColor: 'white'
    },
    nameNprice:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
      padding: 15
    },

    row:{
     // flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 5,
      padding: 15
    },

    countContainer:{
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
       marginBottom: 5,
       padding: 5
     },
    nameView: {
      marginLeft: 10
    },
    itemName: {
      
    },
    priceView: {
      marginRight: 10
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#9494b8',
      padding: 10,
      height: 60,
     // margin: 10
    },

  })
