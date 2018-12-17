import {
    createAppContainer,
    createSwitchNavigator,
    createBottomTabNavigator,
    createStackNavigator,
} from 'react-navigation';

/* screens> */
import Home from './screens/Home';

import Mail from './screens/Login/Mail';
import Password from './screens/Login/Password';

import Feed from './screens/Main/Feed';
import Goals from './screens/Main/Goals';
import Paths from './screens/Main/Paths';
import Profile from './screens/Main/Feed';
/* <screens */

const mainTabNavigator = createBottomTabNavigator({
    Feed,
    Goals,
    Paths,
    Profile,
});

const loginSwitchNavigator = createSwitchNavigator({
    Mail,
    Password,
    Main: mainTabNavigator,
});

const homeSwitchNavigator = createSwitchNavigator({
    Home,
    loginSwitchNavigator,
});

export default createAppContainer(homeSwitchNavigator);