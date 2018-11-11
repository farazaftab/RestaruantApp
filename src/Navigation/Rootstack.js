import {
  StackNavigator,
  TabNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation'

import Home from '../home'
import DetailsScreen from '../Page/DetailsScreen'
import Menu from '../Page/Menu'
import LocateUs from '../Page/locateus'
import MyNotificationsScreen from '../Page/MyNotificationsScreen'


const DrawNav = createStackNavigator(
{
  Home: Home,
  Details: DetailsScreen,
  Menu: Menu,
  LocateUs: LocateUs

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