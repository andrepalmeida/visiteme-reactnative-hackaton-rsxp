import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import BottonTab from './components/BottonTab';

import Login from './pages/Login';
import Register from './pages/Register';

import Events from './pages/Events';
import MyEvents from './pages/MyEvents';
import Profile from './pages/Profile';

const MainNavigator = createBottomTabNavigator(
  {
    Events,
    MyEvents,
    Profile,
  },
  {
    tabBarComponent: BottonTab,
  }
);

const Navigator = createAppContainer(
  createSwitchNavigator({
    Login,
    Register,
    MainNavigator,
  })
);

export default Navigator;
