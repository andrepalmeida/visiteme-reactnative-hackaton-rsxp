import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';

const Navigator = createAppContainer(
  createSwitchNavigator({
    Login,
    Register,
  })
);

export default Navigator;
