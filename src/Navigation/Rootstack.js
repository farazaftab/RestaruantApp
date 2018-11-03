import {
  StackNavigator,
  TabNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation'

import Home from '../home'
import DetailsScreen from '../Page/DetailsScreen'
import MyNotificationsScreen from '../Page/MyNotificationsScreen'


const DrawNav = createStackNavigator(
{
  Home: Home,
  Details: DetailsScreen,

},
 {
  initialRouteName: 'Home',
}
);



const RootStack = createDrawerNavigator({
  Home: {
    screen: DrawNav,
  },
}, {
    drawerPosition: 'left',
   // drawerOpenRoute: 'DrawerLeftOpen',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
});


export default RootStack;