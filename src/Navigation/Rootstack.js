import {
  StackNavigator,
  TabNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import Home from '../home'
import DetailsScreen from '../Page/DetailsScreen'
import Cart from '../Page/Cart'
import Adress from '../Page/Adress'
import Checkout from '../Page/Checkout'
import Confirmation from '../Page/Confirmation'
import SimpleTabsContainer from '../Page/SimpleTabs'
import Menu from '../Page/Menu'
import LocateUs from '../Page/locateus'
import MyNotificationsScreen from '../Page/MyNotificationsScreen'


const checkoutStack = createStackNavigator(
{
  Details:  SimpleTabsContainer,
}
);


const SimpleTabs = createBottomTabNavigator(
  {
    Details:Cart,
    Adress:Adress,
    Checkout:Checkout,
    Confirmation:Confirmation,
    
  },
  {
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  }
);




const DrawNav = createStackNavigator(
  {
    Home: Home,
    Menu: Menu,
    LocateUs: LocateUs
  },
   {
    initialRouteName: 'Home',
  }
  );



  const HomeStack = createDrawerNavigator({
    Main : {
      screen: DrawNav,
    }
  }, {
    screen: DrawNav,
  });


const RootStack = createSwitchNavigator(
  {
    MainScreen: HomeStack,
    checkout: SimpleTabs,
  },
  {
    initialRouteName: 'MainScreen',
  }
);


export default RootStack;