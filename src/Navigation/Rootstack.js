import {
  StackNavigator,
  TabNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation'

import Home from '../home'
import DetailsScreen from '../Page/DetailsScreen'
import Menu from '../Page/Menu'
import MyNotificationsScreen from '../Page/MyNotificationsScreen'


const DrawNav = createStackNavigator(
{
  Home: Home,
  Details: DetailsScreen,
  Menu: Menu,

},
 {
  initialRouteName: 'Home',
}
);



const RootStack = createDrawerNavigator({
  DrawNav : {
    screen: DrawNav,
  }
}, {
  screen: DrawNav,
});


export default RootStack;